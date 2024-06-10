import { useSelector } from "react-redux";
import { selectProductList } from "./productsSlice";

export const useProductListData = () => {
  const productList = useSelector(selectProductList);

  const getOneProduct = (productId) => {
    return (
      productList.find(
        (product) => product.id.toString() === productId.toString()
      ) || null
    );
  };

  const listSize = productList.length;

  return {
    productList,
    getOneProduct,
    listSize,
  };
};
