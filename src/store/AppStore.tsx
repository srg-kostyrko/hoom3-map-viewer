import React from "react";
import { observable } from "mobx";
import { useLocalStore } from "mobx-react-lite";
import { IAppStore } from "../contracts/app";

class AppStore implements IAppStore {
  @observable dummy: null = null;
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

export const useAppStore = () => {
  const store = React.useContext(appStoreContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error("You have forgot to use StoreProvider, shame on you.");
  }
  return store;
};
