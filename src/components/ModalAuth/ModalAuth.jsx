import React from "react";
import { Link } from "react-router-dom";

import CloseIcon from "@mui/icons-material/Close";

import style from "./modalAuth.module.scss";

export const ModalAuth = ({ setOnModal }) => {
  return (
    <div className={style.modal_backdrop}>
      <div className={style.modal_container}>
        <button
          type="button"
          className={style.modal_btnClose}
          onClick={() => setOnModal(false)}
        >
          <CloseIcon />
        </button>

        <h1 className={style.modal_header}>
          Щоб додати товар до кошика, Вам потрібно
        </h1>
        <div className={style.link_contsiner}>
          <Link to="/auth" className={style.modal_link}>
            Увійти
          </Link>
          <p className={style.text}>або</p>
          <Link to="/registration" className={style.modal_link}>
            Зареєструватися
          </Link>
        </div>
      </div>
    </div>
  );
};
