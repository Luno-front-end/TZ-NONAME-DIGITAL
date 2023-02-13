import React from "react";
import { Link } from "react-router-dom";

import style from "./modalAuth.module.scss";

export const ModalAuth = () => {
  return (
    <div className={style.modal_backdrop}>
      <div className={style.modal_container}>
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
