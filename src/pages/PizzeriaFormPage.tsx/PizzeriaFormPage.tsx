import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import PizzeriaForm from "../../components/PizzeriaForm/PizzeriaForm";
import StyledPizzeriaFormPage from "./StyledPizzeriaFormPage";

const PizzeriaFormPage = (): JSX.Element => {
  return (
    <>
      <StyledPizzeriaFormPage>
        <Header />
        <PizzeriaForm />
        <Navbar />
      </StyledPizzeriaFormPage>
    </>
  );
};

export default PizzeriaFormPage;
