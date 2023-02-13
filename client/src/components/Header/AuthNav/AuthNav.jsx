import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import style from "../header.module.scss";
import { removeUser } from "../../../Redux/slices/user";

export const AuthNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hendleLogOut = () => {
    dispatch(removeUser());
    navigate("/");
  };
  return (
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
      <li className={style.nav_authItem}>
        <button type="submit" onClick={hendleLogOut}>
          Вийти
        </button>
      </li>
    </ul>
  );
};
