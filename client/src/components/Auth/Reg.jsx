import React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import authStyle from "./auth.module.scss";
export const Reg = () => {
  return (
    <div className="container">
      <div className={authStyle.box_form}>
        <h1>Реєстрація</h1>

        <form action="" className={authStyle.form_container}>
          <TextField
            id="filled-basic"
            label="Імʼя"
            variant="filled"
            className={authStyle.form_input}
            required
          />
          <TextField
            id="filled-basic"
            label="Фамілія"
            variant="filled"
            className={authStyle.form_input}
            required
          />
          <TextField
            id="filled-basic"
            label="Nickname"
            variant="filled"
            className={authStyle.form_input}
            required
          />
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            className={authStyle.form_input}
            type="email"
            required
          />
          <TextField
            id="filled-basic"
            label="Пароль"
            variant="filled"
            className={authStyle.form_input}
            type="password"
            required
          />
          <Button variant="contained" type="submite">
            Зареєструватися
          </Button>
        </form>
      </div>
    </div>
  );
};
