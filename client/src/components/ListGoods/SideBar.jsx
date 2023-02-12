import { useState } from "react";

import style from "./style/sideBar.module.scss";

import { MediaCard } from "./MediaCard";

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
      <div>
        <p>Категорія</p>
        <ul>
          <li>
            <input
              id="tv"
              type="checkbox"
              value="tv"
              name="type"
              onChange={handleChange}
            />{" "}
            <label htmlFor="tv">Телевізори</label>
          </li>
          <li>
            <input
              id="phone"
              type="checkbox"
              value="phone"
              name="type"
              onChange={handleChange}
            />{" "}
            <label htmlFor="phone">Телефони</label>
          </li>
          <li>
            <input
              id="notebook"
              type="checkbox"
              value="notebook"
              name="type"
              onChange={handleChange}
            />{" "}
            <label htmlFor="notebook">Ноутбуки</label>
          </li>
          <li>
            <input
              id="monitor"
              type="checkbox"
              value="monitor"
              name="type"
              onChange={handleChange}
            />{" "}
            <label htmlFor="monitor">Монітори</label>
          </li>
          <li>
            <input
              id="camera"
              type="checkbox"
              value="camera"
              name="type"
              onChange={handleChange}
            />{" "}
            <label htmlFor="camera">Фотоапарати</label>
          </li>
          <li>
            <input
              id="bracelet"
              type="checkbox"
              value="bracelet"
              name="type"
              onChange={handleChange}
            />{" "}
            <label htmlFor="bracelet">Смарт годинники</label>
          </li>
        </ul>
      </div>
      <div>
        <p>Бренд</p>
        <ul>
          <li>
            <input
              id="apple"
              type="checkbox"
              value="apple"
              name="brand"
              onChange={handleChange}
            />{" "}
            <label htmlFor="apple">Apple</label>
          </li>
          <li>
            <input
              id="xiaomi"
              type="checkbox"
              value="xiaomi"
              name="brand"
              onChange={handleChange}
            />{" "}
            <label htmlFor="xiaomi">Xiaomi</label>
          </li>
          <li>
            <input
              id="sony"
              type="checkbox"
              value="sony"
              name="brand"
              onChange={handleChange}
            />{" "}
            <label htmlFor="sony">Apple</label>
          </li>
          <li>
            <input
              id="ergo"
              type="checkbox"
              value="ergo"
              name="brand"
              onChange={handleChange}
            />{" "}
            <label htmlFor="ergo">Ergo</label>
          </li>
          <li>
            <input
              id="hp"
              type="checkbox"
              value="hp"
              name="brand"
              onChange={handleChange}
            />{" "}
            <label htmlFor="hp">HP</label>
          </li>
          <li>
            <input
              id="dell"
              type="checkbox"
              value="dell"
              name="brand"
              onChange={handleChange}
            />{" "}
            <label htmlFor="dell">DELL</label>
          </li>
          <li>
            <input
              id="lg"
              type="checkbox"
              value="lg"
              name="brand"
              onChange={handleChange}
            />{" "}
            <label htmlFor="lg">LG</label>
          </li>
          <li>
            <input
              id="canon"
              type="checkbox"
              value="canon"
              name="brand"
              onChange={handleChange}
            />{" "}
            <label htmlFor="canon">Canon</label>
          </li>
          <li>
            <input
              id="panasonic"
              type="checkbox"
              value="panasonic"
              name="brand"
              onChange={handleChange}
            />{" "}
            <label htmlFor="panasonic">Panasonic</label>
          </li>
        </ul>
      </div>
      <div>
        <p>Діагональ</p>
        <ul>
          <li>
            <input
              id="2"
              type="checkbox"
              value="2"
              name="diagonal"
              onChange={handleChange}
            />{" "}
            <label htmlFor="2">2</label>
          </li>
          <li>
            <input
              id="4"
              type="checkbox"
              value="4"
              name="diagonal"
              onChange={handleChange}
            />{" "}
            <label htmlFor="4">4</label>
          </li>
          <li>
            <input
              id="4.2"
              type="checkbox"
              value="4.2"
              name="diagonal"
              onChange={handleChange}
            />{" "}
            <label htmlFor="4.2">4.2</label>
          </li>
          <li>
            <input
              id="5"
              type="checkbox"
              value="5"
              name="diagonal"
              onChange={handleChange}
            />{" "}
            <label htmlFor="5">5</label>
          </li>
          <li>
            <input
              id="14"
              type="checkbox"
              value="14"
              name="diagonal"
              onChange={handleChange}
            />{" "}
            <label htmlFor="14">14</label>
          </li>
          <li>
            <input
              id="15"
              type="checkbox"
              value="15"
              name="diagonal"
              onChange={handleChange}
            />{" "}
            <label htmlFor="15">15</label>
          </li>
          <li>
            <input
              id="16"
              type="checkbox"
              value="16"
              name="diagonal"
              onChange={handleChange}
            />{" "}
            <label htmlFor="16">16</label>
          </li>
          <li>
            <input
              id="24"
              type="checkbox"
              value="24"
              name="diagonal"
              onChange={handleChange}
            />{" "}
            <label htmlFor="24">24</label>
          </li>
          <li>
            <input
              id="27"
              type="checkbox"
              value="27"
              name="diagonal"
              onChange={handleChange}
            />{" "}
            <label htmlFor="27">27</label>
          </li>
          <li>
            <input
              id="32"
              type="checkbox"
              value="32"
              name="diagonal"
              onChange={handleChange}
            />{" "}
            <label htmlFor="32">32</label>
          </li>
          <li>
            <input
              id="42"
              type="checkbox"
              value="42"
              name="diagonal"
              onChange={handleChange}
            />{" "}
            <label htmlFor="42">42</label>
          </li>
          <li>
            <input
              id="50"
              type="checkbox"
              value="50"
              name="diagonal"
              onChange={handleChange}
            />{" "}
            <label htmlFor="50">50</label>
          </li>
        </ul>
      </div>
      <div>
        <p>Ціна</p>
        Меньша Більша
      </div>
    </div>
  );
};
