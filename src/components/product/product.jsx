import React from "react";
import "./product.css";

export default function Product() {
  const generateCards = () => {
    const cardData = [
      {
        id: 1,
        imageSrc:
          process.env.PUBLIC_URL + "/images/product-img/pngegg-10-1.png",
        title: "Product title 1",
        description: "Product description and details 1",
        price: "$499.49",
        cartIconSrc:
        process.env.PUBLIC_URL + "/images/product-img/shopping-cart-of-checkered-design.png",
      },
      {
        id: 2,
        imageSrc: process.env.PUBLIC_URL + "/images/product-img/pngegg-5-1.png",
        title: "Product title 2",
        description: "Product description and details 2",
        price: "$399.99",
        cartIconSrc:
          process.env.PUBLIC_URL + "/images/product-img/shopping-cart-of-checkered-design.png",
      },
      {
        id: 3,
        imageSrc: process.env.PUBLIC_URL + "/images/product-img/pngegg-9-1.png",
        title: "Product title 2",
        description: "Product description and details 2",
        price: "$399.99",
        cartIconSrc:
          process.env.PUBLIC_URL + "/images/product-img/shopping-cart-of-checkered-design.png",
      },
      {
        id: 4,
        imageSrc: process.env.PUBLIC_URL + "/images/product-img/pngegg-7-1.png",
        title: "Product title 2",
        description: "Product description and details 2",
        price: "$399.99",
        cartIconSrc:
          process.env.PUBLIC_URL + "/images/product-img/shopping-cart-of-checkered-design.png",
      },
      {
        id: 5,
        imageSrc: process.env.PUBLIC_URL + "/images/product-img/pngegg-6-1.png",
        title: "Product title 2",
        description: "Product description and details 2",
        price: "$399.99",
        cartIconSrc:
          process.env.PUBLIC_URL + "/images/product-img/shopping-cart-of-checkered-design.png",
      },
      {
        id: 6,
        imageSrc:
          process.env.PUBLIC_URL +
          "/images/product-img/Pik-Png-com-ramen-noodles-png-654531-11zon.png",
        title: "Product title 2",
        description: "Product description and details 2",
        price: "$399.99",
        cartIconSrc:
          process.env.PUBLIC_URL + "/images/product-img/shopping-cart-of-checkered-design.png",
      },
      {
        id: 7,
        imageSrc:
          process.env.PUBLIC_URL + "/images/product-img/pngegg-10-1.png",
        title: "Product title 1",
        description: "Product description and details 1",
        price: "$499.49",
        cartIconSrc:
          process.env.PUBLIC_URL + "/images/product-img/shopping-cart-of-checkered-design.png",
      },
      {
        id: 8,
        imageSrc: process.env.PUBLIC_URL + "/images/product-img/pngegg-5-1.png",
        title: "Product title 2",
        description: "Product description and details 2",
        price: "$399.99",
        cartIconSrc:
          process.env.PUBLIC_URL + "/images/product-img/shopping-cart-of-checkered-design.png",
      },
      {
        id: 9,
        imageSrc: process.env.PUBLIC_URL + "/images/product-img/pngegg-9-1.png",
        title: "Product title 2",
        description: "Product description and details 2",
        price: "$399.99",
        cartIconSrc:
          process.env.PUBLIC_URL + "/images/product-img/shopping-cart-of-checkered-design.png",
      },
      {
        id: 10,
        imageSrc: process.env.PUBLIC_URL + "/images/product-img/pngegg-7-1.png",
        title: "Product title 2",
        description: "Product description and details 2",
        price: "$399.99",
        cartIconSrc:
          process.env.PUBLIC_URL + "/images/product-img/shopping-cart-of-checkered-design.png",
      },

      // Add more card data objects as needed
    ];

    return cardData.map((card) => (
      <div className="card" key={card.id}>
        <div className="card-img">
          <img src={card.imageSrc} alt={`Image ${card.id}`} />
        </div>
        <div className="card-info">
          <p className="text-title">{card.title}</p>
          <p className="text-body">{card.description}</p>
        </div>
        <div className="card-footer">
          <span className="text-title">{card.price}</span>
          <div className="card-button">
            <svg className="svg-icon" viewBox="0 0 20 20">
              <image xlinkHref={card.cartIconSrc} width="20" height="20" />
            </svg>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className=" bg_prduct_uu">
        <div className=" product_bg_page">{generateCards()}</div>
      </div>
    </>
  );
}
