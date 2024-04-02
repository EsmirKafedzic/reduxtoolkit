import React from "react";
import { useSelector } from "react-redux";

function SingleProduct() {
  const { singleProduct } = useSelector((state) => state.productStore);

  console.log(singleProduct);
  return <div></div>;
}

export default SingleProduct;
