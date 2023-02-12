import React from "react";
import { Link, NavLink } from "react-router-dom";

import style from "./header.module.scss";

export const Header = () => {
  let activeStyle = {
    backgroundColor: "rgb(97, 97, 97)",
  };
  return (
    <div className={style.header_container}>
      <div>
        <div>
          <Link to="/"></Link>
        </div>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? style.active : style.navLink
              }
              // style={({ isActive }) => (isActive ? style.navLink : undefined)}
            >
              Головна
            </NavLink>
          </li>
          <li className={style.navItem}>
            <NavLink
              to="/list-goods"
              className={({ isActive }) =>
                isActive ? style.active : style.navLink
              }
            >
              Сторінка з товарами
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={style.box_auth}>
        <ul className={style.nav_authList}>
          <li className={style.nav_authItem}>
            <NavLink
              to="/registration"
              className={({ isActive }) =>
                isActive ? style.active : style.navLink
              }
            >
              Реєстрація
            </NavLink>
          </li>
          <li className={style.nav_authItem}>
            <NavLink
              to="/auth"
              className={({ isActive }) =>
                isActive ? style.active : style.navLink
              }
            >
              Авторизація
            </NavLink>
          </li>
        </ul>
        <ul className={style.nav_authList}>
          <li className={style.nav_authItem}>
            <NavLink
              to="/basket"
              className={({ isActive }) =>
                isActive ? style.active : style.navLink
              }
            >
              Корзина
            </NavLink>
          </li>
          <li className={style.nav_authItem}>
            <Link to="/profile">Профіль</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
// #1976d2
