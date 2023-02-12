import { useState } from "react";

export const useSort = (filterByOptions) => {
  //   const { filterByOptions } = props;

  const [values, setValues] = useState("");
  const handleChangeSort = (e, goods, options) => {
    setValues(e.target.value);
    const value = e.target.value;

    switch (value) {
      case "cheap":
        const sortGoodsCheap = goods.sort((a, b) => a.price - b.price);
        filterByOptions(sortGoodsCheap, options);
        break;
      case "expensive":
        const sortGoodsExpensive = goods.sort((a, b) => b.price - a.price);
        filterByOptions(sortGoodsExpensive, options);
        break;
      case "popular":
        const sortGoodsPopular = goods.sort((a, b) => b.favorit - a.favorit);
        filterByOptions(sortGoodsPopular, options);
        break;

      default:
        break;
    }
    // e.preventDefault();
  };

  return { handleChangeSort, values };
};
