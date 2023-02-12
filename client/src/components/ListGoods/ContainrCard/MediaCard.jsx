import items from "../../../items.json";
import style from "../style/card.module.scss";
import { ProductNotFound } from "../../NotFound/ProductNotFound";
import { ContainerCard } from "./ContainerCard";

export const MediaCard = (props) => {
  const { dataFilters, filterByOptions, stateSearch } = props;

  return (
    <div className={style.container_card}>
      <div className={style.box_card}>
        {filterByOptions(items, dataFilters).length === 0 ? (
          <ProductNotFound />
        ) : (
          <ContainerCard
            filterByOptions={filterByOptions}
            dataFilters={dataFilters}
            stateSearch={stateSearch}
          />
        )}
      </div>
    </div>
  );
};
