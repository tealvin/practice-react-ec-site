import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ButtonBackOnePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  return <Button onClick={handleClick}>回上一頁</Button>;
};

export default ButtonBackOnePage;
