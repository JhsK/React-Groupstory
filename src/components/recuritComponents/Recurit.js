import React, { useReducer, useState } from "react";
import Card from "./Card";
import CardFilter from "./CardFilter";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Recurit.scss";

export const HAMBERGER_CHANGE = "HAMBERGER_CHANGE";
export const CLOSE_CHANGE = "CLOSE_CHANGE";

const initialState = {
  hambergerState: "null",
  closeState: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case HAMBERGER_CHANGE:
      return {
        ...state,
        hambergerState: "flex",
        closeState: true,
      };
    case CLOSE_CHANGE:
      return {
        ...state,
        hambergerState: "none",
        closeState: false,
      };
    default:
      return state;
  }
};

const Recurit = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { hambergerState, closeState } = state;
  // const [hambergerState, setHambergerState] = useState("null");
  const onClickHambergerBtn = () => {
    // setHambergerState("flex");
    dispatch({ type: HAMBERGER_CHANGE });
  };
  return (
    <div className="recurit-container">
      <aside className="aside" style={{ display: hambergerState }}>
        <CardFilter closeState={closeState} dispatch={dispatch} />
      </aside>
      <div className="section">
        <Card />
      </div>
      <GiHamburgerMenu className="hambergerBtn" onClick={onClickHambergerBtn} />
    </div>
  );
};

export default Recurit;
