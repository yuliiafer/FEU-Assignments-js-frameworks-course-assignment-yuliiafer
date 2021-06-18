import { ComponentArrowDown } from "./Icons";
import { useState, useEffect } from "react";

const ScrollDown = ({ showOver }) => {
  const [show, setShow] = useState(showOver ? true : false);

  const handleScroll = () => {
    if (window.pageYOffset < showOver) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 1000, behavior: "smooth" });
  };
  useEffect(() => {
    if (showOver) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });
  return (
    <div className="scrollDown" onClick={handleClick}>
      <div className="home-icon">
        {" "}
        {show && (
          <ComponentArrowDown style={{ display: show ? "flex" : "none" }} />
        )}
      </div>
    </div>
  );
};

export default ScrollDown;
