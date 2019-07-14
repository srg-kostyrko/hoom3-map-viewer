import { usePixiApp } from "./hooks/usePixiApp";
import { useEffect } from "react";
import { Spritesheet, Loader as PixiLoader, LoaderResource } from "pixi.js";

interface Resource {
  image: string;
  data: object;
}

export function scheduleAtlasLoading(
  loader: PixiLoader,
  name: string,
  image: string,
  data: object
) {
  if (name in loader.resources) return;
  loader.add(name, image, (resource: LoaderResource) => {
    if (resource.error) {
      console.error(resource.error);
    } else {
      const texture = resource.texture.baseTexture;
      const spritesheet = new Spritesheet(texture, data);
      spritesheet.parse(() => {
        resource.spritesheet = spritesheet;
        resource.textures = spritesheet.textures;
      });
    }
  });
}

export function loadResources(
  loader: PixiLoader,
  resources: { [name: string]: Resource }
) {
  for (const [name, { image, data }] of Object.entries(resources)) {
    scheduleAtlasLoading(loader, name, image, data);
  }

  return new Promise(resolve => {
    loader.load(() => {
      resolve();
    });
  });
}

export function Loader({
  resources
}: {
  resources: { [name: string]: Resource };
}) {
  const app = usePixiApp();

  useEffect(() => {
    loadResources(app.loader, resources).then(() => console.log("loaded"));
  });

  return null;
}
