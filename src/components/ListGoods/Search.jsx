import React from "react";

import TextField from "@mui/material/TextField";
import style from "./style/search.module.scss";

export const Search = ({ items, dataFilters, handleChengeSearch }) => {
  return (
    <div className={style.container_search}>
      <TextField
        id="filled-basic"
        label="Пошук"
        variant="filled"
        type="text"
        className={style.search_input}
        onKeyDown={(e) => {
          handleChengeSearch(e, items, dataFilters);
        }}
      />
    </div>
  );
};
