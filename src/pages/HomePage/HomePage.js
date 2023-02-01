import { Box } from "@chakra-ui/react";

import HomePageHeader from "./HomePageHeader";
import HomePageMain from "./HomePageMain";
import HomePageFooter from "./HomePageFooter";

const HomePage = () => {
  return (
    <Box>
      <HomePageHeader />
      <HomePageMain />
      <HomePageFooter />
    </Box>
  );
};

export default HomePage;
