import React, { useState, useCallback } from "react";
import { Route } from "react-router-dom";
import { animateScroll as aniScroll } from "react-scroll";

import "./App.css";
import Nav from "./components/publicComponents/nav";
import Intro from "./components/Intro";
import Footer from "./components/publicComponents/footer";
import ScroollTop from "./components/publicComponents/ScrollTop";
import Recurit from "./components/recuritComponents/Recurit";

const App = () => {
  const [color, setColor] = useState("#000000");
  const onScrollEvent = useCallback(
    (e) => {
      if (e.view.scrollY === 0) {
        setColor("#000000");
      } else {
        setColor("#aea1ea");
      }
    },
    [color]
  );
  const scrollToTop = useCallback(() => {
    aniScroll.scrollToTop();
    setColor("#000000");
  }, []);
  return (
    <div onWheel={onScrollEvent}>
      <Route path={["/", "/recurit"]} component={Nav} />
      <Route path="/" component={Intro} exact />
      <Route path="/recurit" render={() => <Recurit />} exact />
      <Footer />
      <ScroollTop color={color} onClick={scrollToTop} />
    </div>
  );
};

export default App;
