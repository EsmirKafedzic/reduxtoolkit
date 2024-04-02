import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductAction } from "../store/productSlice";

function Products() {
  const { allProducts, isLoading } = useSelector((state) => state.productStore);
  const dispatch = useDispatch();

  const handleProduct = () => {
    dispatch(
      getSingleProductAction({ name: "Josh", age: 24, adresa: "London" })
    );
  };

  return (
    <div>
      {/* {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        allProducts.map((product, index) => {
          return <h3 key={index}>{product.title}</h3>;
        })
      )} */}
      <h3>Products</h3>
      <button onClick={handleProduct}>Get single products</button>
    </div>
  );
}

export default Products;
