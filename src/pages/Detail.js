import Heading from "../components/Heading";
import Details from "../components/Details";
import { Link } from "react-router-dom";

function Detail() {
  return (
    <>
      <div className="backdrop-detail"></div>
      <Heading className="detail-title" title="Detail" />
      <Details />
      <Link to={`/`}>
        <button className="button">Back to the Characters</button>
      </Link>
    </>
  );
}

export default Detail;
