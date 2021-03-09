import React from "react";
import Card from "./Card";
import CardFilter from "./CardFilter";
import "./Recurit.scss";

const Recurit = (paddingObject) => {
  return (
    <div className="recurit-container" style={{ paddingObject }}>
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
