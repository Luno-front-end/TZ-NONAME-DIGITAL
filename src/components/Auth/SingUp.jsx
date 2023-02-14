import TextField from "@mui/material/TextField";
import { useAuthByGoogle } from "../hooks/useAuthByGoogle";
import Button from "@mui/material/Button";

import style from "./auth.module.scss";
import { useState } from "react";
import { Input } from "../Input";

import { useRegByEmail } from "../hooks/useAuthOrRegByEmail";

export const Reg = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { handleSingUp } = useRegByEmail();
  const { handleLoginGoogle } = useAuthByGoogle();

  return (
    <div className="container">
      <div className={style.box_form}>
        <h1>Реєстрація</h1>

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
            onClick={(e) => {
              handleSingUp(e, email, pass);
            }}
            className={style.btn_submite}
          >
            Зареєструватися
          </Button>
          <Button
            variant="contained"
            type="submit"
            onClick={(e) => handleLoginGoogle(e)}
            className={style.btn_submite}
          >
            Зареєструватися Google
          </Button>
        </div>
      </div>
    </div>
  );
};
