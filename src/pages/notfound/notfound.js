import "./notfound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404 - Not found!</h1>
      <Link to="/">Go to Pricnipal</Link>
    </div>
  );
};

export default NotFound;
