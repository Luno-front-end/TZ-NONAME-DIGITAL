import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import style from "./style/sideBar.module.scss";

import { MediaCard } from "./ContainrCard/MediaCard";

export const SideBar = (props) => {
  const handleChange = (e) => {
    const selectNameInput = e.target.name;
    const valueInput = e.target.value;

    const check = e.target.checked;
    if (check) {
      props.setValueInput((prev) => {
        return {
          ...prev,
          [selectNameInput]: [...prev[selectNameInput], valueInput],
        };
      });
    } else {
      props.setValueInput((prev) => {
        const deleteEl = prev[selectNameInput].filter(
          (el) => el !== valueInput
        );
        return { ...prev, [selectNameInput]: [...deleteEl] };
      });
    }
  };

  return (
    <div className={style.side_bar}>
      <div className={style.fixedBar}>
        <div>
          <p className={style.headerBar}>Категорія</p>
          <ul>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="Телевізори"
                value="tv"
                name="type"
                onChange={handleChange}
              />
            </li>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="Телефони"
                value="phone"
                name="type"
                onChange={handleChange}
              />
            </li>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="Ноутбуки"
                value="notebook"
                name="type"
                onChange={handleChange}
              />
            </li>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="Монітори"
                value="monitor"
                name="type"
                onChange={handleChange}
              />
            </li>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="Фотоапарати"
                value="camera"
                name="type"
                onChange={handleChange}
              />
            </li>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="Смарт годинники"
                value="bracelet"
                name="type"
                onChange={handleChange}
              />
            </li>
          </ul>
        </div>
        <div>
          <p className={style.headerBar}>Бренд</p>
          <ul>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="Apple"
                value="apple"
                name="brand"
                onChange={handleChange}
              />
            </li>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="Xiaomi"
                value="xiaomi"
                name="brand"
                onChange={handleChange}
              />
            </li>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="Sony"
                value="sony"
                name="brand"
                onChange={handleChange}
              />
            </li>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="Ergo"
                value="ergo"
                name="brand"
                onChange={handleChange}
              />
            </li>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="HP"
                value="hp"
                name="brand"
                onChange={handleChange}
              />
            </li>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="DELL"
                value="dell"
                name="brand"
                onChange={handleChange}
              />
            </li>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="LG"
                value="lg"
                name="brand"
                onChange={handleChange}
              />
            </li>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="Canon"
                value="canon"
                name="brand"
                onChange={handleChange}
              />
            </li>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="Panasonic"
                value="panasonic"
                name="brand"
                onChange={handleChange}
              />
            </li>
          </ul>
        </div>
        <div>
          <p className={style.headerBar}>Діагональ</p>
          <ul>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="2"
                value="2"
                name="diagonal"
                onChange={handleChange}
              />
            </li>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="4"
                value="4"
                name="diagonal"
                onChange={handleChange}
              />
            </li>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="4.2"
                value="4.2"
                name="diagonal"
                onChange={handleChange}
              />
            </li>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="5"
                value="5"
                name="diagonal"
                onChange={handleChange}
              />
            </li>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="14"
                value="14"
                name="diagonal"
                onChange={handleChange}
              />
            </li>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="15"
                value="15"
                name="diagonal"
                onChange={handleChange}
              />
            </li>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="16"
                value="16"
                name="diagonal"
                onChange={handleChange}
              />
            </li>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="24"
                value="24"
                name="diagonal"
                onChange={handleChange}
              />
            </li>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="27"
                value="27"
                name="diagonal"
                onChange={handleChange}
              />
            </li>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="32"
                value="32"
                name="diagonal"
                onChange={handleChange}
              />
            </li>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="42"
                value="42"
                name="diagonal"
                onChange={handleChange}
              />
            </li>
            <li>
              <FormControlLabel
                control={<Checkbox />}
                label="50"
                value="50"
                name="diagonal"
                onChange={handleChange}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
