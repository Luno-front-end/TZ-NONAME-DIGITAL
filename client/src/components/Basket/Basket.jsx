import style from "./bascet.module.scss";
import itemBasc from "../../itemBasc.json";
import { useState } from "react";

export const Basket = () => {
  const [totalState, setTotalState] = useState(0);

  //   let qwe = 0;

  const totalFn = () => {
    itemBasc.forEach((item) => setTotalState(totalState + Number(item.price)));

    // itemBasc.forEach((item) => (qwe += Number(item.price)));

    return totalState;
  };

  return (
    <div className={style.conainner_basket}>
      <ul>
        {itemBasc.map((item) => (
          <li key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.img} alt="" />
            <p>{item.price}$</p>
          </li>
        ))}
      </ul>

      <p>{totalFn()}</p>
      <button>Купити</button>
    </div>
  );
};
