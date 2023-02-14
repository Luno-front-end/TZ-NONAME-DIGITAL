import React, { useState } from "react";

import Button from "@mui/material/Button";
import { Input } from "../Input";
import style from "./auth.module.scss";

import { useAuthByEmail } from "../hooks/useAuthOrRegByEmail";
import { useAuthByGoogle } from "../hooks/useAuthByGoogle";

export const Auth = () => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const { handleLoginEmail } = useAuthByEmail();
  const { handleLoginGoogle } = useAuthByGoogle();

  return (
    <div className="container">
      <div className={style.box_form}>
        <h1>Автотризація</h1>

        <div className={style.form_container}>
          <Input
            classIn={style.form_input}
            value={email}
            setValue={setEmail}
            label="Email"
            type="email"
          />
          <Input
            classIn={style.form_input}
            value={pass}
            setValue={setPass}
            label="Пароль"
            type="password"
          />

          <Button
            variant="contained"
            type="submit"
            onClick={(e) => handleLoginEmail(e, email, pass)}
            className={style.btn_submite}
          >
            Авторизуватися
          </Button>
          <Button
            variant="contained"
            type="submit"
            onClick={(e) => handleLoginGoogle(e)}
            className={style.btn_submite}
          >
            Авторизуватися Google
          </Button>
        </div>
      </div>
    </div>
  );
};
