import React, { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { Input } from "../Input";
import style from "./auth.module.scss";

import { useAuthByEmail } from "../hooks/useAuthOrRegByEmail";
import { useAuthByGoogle } from "../hooks/useAuthByGoogle";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { handleLoginEmail } = useAuthByEmail();
  const { handleLoginGoogle } = useAuthByGoogle();

  return (
    <div className="container">
      <div className={style.box_form}>
        <h1>Автотризація</h1>

        <form
          onSubmit={(e) => handleLoginEmail(e, email, pass)}
          className={style.form_container}
        >
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            className={style.form_input}
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Пароль"
            variant="filled"
            className={style.form_input}
            type="password"
            value={pass}
            required
            onChange={(e) => setPass(e.target.value)}
          />
          <Button
            variant="contained"
            type="submit"
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
        </form>
      </div>
    </div>
  );
};
