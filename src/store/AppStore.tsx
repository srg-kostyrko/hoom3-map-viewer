import React from "react";
import { observable, action } from "mobx";
import { useLocalStore } from "mobx-react-lite";
import { IAppStore, MapData } from "../contracts/app";
import { H3MFile, MapObject, MapObjectAB, MapObjectRoE } from "homm3-parsers";
import { NavMeshType, ViewportPosition } from "../contracts/map";
import { getLevelObjects } from "../helpers/map";

// import demoMap from "../assets/homm3/maps/sod_grounds.json";
import demoMap from "../assets/homm3/maps/rnd1.json";
import { Application, Rectangle, Container } from "pixi.js";
import { Viewport } from "pixi-viewport";
import { createMap } from "../components/map/map";
import { BORDER_WIDTH, TILE_SIZE } from "../components/map/MapConst";

class AppStore implements IAppStore {
  @observable.ref mapData: MapData | null = null;
  @observable.ref viewportPosition: ViewportPosition = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
  @observable areResourcesLoaded: boolean = false;

  pixiApp: Application | null = null;
  viewport: Viewport | null = null;

  mapContainer: Container | null = null;
  ground: {
    level: Container;
    navMeshLayer: Container;
  } | null = null;
  sub: {
    level: Container;
    navMeshLayer: Container;
  } | null = null;

  prepareMapData(mapData: H3MFile): MapData {
    const mapSize = mapData.info.mapSize;

    const hasTwoLevels = mapData.info.hasTwoLevels;
    const levels = {
      ground: this.getLevelData(0, mapSize, mapData),
      sub: hasTwoLevels ? this.getLevelData(1, mapSize, mapData) : null
    };

    const map = {
      mapSize,
      hasTwoLevels,
      levels,
      mapData
    };

    return map;
  }

  getLevelData(level: number, mapSize: number, map: H3MFile) {
    const tileCount = mapSize * mapSize;
    const offset = tileCount * level;

    const tiles = map.tiles.slice(offset, offset + tileCount);
    const objects = getLevelObjects(map, level);
    const navmesh = this.calculateNavMesh(mapSize, objects);

    return {
      tiles,
      objects,
      navmesh
    };
  }

  calculateNavMesh(
    mapSize: number,
    objects: MapObject[] | MapObjectAB[] | MapObjectRoE[]
  ) {
    const tileCount = mapSize * mapSize;
    const passabilityData = Array.from(
      { length: tileCount },
      () => NavMeshType.Passable
    );
    for (const obj of objects) {
      const { x, y } = obj;
      const { passable, active } = obj.attributes;
      for (let xOffset = 0; xOffset < 8; xOffset += 1) {
        for (let yOffset = 0; yOffset < 6; yOffset += 1) {
          const yIndex = 5 - yOffset;
          const xIndex = 7 - xOffset;
          const localY = y - yOffset;
          const localX = x - xOffset;
          if (x >= 0 && y >= 0) {
            const passableStatus = passable[yIndex] & (1 << xIndex);
            const activeStatus = active[yIndex] & (1 << xIndex);
            const index = localY * mapSize + localX;
            if (activeStatus) {
              passabilityData[index] = NavMeshType.Active;
            } else if (!passableStatus) {
              passabilityData[index] = NavMeshType.NotPassable;
            }
          }
        }
      }
    }
    return passabilityData;
  }

  createViewport() {
    const pixiApp = this.pixiApp;
    if (!pixiApp) return;
    this.viewport = new Viewport({
      screenWidth: pixiApp.stage.width,
      screenHeight: pixiApp.stage.height,
      // worldWidth: options.worldWidth,
      // worldHeight: options.worldHeight,

      interaction: pixiApp.renderer.plugins.interaction
    });

    this.viewport
      .drag()
      .clamp({
        direction: "all"
      })
      .decelerate()
      .on("moved-end", () => {
        if (this.viewport) {
          const bounds = new Rectangle(
            this.viewport.left,
            this.viewport.top,
            this.viewport.worldScreenWidth,
            this.viewport.worldScreenHeight
          );
          this.onViewportMoved(bounds);
        }
      });

    // add the viewport to the stage
    pixiApp.stage.addChild(this.viewport);
  }

  @action.bound
  onObjectClick(object: MapObject | MapObjectAB | MapObjectRoE) {}

  @action.bound
  onPixiAppCreated(pixiApp: Application) {
    this.pixiApp = pixiApp;
    this.createViewport();
  }

  @action.bound
  onResize(width: number, height: number) {}

  @action.bound
  onViewportMoved(position: ViewportPosition) {
    this.viewportPosition = position;
  }

  changeViewportCenter(x: number, y: number) {
    if (this.viewport) {
      this.viewport.moveCorner(x, y);
    }
  }

  @action.bound
  markResourcesLoaded() {
    this.areResourcesLoaded = true;
    this.changeMap(demoMap as H3MFile);
  }

  @action.bound
  changeMap(content: H3MFile) {
    this.dispsosePrevMap();
    this.mapData = this.prepareMapData(content);
    const { mapContainer, ground, sub } = createMap(
      this.mapData,
      this.onObjectClick
    );
    this.mapContainer = mapContainer;
    this.ground = ground;
    this.sub = sub;

    const worldSize = (this.mapData.mapSize + BORDER_WIDTH * 2) * TILE_SIZE;
    if (this.viewport && this.pixiApp) {
      this.viewport.resize(
        this.pixiApp.view.width,
        this.pixiApp.view.height,
        worldSize,
        worldSize
      );
      this.viewport.addChild(mapContainer);
    }
  }

  dispsosePrevMap() {
    this.mapContainer && this.mapContainer.destroy();
    this.mapContainer = null;
    this.ground = null;
    this.sub = null;
    this.viewport && this.viewport.removeChildren();
  }
}

const appStoreContext = React.createContext<IAppStore | null>(null);

export const AppStoreProvider = ({ children }: { children: JSX.Element }) => {
  const store = useLocalStore(() => new AppStore());
  return (
    <appStoreContext.Provider value={store}>
      {children}
    </appStoreContext.Provider>
  );
};

export const AppStoreConsumer = appStoreContext.Consumer;

export const useAppStore = () => {
  const store = React.useContext(appStoreContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error("You have forgot to use StoreProvider, shame on you.");
  }
  return store;
};
