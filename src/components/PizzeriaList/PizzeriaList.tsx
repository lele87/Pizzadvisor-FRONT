import { useAppSelector } from "../../redux/store/hooks";
import Pizzeria from "../Pizzeria/Pizzeria";

const PizzeriaList = () => {
  const pizzerias = useAppSelector((state) => state.pizzerias);

  return (
    <ul>
      {pizzerias.map((pizzeria) => {
        return <Pizzeria key={pizzeria.owner} pizzeria={pizzeria} />;
      })}
    </ul>
  );
};

export default PizzeriaList;
