import {scrollToElement} from "@services/scrollService";

import Container from "@components/Ui/Container/Container";
import Button from "@components/Ui/Button/Button";

import {ReactComponent as LogoIcon} from "@assets/icons/logo.svg";
import style from "@components/Header/Header.module.scss"

const Header = () => {

  const scrollToUsersBlock = () => {
    scrollToElement("usersBlock");
  };
  const scrollToSignUpBlock = () => {
    scrollToElement("signUpBlock");
  };

  return (
    <header>
      <Container className={style.header}>
        <div className={style.header__logo}>
          <LogoIcon/>
        </div>

        <div className={style.header__button_group}>
          <Button className={style.header__button} onClick={scrollToUsersBlock} children="Users"/>
          <Button className={style.header__button} onClick={scrollToSignUpBlock} children="Sign up"/>
        </div>
      </Container>
    </header>
  );
};

export default Header;
