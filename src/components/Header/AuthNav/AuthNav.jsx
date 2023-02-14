import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import style from "../header.module.scss";
import { removeUser } from "../../../Redux/slices/user";
import { useAuth } from "../../hooks/useAuth";

export const AuthNav = ({ setIsActiveMenu, isActiveMenu }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email } = useAuth();

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
          onClick={() => {
            setIsActiveMenu(!isActiveMenu);
          }}
        >
          Корзина
        </NavLink>
      </li>
      <li className={style.nav_authItem}>
        <Link to="/profile">
          <div className={style.box_img}>
            <p className={style.box_imgText}>
              {email.slice(0, 1).toUpperCase()}
            </p>
          </div>
        </Link>
      </li>
      <li className={style.nav_authItem}>
        <button
          type="submit"
          onClick={hendleLogOut}
          className={style.btn_logOut}
        >
          Вийти
        </button>
      </li>
    </ul>
  );
};
