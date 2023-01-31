import HomePageHeader from "./HomePageHeader";

const HomePageMain = () => {
  return <main>Home Page Main</main>;
};

const HomePageFooter = () => {
  return <footer>Home Page Footer</footer>;
};

const HomePage = () => {
  return (
    <div>
      <HomePageHeader />
      <HomePageMain />
      <HomePageFooter />
    </div>
  );
};

export default HomePage;
