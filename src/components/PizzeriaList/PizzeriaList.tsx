import { useAppSelector } from "../../redux/store/hooks";
import Pizzeria from "../Pizzeria/Pizzeria";
import StyledPizzeriaList from "./StyledPizzeriaList";

const PizzeriaList = () => {
  const pizzerias = useAppSelector((state) => state.pizzerias.pizzeriaInfo);

  return (
    <StyledPizzeriaList>
      <ul>
        {pizzerias.map((pizzeria) => {
          return <Pizzeria key={pizzeria.id} pizzeria={pizzeria} />;
        })}
      </ul>
    </StyledPizzeriaList>
  );
};

export default PizzeriaList;
