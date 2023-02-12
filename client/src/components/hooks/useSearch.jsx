import { useState } from "react";

export const useSearch = (filteredOptions) => {
  const [stateGoods, setStateGoods] = useState([]);

  const handleChengeSearch = (e, goods, otions) => {
    const values = e.target.value;
    const loverCaseValues = values.toLowerCase();
    if (values === "") {
      return setStateGoods([...filteredOptions(goods, otions)]);
    }
    if (e.code === "Enter") {
      const searchByParam = filteredOptions(goods, otions);
      const searchValues = searchByParam.filter((item) => {
        const lowerCaseItem = item.name.toLowerCase();

        return lowerCaseItem.includes(loverCaseValues);
      });
      setStateGoods([...searchValues]);
      return stateGoods;
    }
  };

  return { handleChengeSearch, stateGoods };
};
