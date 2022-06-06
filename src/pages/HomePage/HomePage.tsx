import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import PizzeriaList from "../../components/PizzeriaList/PizzeriaList";
import StyledHomePage from "./StyledHomePage";

const HomePage = (): JSX.Element => {
  return (
    <>
      <StyledHomePage>
        <div className="content">
          <Header />
          <div className="info-text">
            <h2>The Top Pizzerias in Barcelona</h2>
            <h3>What would you like to eat?</h3>
          </div>
          <PizzeriaList />
        </div>
        <Navbar />
      </StyledHomePage>
    </>
  );
};

export default HomePage;
