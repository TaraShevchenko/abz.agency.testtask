import {FC} from "react";
import { ReactComponent as LogoIcon } from "@assets/icons/logo.svg";
import Container from "@components/Ui/Container/Container";
import Button from "@components/Ui/Button/Button";

import style from "@components/Header/Header.module.scss"

const Header: FC = () => {
  return (
    <header>
      <Container className={style.header}>
        <div className={style.header__logo}>
          <LogoIcon />
        </div>

        <div className={style.header__button_group}>
          <Button className={style.header__button} children="Users"/>
          <Button className={style.header__button} children="Sign up"/>
        </div>
      </Container>
    </header>
  );
}

export default Header;
