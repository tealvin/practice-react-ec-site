import { Flex, Link, HStack } from "@chakra-ui/react";
import commonStyle from "../../commonStyle";
import HomePageLogo from "../../pages/HomePage/components/HomePageLogo";

const IconLink = ({
  backgroundSize = "",
  backgroundPosition = "",
  href = "",
  title = "",
} = {}) => {
  if (!backgroundSize || !backgroundPosition || !href || !title) return;
  const backgroundImage =
    "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/cab134ca96b0829b591cfaff892ae62c.png";
  return (
    <Link
      isExternal
      boxSize="20px"
      backgroundImage={backgroundImage}
      backgroundSize={backgroundSize}
      backgroundPosition={backgroundPosition}
      href={href}
      title={title}
    />
  );
};

const IconLinkList = () => {
  return (
    <HStack spacing="10px">
      <IconLink
        title="追蹤我們 Facebook!"
        href="https://facebook.com/ShopeeTW"
        backgroundSize="487.5% 293.75%"
        backgroundPosition="8.064516129032258% 16.129032258064516%"
      />
      <IconLink
        title="追蹤我們 Instagram!"
        href="https://instagram.com/ShopeeTW"
        backgroundSize="487.5% 293.75%"
        backgroundPosition="58.064516129032256% 16.129032258064516%"
      />
    </HStack>
  );
};

const PageHeader = () => {
  const { pagePx = "", firmMainColor = "#E74E36" } = commonStyle || {};

  return (
    <header>
      <Flex
        bg={firmMainColor}
        px={pagePx}
        justifyContent="space-between"
        alignItems="center"
        h="60px"
      >
        <HomePageLogo />
        <IconLinkList />
      </Flex>
    </header>
  );
};

export default PageHeader;
