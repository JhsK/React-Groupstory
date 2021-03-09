import React, { useState, useCallback } from "react";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import "./CardFilter.scss";
import { CLOSE_CHANGE } from "./Recurit";

const CardFilter = ({ closeState, dispatch }) => {
  const [arrowSport, setArrowSport] = useState(false);
  const [arrowIt, setArrowIt] = useState(false);
  const [arrowMajor, setArrowMajor] = useState(false);

  const onClickArrow = useCallback(
    (e) => {
      if (e.target.classList[1] === "sport") {
        console.log(arrowSport);
        if (arrowSport === false) {
          setArrowSport(true);
        } else {
          setArrowSport(false);
        }
      } else if (e.target.classList[1] === "It") {
        if (arrowIt === false) {
          setArrowIt(true);
        } else {
          setArrowIt(false);
        }
      } else if (e.target.classList[1] === "Major") {
        if (arrowMajor === false) {
          setArrowMajor(true);
        } else {
          setArrowMajor(false);
        }
      }
    },
    [arrowSport, arrowIt, arrowMajor]
  );

  const onClickFilterClose = useCallback(() => {
    dispatch({ type: CLOSE_CHANGE });
  }, []);

  return (
    <div className="filter-container">
      {closeState && (
        <AiOutlineClose
          className="filter-closeBtn"
          onClick={onClickFilterClose}
        />
      )}
      <div className="filter-type">
        <span className="filterTitle">유형</span>
        <ul className="filter-ul">
          <li className="filter-item">
            <input type="checkbox" />
            동아리
          </li>
          <li className="filter-item">
            <input type="checkbox" />
            유형
          </li>
        </ul>
      </div>
      <hr />
      <div className="filter-type">
        <span className="filterTitle">활동분야</span>
        <ul className="filter-ul">
          <li className="filter-item">
            {arrowSport === false ? (
              <IoMdArrowDropright
                onClick={onClickArrow}
                className="filterBtn sport"
              />
            ) : (
              <IoMdArrowDropdown
                onClick={onClickArrow}
                className="filterBtn sport"
              />
            )}
            스포츠
            {arrowSport && (
              <ul className="filter-ul filter-ul-b">
                <li className="filter-item">
                  <input type="checkbox" />
                  축구
                </li>
                <li className="filter-item">
                  <input type="checkbox" />
                  야구
                </li>
                <li className="filter-item">
                  <input type="checkbox" />
                  농구
                </li>
              </ul>
            )}
          </li>
          <li className="filter-item">
            {arrowIt === false ? (
              <IoMdArrowDropright
                onClick={onClickArrow}
                className="filterBtn It"
              />
            ) : (
              <IoMdArrowDropdown
                onClick={onClickArrow}
                className="filterBtn It"
              />
            )}
            IT
            {arrowIt && (
              <ul className="filter-ul filter-ul-b">
                <li className="filter-item">
                  <input type="checkbox" />
                  보안
                </li>
              </ul>
            )}
          </li>
          <li className="filter-item">
            <input type="checkbox" />
            댄스
          </li>
          <li className="filter-item">
            <input type="checkbox" />
            음악
          </li>
          <li className="filter-item">
            <input type="checkbox" />
            봉사
          </li>
          <li className="filter-item">
            <input type="checkbox" />
            기독교
          </li>
        </ul>
      </div>
      <hr />
      <div className="filter-type">
        <span className="filterTitle">관련학부</span>
        <ul className="filter-ul">
          <li className="filter-item">
            {arrowMajor === false ? (
              <IoMdArrowDropright
                onClick={onClickArrow}
                className="filterBtn Major"
              />
            ) : (
              <IoMdArrowDropdown
                onClick={onClickArrow}
                className="filterBtn Major"
              />
            )}
            펼치기
            {arrowMajor && (
              <ul className="filter-ul filter-ul-b">
                <li className="filter-item">
                  <input type="checkbox" />
                  기독교학부
                </li>
                <li className="filter-item">
                  <input type="checkbox" />
                  사회복지학부
                </li>
                <li className="filter-item">
                  <input type="checkbox" />
                  어문학부
                </li>
                <li className="filter-item">
                  <input type="checkbox" />
                  경찰학부
                </li>
                <li className="filter-item">
                  <input type="checkbox" />
                  경상학부
                </li>
                <li className="filter-item">
                  <input type="checkbox" />
                  관광학부
                </li>
                <li className="filter-item">
                  <input type="checkbox" />
                  사범학부
                </li>
                <li className="filter-item">
                  <input type="checkbox" />
                  컴퓨터공학부
                </li>
                <li className="filter-item">
                  <input type="checkbox" />
                  보건학부
                </li>
                <li className="filter-item">
                  <input type="checkbox" />
                  간호학과
                </li>
                <li className="filter-item">
                  <input type="checkbox" />
                  디자인영상학부
                </li>
                <li className="filter-item">
                  <input type="checkbox" />
                  스포츠과학부
                </li>
                <li className="filter-item">
                  <input type="checkbox" />
                  문화예술학부
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <hr />
      <div className="filter-type">
        <span className="filterTitle">활동 시간</span>
        <ul className="filter-ul">
          <li className="filter-item">
            <input type="checkbox" />주 1일
          </li>
          <li className="filter-item">
            <input type="checkbox" />주 2일
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardFilter;
