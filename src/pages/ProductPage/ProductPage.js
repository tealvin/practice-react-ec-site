import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productId = "" } = useParams();
  console.log("productId: ", productId);
  console.log(" ");

  return <div>ProductPage</div>;
};

export default ProductPage;
