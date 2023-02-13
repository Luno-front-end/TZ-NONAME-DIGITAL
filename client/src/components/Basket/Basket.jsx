import style from "./bascet.module.scss";
import { useDispatch, useSelector } from "react-redux";

import { delElement, increment, decrement } from "../../Redux/slices/basket";

export const Basket = () => {
  const basket = useSelector((store) => store.basket.basket);

  const dispatch = useDispatch();

  const deleteProduct = (id) => {
    dispatch(delElement(id));
    const deleteOne = basket.products.filter((card) => card.id !== id);
    // setCards(deleteOne);
    return deleteOne;
  };

  return (
    <div className={style.conainner_basket}>
      <ul>
        {basket.products.length === 0 ? (
          <div>Нічого</div>
        ) : (
          basket.products.map((item) => (
            <li key={item.id}>
              <h1>{item.name}</h1>
              <img src={item.img} alt="" />
              <div>
                <button
                  type="button"
                  onClick={() => dispatch(decrement(item.id))}
                >
                  -
                </button>
                <p>{item.count}</p>
                <button
                  type="button"
                  onClick={() => dispatch(increment(item.id))}
                >
                  +
                </button>
                <p>{item.price * item.count}$</p>
              </div>
              <button type="button" onClick={() => deleteProduct(item.id)}>
                Видалити
              </button>
            </li>
          ))
        )}
      </ul>

      <p>{basket.total}$</p>
      <button>Купити</button>
    </div>
  );
};
