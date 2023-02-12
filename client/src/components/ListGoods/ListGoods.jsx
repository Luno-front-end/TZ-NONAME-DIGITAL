import { useState } from "react";

import { SideBar } from "./SideBar";
import { MediaCard } from "./MediaCard";

import style from "./style/listGoods.module.scss";

export const ListGoods = () => {
  const [dataFilters, setDataFilters] = useState({
    type: [],
    brand: [],
    diagonal: [],
  });

  return (
    <div className={style.g_page}>
      <SideBar setValueInput={setDataFilters} />
      <div className={style.content}>
        <MediaCard dataFilters={dataFilters} />
      </div>
    </div>
  );
};
