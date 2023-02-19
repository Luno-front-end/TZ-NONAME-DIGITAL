import { useState } from "react";

import { SideBar } from "./SideBar";

import { MediaCard } from "./ContainrCard/MediaCard";

import style from "./style/listGoods.module.scss";
import { Search } from "./Search";
import { useCategories } from "../hooks/useCategories";
import { useSearch } from "../hooks/useSearch";
import { useSort } from "../hooks/useSort";
import { Sort } from "./Sort";
import items from "../../items.json";

export const ListGoods = () => {
  const [dataFilters, setDataFilters] = useState({
    type: [],
    brand: [],
    diagonal: [],
  });
  const { filterByOptions } = useCategories();
  const { handleChengeSearch, stateGoods } = useSearch(filterByOptions);
  const { handleChangeSort, values } = useSort(filterByOptions);

  return (
    <div className={style.g_page}>
      <div className={style.content}>
        <div className={style.container_paramSoarch}>
          <Search
            items={items}
            filterByOptions={filterByOptions}
            dataFilters={dataFilters}
            handleChengeSearch={handleChengeSearch}
          />

          <Sort
            items={stateGoods.length === 0 ? items : stateGoods}
            dataFilters={dataFilters}
            handleChangeSort={handleChangeSort}
            valuesSort={values}
          />
          <SideBar setValueInput={setDataFilters} />
        </div>
        <MediaCard
          dataFilters={dataFilters}
          filterByOptions={filterByOptions}
          stateSearch={stateGoods}
        />
      </div>
    </div>
  );
};
