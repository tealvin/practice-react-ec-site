import { Image, Link } from "@chakra-ui/react";

const HomePageLogo = ({ size: propSize = 1, link = true } = {}) => {
  let size = propSize;
  if (typeof propSize !== "number") size = 1;

  const w = `${100 * size}px`;
  const h = `${60 * size}px`;

  if (link) {
    return (
      <Link href="/">
        <Image
          w={w}
          h={h}
          objectFit="cover"
          src="https://i.imgur.com/Z6uX9dH.png"
          alt="皮皮購物"
        />
      </Link>
    );
  }

  return (
    <Image
      w={w}
      h={h}
      objectFit="cover"
      src="https://i.imgur.com/Z6uX9dH.png"
      alt="皮皮購物"
    />
  );
};

export default HomePageLogo;
