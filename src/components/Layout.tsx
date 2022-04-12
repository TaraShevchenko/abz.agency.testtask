import {useState} from "react";

import AppContext, {AppContextType} from "@context/AppContext";

import Header from "@components/Header/Header";
import Intro from "@components/Intro/Intro";
import Users from "@components/Users/Users";
import SignUp from "@components/SignUp/SignUp";


const Layout = () => {
  const [reloadUsersBlock, setReloadUsersBlock] = useState(false);

  const initialAppContext: AppContextType = {
    app: {
      usersBlock: {
        reloadUsersBlock,
        setReloadUsersBlock
      }
    }
  };
  return (
    <AppContext.Provider value={initialAppContext}>
      <Header />
      <Intro />
      <Users />
      <SignUp />
    </AppContext.Provider>
  );
}

export default Layout;
