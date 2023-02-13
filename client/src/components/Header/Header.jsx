import React from "react";
import { Link, NavLink } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

import { AuthNav } from "./AuthNav/AuthNav";
import { RegistrationNav } from "./AuthNav/RegistrationNav";

import style from "./header.module.scss";

export const Header = () => {
  const { isAuth } = useAuth();

  console.log(isAuth);

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
        {isAuth ? <AuthNav /> : <RegistrationNav />}
      </div>
    </div>
  );
};
// #1976d2
