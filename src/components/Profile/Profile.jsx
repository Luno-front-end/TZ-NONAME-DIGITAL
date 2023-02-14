import { useAuth } from "../hooks/useAuth";
import style from "./profile.module.scss";

export const Profile = () => {
  const { email } = useAuth();

  return (
    <div className={style.profile}>
      <div className={style.container_profile}>
        <h1 className={style.welcome_head}>
          Вітаю вас у своєму профілі {email}
        </h1>
        <div className={style.box_content}>
          <div className={style.box_img}>
            <p className={style.box_imgText}>
              {email.slice(0, 1).toUpperCase()}
            </p>
          </div>
          <div className={style.box_info}>
            <ul className={style.box_list}>
              <li className={style.box_item}>Пошта: {email}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
