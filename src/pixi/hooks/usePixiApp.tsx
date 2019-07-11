import React from "react";
import { Application } from "pixi.js";

export const pixiAppContext = React.createContext<Application | null>(null);

export const usePixiApp = () => {
  const app = React.useContext(pixiAppContext);
  if (!app) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error("You have forgot to use PixiAppProvider, shame on you.");
  }
  return app;
};
