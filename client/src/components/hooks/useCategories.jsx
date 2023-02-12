export const useCategories = (props) => {
  const filterByOptions = (goods, options) => {
    const cleanOptions = remoteEmptyValues(options);
    const objKeys = Object.keys(cleanOptions);
    const filteredGoods = goods.filter((item) => {
      return objKeys.every((key) => {
        return cleanOptions[key]?.includes(item[key]?.toString());
      });
    });

    return filteredGoods;
  };

  const remoteEmptyValues = (object) => {
    const newObj = { ...object };

    for (const key in newObj) {
      if (newObj.hasOwnProperty(key)) {
        const value = newObj[key];
        if (value.length === 0) {
          delete newObj[key];
        }
      }
    }
    return newObj;
  };

  return { filterByOptions };
};
