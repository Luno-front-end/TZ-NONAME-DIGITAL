import React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import authStyle from "./auth.module.scss";

export const Auth = () => {
  return (
    <div className="container">
      <div className={authStyle.box_form}>
        <h1>Автотризація</h1>

        <form action="" className={authStyle.form_container}>
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
            Авторизуватися
          </Button>
        </form>
      </div>
    </div>
  );
};
