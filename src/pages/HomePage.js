import Characters from "../components/Characters";
import Heading from "../components/Heading";
import ScrollDown from "../components/ScrollDown";
import Scroll from "../components/ScrollButton";
import { ComponentHeartFull } from "../components/Icons";

const HomePage = () => {
  return (
    <>
      <ScrollDown className="slideUpReturn" showOver={250} />
      <Scroll showBelow={150} />
      <div className="backdrop-home"></div>
      <Heading title=" List of the Characters" />
      <h3>"Game of Thrones"</h3>
      <Characters favouriteComponent={ComponentHeartFull} />
    </>
  );
};

export default HomePage;
