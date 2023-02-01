import HomePageHeader from "./HomePageHeader";
import HomePageFooter from "./HomePageFooter";

const HomePageMain = () => {
  return <main>Home Page Main</main>;
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
