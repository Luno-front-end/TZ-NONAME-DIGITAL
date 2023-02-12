import React from "react";
import { Link } from "react-router-dom";

import style from "./header.module.scss";

export const Header = () => {
  return (
    <div className={style.header_container}>
      <div>
        <div>
          <Link to="/"></Link>
        </div>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <Link to="/">Головна</Link>
          </li>
          <li className={style.navItem}>
            <Link to="/list-goods">Сторінка з товарами</Link>
          </li>
        </ul>
      </div>
      <div className={style.box_auth}>
        <ul className={style.nav_authList}>
          <li className={style.nav_authItem}>
            <Link to="/registration">Реєстрація</Link>
          </li>
          <li className={style.nav_authItem}>
            <Link to="/auth">Авторизація</Link>
          </li>
        </ul>
        <ul className={style.nav_authList}>
          <li className={style.nav_authItem}>
            <Link to="/registration">Профіль</Link>
          </li>
          <li className={style.nav_authItem}>
            <Link to="/auth">Корзина</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
// #1976d2
