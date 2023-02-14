import React from "react";
import { Carousel } from "react-carousel-minimal";

import style from "./homePage.module.scss";

export const HomePage = () => {
  const data = [
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/006/388/792/original/online-shopping-illustration-there-is-a-white-mobile-a-red-shopping-cart-and-a-shopping-bag-design-for-website-sale-banner-landing-page-mobile-app-shop-online-online-store-business-vector.jpg",
      caption: `Шопся навіть не вставай!`,
    },
    {
      image: "https://i.ytimg.com/vi/aMx1kStx6QQ/maxresdefault.jpg",
      caption: "Новинка! Iphone 12 по вигідній ціні!",
    },
    {
      image: "https://androidinsider.ru/wp-content/uploads/2022/11/xiaomi.jpg",
      caption: "Яка краса... Так і хочеться купити!",
    },
    {
      image:
        "https://alphacommunity.s3.amazonaws.com/media/misc/misc-cards/home_banner_uF0rJUG.jpg",
      caption: "Навіть поганий зір, тепер не завадить! Камера вже у продажі!",
    },
    {
      image:
        "https://www.ixbt.com/img/n1/news/2021/2/1/Exp2diXVcAUHiuJ_large.jpg",
      caption: "Тепер ти не забудеш сьогодні вийти на прогулянку!",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 ",
            zIndex: "-5",
          }}
        >
          <Carousel
            data={data}
            time={3000}
            width="100%"
            height="94vh"
            captionStyle={captionStyle}
            radius="0"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "94vh",
              margin: "0 auto",
              padding: "0",
              zIndex: "-5",
              position: "relative",
            }}
          />
        </div>
      </div>
    </div>
  );
};
