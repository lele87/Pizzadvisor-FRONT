import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Pizzeria from "../../components/Pizzeria/Pizzeria";

const HomePage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Pizzeria />
      <Navbar />
    </>
  );
};

export default HomePage;
