import React from "react";
import Card from "./Card";
import CardFilter from "./CardFilter";
import "./Recurit.scss";

const Recurit = () => {
  return (
    <div className="recurit-container">
      <aside className="aside">
        <CardFilter />
      </aside>
      <div className="section">
        <Card />
      </div>
    </div>
  );
};

export default Recurit;
