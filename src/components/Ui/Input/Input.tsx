import {FC, FormEvent} from "react";
import cn from "classnames";

import style from "@components/Ui/Input/Input.module.scss";

type InputProps = {
  label: string;
  value: string;
  helpText?: string;
  validate?: boolean;
  onChange: (event: FormEvent) => void;
}

const Input: FC<InputProps> = ({label, value, onChange, validate, helpText}) => (
  <span className={cn(style.input__wrapper,
    {[style.error]: typeof validate !== "undefined" && !validate},
    {[style.active]: value}
  )}>
      <label className={style.input__label}>{label}</label>
      <input className={style.input} tabIndex={0} aria-label={label} type="text" value={value} onChange={onChange}/>
    {!!helpText && <span className={style.input__help_text}>{helpText}</span>}
    </span>
);

export default Input;
