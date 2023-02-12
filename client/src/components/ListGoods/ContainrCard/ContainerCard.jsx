import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import items from "../../../items.json";
import style from "../style/card.module.scss";
import { useEffect, useState } from "react";

export const ContainerCard = (props) => {
  const { dataFilters, filterByOptions, stateSearch } = props;

  const newArryGoods =
    stateSearch.length === 0
      ? filterByOptions(items, dataFilters)
      : stateSearch;

  return newArryGoods.map((item) => (
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
        <Button size="small">В корзину</Button>
        <p>{item.price}$</p>
      </CardActions>
    </Card>
  ));
};
