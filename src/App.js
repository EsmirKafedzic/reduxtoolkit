import { useEffect } from "react";
import Products from "./components/Products";
import ProductService from "./services/productService";
import { useDispatch } from "react-redux";
import { getAllProductsAction } from "./store/productSlice";
import SingleProduct from "./components/SingleProduct";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    ProductService.getAllProductService()
      .then(res => {
        // console.log(res.data)
        dispatch(getAllProductsAction(res.data.products))
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <h1>Hellou redux toolkit</h1>
      <Products />
      <SingleProduct/>
    </div>
  );
}

export default App;
