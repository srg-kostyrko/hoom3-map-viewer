import React from "react";
import { Stage } from "./pixi/Stage";
import { Loader } from "./pixi/Loader";
import { resources } from "./assets/homm3/resources";
import { AppStoreProvider, AppStoreConsumer } from "./store/AppStore";

export const App = () => {
  return (
    <AppStoreProvider>
      <div className="App">
        <AppStoreConsumer>
          {store =>
            store && (
              <Stage onCreated={store.onPixiAppCreated}>
                <>
                  <Loader
                    resources={resources}
                    onLoaded={store.markResourcesLoaded}
                  />
                </>
              </Stage>
            )
          }
        </AppStoreConsumer>
      </div>
    </AppStoreProvider>
  );
};
