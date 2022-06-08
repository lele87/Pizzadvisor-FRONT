import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import PizzeriaForm from "../../components/PizzeriaForm/PizzeriaForm";
import { useAppDispatch } from "../../redux/store/hooks";
import { loadPizzeriaThunk } from "../../redux/thunks/pizzeriaThunks";
import StyledEditPizzeriaFormPage from "./StyledEditPizzeriaPage";

const EditPizzeriaPage = (): JSX.Element => {
  const { idPizzeria } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadPizzeriaThunk(idPizzeria as string));
  }, [dispatch, idPizzeria]);

  return (
    <>
      <StyledEditPizzeriaFormPage>
        <Header />
        <PizzeriaForm />
        <Navbar />
      </StyledEditPizzeriaFormPage>
    </>
  );
};

export default EditPizzeriaPage;
