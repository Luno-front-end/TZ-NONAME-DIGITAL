import style from "./bascet.module.scss";
import { useDispatch, useSelector } from "react-redux";

import {
  delElement,
  increment,
  decrement,
  clearBasket,
} from "../../Redux/slices/basket";
import { Link, useNavigate } from "react-router-dom";

export const Basket = () => {
  const basket = useSelector((store) => store.basket.basket);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const deleteProduct = (id) => {
    dispatch(delElement(id));
    const deleteOne = basket.products.filter((card) => card.id !== id);
    return deleteOne;
  };

  const handleBuy = () => {
    dispatch(clearBasket());
    navigate("/success");
  };

  return (
    <div className={style.product_centr}>
      <div className={style.conainner_basket}>
        <ul className={style.product_list}>
          {basket.products.length === 0 ? (
            <li className={style.product_not_basket}>
              Ваш кошик пустий перейдіть{" "}
              <Link to="/list-goods" className={style.product_link}>
                на сторінку з товарами
              </Link>
            </li>
          ) : (
            basket.products.map((item) => (
              <li key={item.id} className={style.product_item}>
                <div className={style.product_info}>
                  <img src={item.img} alt="" className={style.product_img} />

                  <h1 className={style.product_head}>{item.name}</h1>
                </div>
                <div className={style.product_control}>
                  <div className={style.box_calc}>
                    <button
                      type="button"
                      onClick={() => dispatch(decrement(item.id))}
                      className={style.btn}
                    >
                      -
                    </button>
                    <p className={style.product_count}>{item.count}</p>
                    <button
                      type="button"
                      onClick={() => dispatch(increment(item.id))}
                      className={style.btn}
                    >
                      +
                    </button>
                  </div>
                  <p className={style.product_price}>
                    {item.price * item.count}$
                  </p>
                  <button
                    type="button"
                    onClick={() => deleteProduct(item.id)}
                    className={style.btn_delete}
                  >
                    Видалити
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
        {basket.products.length !== 0 && (
          <>
            <p className={style.product_total}>{basket.total}$</p>
            <button type="button" className={style.btn_buy} onClick={handleBuy}>
              Купити
            </button>
          </>
        )}
      </div>
    </div>
  );
};
