import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

import { AuthNav } from "./AuthNav/AuthNav";
import { RegistrationNav } from "./AuthNav/RegistrationNav";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";

import style from "./header.module.scss";

export const Header = () => {
  const { isAuth } = useAuth();
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  return (
    <div className={style.header_container}>
      <BurgerMenu
        setIsActiveMenu={setIsActiveMenu}
        isActiveMenu={isActiveMenu}
      />
      <div className={isActiveMenu ? style.activeMobile : style.inActiveMobile}>
        <div className={style.box_header}>
          <div>
            <ul className={style.navList}>
              <li className={style.navItem}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? style.active : style.navLink
                  }
                  onClick={() => {
                    setIsActiveMenu(!isActiveMenu);
                  }}
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
                  onClick={() => {
                    setIsActiveMenu(!isActiveMenu);
                  }}
                >
                  Сторінка з товарами
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={style.box_auth}>
            {isAuth ? (
              <AuthNav
                setIsActiveMenu={setIsActiveMenu}
                isActiveMenu={isActiveMenu}
              />
            ) : (
              <RegistrationNav
                setIsActiveMenu={setIsActiveMenu}
                isActiveMenu={isActiveMenu}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
// #1976d2
