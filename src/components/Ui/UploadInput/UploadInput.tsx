import {FC, FormEvent} from "react";
import cn from "classnames";

import style from "@components/Ui/UploadInput/UploadInput.module.scss";

type UploadInputProps = {
  value?: string;
  validate?: boolean,
  onChange: (e: FormEvent) => void;
};

const UploadInput: FC<UploadInputProps> = ({validate, onChange, value}) => (
  <div className={style.upload__wrapper}>
    <label
      className={cn(style.upload, {[style.error]: typeof validate !== "undefined" && !validate})}
      tabIndex={0}
      aria-label="Upload image"
    >
      <span className={style.upload__button}>Upload</span>
      <input className={style.upload__input} onChange={onChange} type="file" name="upload"/>
      <span className={style.upload__file_name}>
        <span>{value ? value : "File name"}</span>
      </span>
    </label>
    <span className={style.upload__help_text}>
      You can upload only: <b>.jpeg .jpg</b> files. Min size <b>70x70px</b>.
    </span>
  </div>
);

export default UploadInput;
