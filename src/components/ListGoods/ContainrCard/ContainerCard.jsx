import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import items from "../../../items.json";
import style from "../style/card.module.scss";

import { useDispatch } from "react-redux";
import { addElement } from "../../../Redux/slices/basket";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { ModalAuth } from "../../ModalAuth/ModalAuth";

export const ContainerCard = (props) => {
  const { dataFilters, filterByOptions, stateSearch } = props;
  const [onModal, setOnModal] = useState(false);
  const { isAuth } = useAuth();
  const dispatch = useDispatch();

  const addToBasket = (item, id) => {
    if (isAuth) {
      const newProuct = { ...item };
      newProuct.count = 1;

      dispatch(addElement(newProuct));
      return;
    }
    setOnModal(!onModal);
  };

  const newArryGoods =
    stateSearch.length === 0
      ? filterByOptions(items, dataFilters)
      : stateSearch;

  return (
    <div className={style.box_card}>
      {onModal && <ModalAuth setOnModal={setOnModal} />}
      {newArryGoods.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 345 }} className={style.card}>
          <CardMedia sx={{ height: 140 }} image={item.img} title={item.name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              type="button"
              onClick={() => addToBasket(item, item.id)}
              size="small"
            >
              В корзину
            </Button>
            <p>{item.price}$</p>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};
