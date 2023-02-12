import { useEffect, useRef, useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import items from "../../items.json";
import style from "./style/card.module.scss";

export const MediaCard = (props) => {
  const { dataFilters } = props;

  useEffect(() => {
    // console.log(Object.keys(dataFilters));
  }, [dataFilters]);

  const filterByOptions = (goods, options) => {
    const filteredGoods = [];

    for (let i = 0; i < options.length; i++) {}

    Object.keys(options).map((key) => {
      for (let i = 0; i < options[key].length; i++) {
        const newArr = filteredGoods.length === 0 ? goods : filteredGoods;

        for (let j = 0; j < newArr.length; j++) {
          if (options[key][i] === newArr[j][key]) {
            filteredGoods.push(newArr[j]);
          }
        }
      }
      return filteredGoods;
    });

    // const sourceObject = {};

    // const handler = {
    //   get: (target, key) => {
    //     console.log(target[key]);

    //     if (typeof target[key] === "object" && target[key] !== null) {
    //       // console.log(target[key]);
    //       return new Proxy(target[key], handler);
    //     }

    //     return target[key];
    //   },
    //   set: (target, prop, value) => {
    //     // console.log(value);
    //     target[prop] = value;
    //     console.log("A change was made!");
    //     return true;
    //   },
    // };
    // const object = new Proxy(dataFilters, handler);

    // object.list = []; // "A change was made!"
    // object.list.push("foo"); // no console.log statement
    // console.log(object.target.get);
    console.log(filteredGoods);
    return filteredGoods;
  };

  return (
    <div className={style.container_card}>
      <div className={style.box_card}>
        {filterByOptions(items, dataFilters).map((item) => (
          <Card key={item.id} sx={{ maxWidth: 345 }} className={style.card}>
            <CardMedia
              sx={{ height: 140 }}
              image={item.img}
              title={item.name}
            />
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
        ))}
      </div>
    </div>
  );
};

// const [state, setState] = useState(items);

// const usePrevious = (value) => {
//   const ref = useRef(value);
//   // useEffect(() => {
//   //   ref.current = value;
//   // });
//   // console.log(ref);
//   return ref.current;
// };

// const prevAmount = usePrevious(dataFilters);

// const typeOf = (o) => Object.prototype.toString.call(o);
// const isObject = (o) =>
//   o !== null &&
//   !Array.isArray(o) &&
//   typeOf(o).split(" ")[1].slice(0, -1) === "Object";

// const isPrimitive = (o) => {
//   switch (typeof o) {
//     case "object": {
//       return false;
//     }
//     case "function": {
//       return false;
//     }
//     default: {
//       return true;
//     }
//   }
// };

// const getChanges = (previous, current) => {
//   if (isPrimitive(previous) && isPrimitive(current)) {
//     if (previous === current) {
//       return "";
//     }

//     return current;
//   }

//   if (isObject(previous) && isObject(current)) {
//     const diff = getChanges(
//       Object.entries(previous),
//       Object.entries(current)
//     );

//     return diff.reduce((merged, [key, value]) => {
//       return {
//         ...merged,
//         [key]: value,
//       };
//     }, {});
//   }

//   const changes = [];

//   if (JSON.stringify(previous) === JSON.stringify(current)) {
//     return changes;
//   }

//   for (let i = 0; i < current.length; i++) {
//     const item = current[i];

//     if (JSON.stringify(item) !== JSON.stringify(previous[i])) {
//       changes.push(item);
//     }
//   }

//   return changes;
// };

// useEffect(() => {
//   const dataCat = [];
//   // console.log(prevAmount);
//   // const array = Object.keys(getChanges(prevAmount, dataFilters));
//   // console.log(array);
//   console.log(items);

// if (
//   dataFilters.type.length === 0 &&
//   dataFilters.brand.length === 0 &&
//   dataFilters.diagonal.length === 0
// )
//   return;
// console.log(array);

// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < dataFilters[array[i]].length; j++) {
//     for (let a = 0; a < state.length; a++) {
//       if (dataFilters[array[i]][j] === state[a][array[i]]) {
//         console.log(dataFilters[array[i]]);
//         console.log(dataFilters[array[i]][j]);
//         console.log(state[a][array[i]]);
//         console.log(state[a]);

//         dataCat.push(state[a]);
//       }
//     }
//   }
// }
// console.log("prevAmount", prevAmount);
// setState([...dataCat]);
// console.log(state);

// return;
// }, [dataFilters]);

// const filterByOptions = (goods, options) => {
// console.log(dataFilters.categories.length);
// if (
//   options.categories.length === 0 &&
//   options.brand.length === 0 &&
//   options.diagonal.length === 0
// ) {
//   return goods;
// }

// const array = ["awdd", "random", "key"];
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < options[array[i]].length; j++) {
//     for (let a = 0; a < goods.length; a++) {
//       if (options.brand[j] === goods[a].brand) {
//         dataCat.push(goods[a]);
//       }
//     }
//   }
// }
// return dataCat;
// };
