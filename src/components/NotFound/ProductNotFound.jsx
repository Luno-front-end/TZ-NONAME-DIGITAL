import React from "react";

import style from "./productNotFound.module.scss";

export const ProductNotFound = () => {
  return (
    <div className={style.containner_productNotFound}>
      <h1 className={style.content}>
        Вибачте, товар по заданим фільтрам не знайдено.
      </h1>
    </div>
  );
};
