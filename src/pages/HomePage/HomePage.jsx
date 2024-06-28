import "./HomePage.scss";
import Item from "../../components/Item/Item";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Link to="/msg"><Item /></Link>
    </>
  );
}

export default HomePage;

