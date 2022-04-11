import {FC, FormEvent} from 'react';
import cn from "classnames";

import {PositionRadioElement} from "@customTypes/types";

import style from "@components/Ui/RadioList/RadioList.module.scss";

type RadioListProps = {
  elements: PositionRadioElement[] | null;
  onChange: (event: FormEvent) => void;
  validate?: boolean;
}

const RadioList: FC<RadioListProps> = ({elements, onChange, validate}) => {
  return (
    <>
      <p className={style.radio_list__title}>Please select your preferred contact method:</p>
      <div className={style.radio_list}>
        {!!elements && elements.map((el) => (
          <label key={el.id} className={style.radio_list__label}>
            <input
              type="radio"
              id={`${el.id}`}
              onChange={onChange}
              checked={el.checked}
              className={cn(style.radio_list__input, {[style.error]: typeof validate !== "undefined" && !validate})}
            />
            <span>{el.name}</span>
          </label>
        ))}
      </div>
    </>
  );
};

export default RadioList;
