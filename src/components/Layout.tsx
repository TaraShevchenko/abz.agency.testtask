import {FC} from "react";
import Header from "@components/Header/Header";
import Intro from "@components/Intro/Intro";
import Users from "@components/Users/Users";
import SignUp from "@components/SignUp/SignUp";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Intro />
      <Users />
      <SignUp />
    </>
  );
}

export default Layout;
