import { Box } from "@chakra-ui/react";

import PageHeader from "../../components/PageHeader";
import HomePageMain from "./HomePageMain";
import PageFooter from "../../components/PageFooter";

const HomePage = () => {
  return (
    <Box>
      <PageHeader />
      <HomePageMain />
      <PageFooter />
    </Box>
  );
};

export default HomePage;
