import React, { memo } from "react";
// import { animateScroll as aniScroll } from "react-scroll";
import { FaArrowCircleUp } from "react-icons/fa";
import "./ScroolTop.scss";

const ScrollTop = memo(({ color, onClick: scrollToTop }) => {
  // const scrollToTop = () => aniScroll.scrollToTop();
  // const scrollMoreUpTop = () => aniScroll.scrollMore(-1000);

  return (
    <div className="scrollTop" style={{ color }} onClick={scrollToTop}>
      <FaArrowCircleUp />
    </div>
  );
});

export default ScrollTop;
