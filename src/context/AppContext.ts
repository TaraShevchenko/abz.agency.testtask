import {createContext} from "react";

export type AppContextType = {
  app: {
    usersBlock: {
      reloadUsersBlock: boolean,
      setReloadUsersBlock: (value: boolean) => void
    }
  }
};

const AppContext = createContext<AppContextType | null>(null);

export default AppContext;
