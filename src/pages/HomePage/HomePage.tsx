import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import PizzeriaList from "../../components/PizzeriaList/PizzeriaList";
import { useAppDispatch } from "../../redux/store/hooks";
import { loadPizzeriasThunk } from "../../redux/thunks/pizzeriathunks";
import StyledHomePage from "./StyledHomePage";

const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(loadPizzeriasThunk(token as string));
  }, [dispatch, token]);

  return (
    <>
      <StyledHomePage>
        <Header />
        <div className="info-text">
          <h2>The Top Pizzerias in Barcelona</h2>
          <h3>What would you like to eat?</h3>
        </div>
        <PizzeriaList />
        <Navbar />
      </StyledHomePage>
    </>
  );
};

export default HomePage;
