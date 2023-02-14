import { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import style from "./style/sort.module.scss";

import { useSort } from "../hooks/useSort";

export const Sort = ({ items, dataFilters, handleChangeSort, valuesSort }) => {
  return (
    <div className={style.container_sort}>
      <FormControl
        variant="filled"
        sx={{ width: "100%" }}
        className={style.sort_form}
      >
        <InputLabel id="demo-simple-select-filled-label">Сортувати </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={valuesSort}
          onChange={(e) => handleChangeSort(e, items, dataFilters)}
        >
          <MenuItem value="cheap">Від дешевих до дорогих</MenuItem>
          <MenuItem value="expensive">Від дорогих до дешевих </MenuItem>
          <MenuItem value="popular">По Рейттингу</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
