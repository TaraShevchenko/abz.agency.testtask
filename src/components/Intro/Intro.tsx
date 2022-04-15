import cn from "classnames";

import {scrollToElement} from "@services/scrollService";

import Container from "@components/Ui/Container/Container";
import Button from "@components/Ui/Button/Button";

import IntroBg from "@assets/images/Intro.png";
import IntroMobileBg from "@assets/images/IntroMobile.png";
import style from "@components/Intro/Intro.module.scss";

const Intro = () => {
  const scrollToUsersBlock = () => {
    scrollToElement("signUpBlock");
  }

  const css = {backgroundImage: `url(${window.innerWidth > 500 ? IntroBg : IntroMobileBg})`};

  return (
    <Container style={css}
               className={style.intro}>
      <h1 className={cn(style.intro__title, style.intro__text_block)}>
        Test assignment for front-end developer
      </h1>
      <p className={cn(style.intro__description, style.intro__text_block)}>
        What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
        understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They
        should also be excited to learn, as the world of Front-End Development keeps evolving.
      </p>
      <Button children="Sign up" onClick={scrollToUsersBlock}/>
    </Container>
  );
};

export default Intro;
