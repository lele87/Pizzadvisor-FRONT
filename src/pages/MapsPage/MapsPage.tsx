import { useAppSelector } from "../../redux/store/hooks";

const MapsPage = (): JSX.Element => {
  const pizzerias = useAppSelector((state) => state.pizzerias.pizzeriaInfo);

  const pizzeriasAddress = pizzerias.map((pizzeria) => pizzeria.name);

  return (
    <iframe
      title="map"
      width="600"
      height="600"
      frameBorder="0"
      style={{ border: 0 }}
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=${
        process.env.REACT_APP_API_KEY
      }&q=${[pizzeriasAddress]}`}
      allowFullScreen
    ></iframe>
  );
};

export default MapsPage;
