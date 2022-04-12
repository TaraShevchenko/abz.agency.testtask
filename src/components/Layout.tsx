import {useState} from "react";

import Header from "@components/Header/Header";
import Intro from "@components/Intro/Intro";
import Users from "@components/Users/Users";
import SignUp from "@components/SignUp/SignUp";


const Layout = () => {
  const [reloadUsersBlock, setReloadUsersBlock] = useState(false);
  return (
    <>
      <Header />
      <Intro />
      <Users reloadUsersBlock={reloadUsersBlock}/>
      <SignUp setReloadUsersBlock={setReloadUsersBlock} />
    </>
  );
}

export default Layout;
