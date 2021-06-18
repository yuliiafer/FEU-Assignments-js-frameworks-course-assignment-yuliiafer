import { ComponentArrow } from "./Icons";
import { useState, useEffect } from "react";

const Scroll = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
        if (!show) setShow(true)
    } else {
        if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    if (showBelow) {
        window.addEventListener(`scroll`, handleScroll)
        return () => window.removeEventListener(`scroll`, handleScroll)
    }
});
  return (
      <div className="scrollTop" onClick={handleClick}>
         
        <div className="home-icon">  {show &&
    <ComponentArrow
      style={{ display: show ? "flex" : "none" }}
    />}</div> 
    </div>
  );
};

export default Scroll;
