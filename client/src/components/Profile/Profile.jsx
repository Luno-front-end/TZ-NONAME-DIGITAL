import style from "./profile.module.scss";

export const Profile = () => {
  return (
    <div className={style.container_profile}>
      <h1 className={style.container_profile}>
        Вітаю вас у своєму профілі Макс
      </h1>
      <div className={style.container_profile}>
        <p className={style.container_profile}>М</p>
      </div>
      <div className={style.container_profile}>
        <ul className={style.container_profile}>
          <li className={style.container_profile}>Пошта: Max@gmail.com</li>
        </ul>
      </div>
    </div>
  );
};
