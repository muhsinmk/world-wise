import Sidebar from "../components/sidebar/Sidebar";
import Map from "../components/map/Map";
import styles from "./AppLayout.module.css";
import User from "../components/nav/User";

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
};

export default AppLayout;
