import axios from "axios";

class ProductService {
    static getAllProductService = () => axios.get("https://dummyjson.com/products");
}

export default ProductService;