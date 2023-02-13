import { NavLink } from "react-router-dom";
import style from "../header.module.scss";

export const RegistrationNav = () => {
  return (
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
  );
};
