import React, {FormEvent} from 'react';

import style from "@components/SignUp/SignUp.module.scss"

const SignUp = () => {

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("e", e);
  }

  return (
    <div className={style.sign_up}>
      <h2 className={style.sign_up__title}>
        Working with POST request
      </h2>

      <form className={style.sign_up__form} method="post" onSubmit={(e) => handleSubmit(e)}>

        <span className={style.form__input_wrapper}>
          <label className={style.form__input_label}>Name</label>
          <input className={style.form__input} placeholder="Name" type="text"/>
        </span>

        <input className={style.form__input_text} type="text"/>
        <input className={style.form__input_text} type="text"/>

      </form>

    </div>
  );
};

export default SignUp;
