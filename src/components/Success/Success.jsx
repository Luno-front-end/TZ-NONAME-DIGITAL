import style from "./success.module.scss";

export const Success = () => {
  return (
    <div className={style.container_success}>
      <div className={style.box_success}>
        <h1 className={style.success_head}>
          Дякуємо за купівлю. Очікуйте дзвінка менеджера
        </h1>
      </div>
    </div>
  );
};
