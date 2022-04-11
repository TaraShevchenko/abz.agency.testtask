import {FormEvent, useEffect, useState} from "react";

import {getPositions, getToken, setUser} from "@services/apiServices";
import {PositionRadioElement} from "@customTypes/types";

import Input from "@components/Ui/Input/Input";
import Button from "@components/Ui/Button/Button";
import RadioList from "@components/Ui/RadioList/RadioList";
import UploadInput from "@components/Ui/UploadInput/UploadInput";

import image from "@assets/images/success-image.png";

import style from "@components/SignUp/SignUp.module.scss"

const SignUp = () => {
  const [formSent , setFormSent] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [nameValidate, setNameValidate] = useState<boolean | undefined>(undefined);
  const [email, setEmail] = useState<string>("");
  const [emailValidate, setEmailValidate] = useState<boolean | undefined>(undefined);
  const [phone, setPhone] = useState<string>("");
  const [phoneValidate, setPhoneValidate] = useState<boolean | undefined>(undefined);

  const [position, setPosition] = useState<PositionRadioElement[] | null>(null);
  const [positionValidate, setPositionValidate] = useState<boolean | undefined>(undefined);

  const [upload, setUpload] = useState<File | null>(null);
  const [uploadValidate, setUploadValidate] = useState<boolean | undefined>(undefined);
  const [uploadImageSize, setUploadImageSize] = useState<{ width: number, height: number }>({
    width: 0,
    height: 0
  });

  const getPositionData = async () => {
    const positionsResponse = await getPositions().then(response => response.positions.map(position => ({
      id: position.id,
      name: position.name,
      checked: false
    })));

    setPosition(positionsResponse);
  }

  useEffect(() => {
    getPositionData();
  }, []);

  const setNewUser = async () => {
    const token: string = await getToken().then(response => response.token);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    if (position) formData.append("position_id",position.filter(item => item.checked).map(item => item.id)[0].toString());
    if (upload) formData.append("photo", upload);
    setUser(formData, token).then((res) => res.success ? setFormSent(true) : console.log("error"));;
  }

  const onSubmit = (data: FormEvent) => {
    data.preventDefault();

    const nameResult = onNameValidate();
    const emailResult = onEmailValidate();
    const phoneResult = onPhoneValidate();
    const uploadResult = onUploadValidate();
    const positionResult = onPositionValidate();

    if (nameResult && emailResult && phoneResult && uploadResult && positionResult) {
      setNewUser();
    }
  };

  const onChange = (event: FormEvent, setValue: (value: string) => void) => {
    const target = event.target as HTMLInputElement;
    setValue(target.value);
  };

  const onNameValidate = () => {
    const validateArr = name.match(/\p{L}/gu)
    const validate = name.length > 2 && name.length < 60;
    const result = validate && validateArr?.join("") === name;
    setNameValidate(result);
    return result;
  };

  const onEmailValidate = () => {
    const validateString = email.match(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);
    const validate = email.length > 2 && email.length < 100;
    const result = validate && validateString?.join("") === email;
    setEmailValidate(validate && validateString?.input === email);
    return result;
  };

  const onPhoneChange = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    setPhone(phone === "" ? "+38" + target.value : target.value);
  };

  const onPhoneValidate = () => {
    const validateString = phone.match(/^[\+]{0,1}380([0-9]{9})$/);
    const validate = phone.length === 13;
    const result = validate && validateString?.input === phone;
    setPhoneValidate(validate && validateString?.input === phone);
    return result;

  }

  const onUploadChange = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    if (target.files![0]) {
      const img = new Image();
      img.src = window.URL.createObjectURL(target.files![0])
      img.onload = () => {
        setUploadImageSize({
          width: img.width,
          height: img.height
        })
      }
      setUpload(target.files![0]);
    }
  };

  const onUploadValidate = () => {
    let result = false;
    if (upload) {
      result = uploadImageSize.width > 70
        && uploadImageSize.height > 70
        && (upload.size / (1024 * 1024)) < 5
        && (upload.type === "image/jpeg" || upload.type === "image/jpg");
      setUploadValidate(result);
    } else {
      setUploadValidate(result);
    }
    return result;
  };

  const onRadioChange = (event: FormEvent) => {
    if (position) {
      const target = event.target as HTMLInputElement;
      const newPosition = position.map(item => {
        item.checked = item.id === parseInt(target.id);
        return item;
      });
      setPosition(newPosition);
    }
  }

  const onPositionValidate = () => {
    let result = false;

    if (position) {
      result = position.some(item => item.checked);
      setPositionValidate(result);
    } else {
      setPositionValidate(result);
    }

    return result;
  }

  return (
    <div className={style.sign_up}>
      <h2 className={style.sign_up__title}>
        {!formSent ? "Working with POST request" : "User successfully registered"}
      </h2>

      {!formSent ? <form
        method="post"
        onSubmit={onSubmit}
        className={style.sign_up__form}
      >
        <Input
          label="Your name"
          value={name}
          validate={nameValidate}
          onChange={(e) => onChange(e, setName)}
        />

        <Input
          label="Email"
          value={email}
          validate={emailValidate}
          onChange={(e) => onChange(e, setEmail)}
        />

        <Input
          label="Phone"
          value={phone}
          validate={phoneValidate}
          helpText="+38 (XXX) XXX - XX - XX"
          onChange={onPhoneChange}
        />

        <RadioList elements={position} onChange={onRadioChange} validate={positionValidate}/>

        <UploadInput value={upload?.name} onChange={onUploadChange} validate={uploadValidate}/>

        <Button type="submit" className={style.sign_up__button}>Submit</Button>
      </form> : <img src={image} alt="Success"/>}

    </div>
  );
};

export default SignUp;
