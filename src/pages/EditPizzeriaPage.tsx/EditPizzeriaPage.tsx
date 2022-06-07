import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PizzeriaForm from "../../components/PizzeriaForm/PizzeriaForm";
import { useAppDispatch } from "../../redux/store/hooks";
import { loadPizzeriaThunk } from "../../redux/thunks/pizzeriaThunks";

const EditPizzeriaPage = (): JSX.Element => {
  const { idPizzeria } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadPizzeriaThunk(idPizzeria as string));
  }, [dispatch, idPizzeria]);

  return <PizzeriaForm />;
};

export default EditPizzeriaPage;
