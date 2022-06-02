import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import PizzeriaList from "../../components/PizzeriaList/PizzeriaList";
import { useAppDispatch } from "../../redux/store/hooks";
import { loadPizzeriasThunk } from "../../redux/thunks/pizzeriathunks";

const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(loadPizzeriasThunk(token as string));
  }, [dispatch, token]);

  return (
    <>
      <Header />
      <PizzeriaList />
      <Navbar />
    </>
  );
};

export default HomePage;
