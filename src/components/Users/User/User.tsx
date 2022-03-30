import {FC} from 'react';
import {UserType} from "@customTypes/types";
import cn from "classnames";

import style from "@components/Users/User/User.module.scss";

const User:FC<UserType> = ({name, photo, email, phone, position}) => (
    <div className={style.user}>
      <img className={style.user__photo} src={photo} alt={name}/>
      <div className={cn(style.user__name, style.user__text)}>{name}</div>
      <div className={style.user__text}>{position}</div>
      <div className={style.user__text}>{email}</div>
      <div className={style.user__text}>{phone}</div>
    </div>
);

export default User;
