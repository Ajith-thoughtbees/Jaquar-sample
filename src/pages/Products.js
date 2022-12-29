import React from "react";
import "../styles/Product.css";
import { products } from "../helpers/ProductDetails";
import ProductItem from "../component/ProductItem";

function Product() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {products.map((menuItem, key) => {
          return (
            <ProductItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Product;