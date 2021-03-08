import React from "react";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import "./nav.scss";

const nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <figure></figure>
      </Link>
      <ul>
        <li>
          <Link to="/recurit">모집</Link>
        </li>
        <li>
          <Link to="/recurit">매치업</Link>
        </li>
        <li>회원가입/로그인</li>
        <li>
          <MdSearch />
        </li>
      </ul>
    </div>
  );
};

export default nav;
