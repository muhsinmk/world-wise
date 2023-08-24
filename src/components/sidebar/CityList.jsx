/* eslint-disable react/prop-types */
import Spinner from "../ui/Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "../ui/Message";
import { useCities } from "../../contexts/CitiesContext";

const CityList = () => {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message={"Add your first city clicking on a city on the map"} />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CityList;
