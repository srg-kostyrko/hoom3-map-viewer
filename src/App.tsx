import React from "react";
import { Stage } from "./pixi/Stage";
import { Loader } from "./pixi/Loader";
import { resources } from "./assets/homm3/resources";
import { AppStoreProvider, AppStoreConsumer } from "./store/AppStore";
import { LoadMapButton } from "./components/ui/loadMapButton";
import { MiniMap } from "./components/MiniMap";
import { Observer } from "mobx-react-lite";
import { Town } from "./components/town/Town";

export const App = () => {
  return (
    <AppStoreProvider>
      <div className="App">
        <LoadMapButton />
        <AppStoreConsumer>
          {store =>
            store && (
              <>
                <Stage onCreated={store.onPixiAppCreated}>
                  <Loader
                    resources={resources}
                    onLoaded={store.markResourcesLoaded}
                  />
                </Stage>
                <Observer>
                  {() =>
                    store.mapData ? <MiniMap mapData={store.mapData} /> : <></>
                  }
                </Observer>
              </>
            )
          }
        </AppStoreConsumer>
        <Town />
      </div>
    </AppStoreProvider>
  );
};
