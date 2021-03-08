import React from "react";
import "./CardFilter.scss";

const CardFilter = () => {
  return (
    <div class="filter-container">
      <div class="filter-type">
        <span class="filterTitle">유형</span>
        <ul class="filter-ul">
          <li class="filter-item">
            <input type="checkbox" />
            동아리
          </li>
          <li class="filter-item">
            <input type="checkbox" />
            유형
          </li>
        </ul>
      </div>
      <hr />
      <div class="filter-type">
        <span class="filterTitle">활동분야</span>
        <ul class="filter-ul">
          <li class="filter-item">
            <i id="js-filterBtn" class="fas fa-caret-right filterBtn"></i>스포츠
            <ul class="filter-ul filter-ul-b">
              <li class="filter-item">
                <input type="checkbox" />
                축구
              </li>
              <li class="filter-item">
                <input type="checkbox" />
                야구
              </li>
              <li class="filter-item">
                <input type="checkbox" />
                농구
              </li>
            </ul>
          </li>
          <li class="filter-item">
            <i id="js-filterBtn" class="fas fa-caret-right filterBtn"></i>IT
            <ul class="filter-ul filter-ul-b">
              <li class="filter-item">
                <input type="checkbox" />
                보안
              </li>
            </ul>
          </li>
          <li class="filter-item">
            <input type="checkbox" />
            댄스
          </li>
          <li class="filter-item">
            <input type="checkbox" />
            음악
          </li>
          <li class="filter-item">
            <input type="checkbox" />
            봉사
          </li>
          <li class="filter-item">
            <input type="checkbox" />
            기독교
          </li>
        </ul>
      </div>
      <hr />
      <div class="filter-type">
        <span class="filterTitle">관련학부</span>
        <ul class="filter-ul">
          <li class="filter-item">
            <i id="js-filterBtn" class="fas fa-caret-right filterBtn"></i>펼치기
            <ul class="filter-ul filter-ul-b">
              <li class="filter-item">
                <input type="checkbox" />
                기독교학부
              </li>
              <li class="filter-item">
                <input type="checkbox" />
                사회복지학부
              </li>
              <li class="filter-item">
                <input type="checkbox" />
                어문학부
              </li>
              <li class="filter-item">
                <input type="checkbox" />
                경찰학부
              </li>
              <li class="filter-item">
                <input type="checkbox" />
                경상학부
              </li>
              <li class="filter-item">
                <input type="checkbox" />
                관광학부
              </li>
              <li class="filter-item">
                <input type="checkbox" />
                사범학부
              </li>
              <li class="filter-item">
                <input type="checkbox" />
                컴퓨터공학부
              </li>
              <li class="filter-item">
                <input type="checkbox" />
                보건학부
              </li>
              <li class="filter-item">
                <input type="checkbox" />
                간호학과
              </li>
              <li class="filter-item">
                <input type="checkbox" />
                디자인영상학부
              </li>
              <li class="filter-item">
                <input type="checkbox" />
                스포츠과학부
              </li>
              <li class="filter-item">
                <input type="checkbox" />
                문화예술학부
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <hr />
      <div class="filter-type">
        <span class="filterTitle">활동 시간</span>
        <ul class="filter-ul">
          <li class="filter-item">
            <input type="checkbox" />주 1일
          </li>
          <li class="filter-item">
            <input type="checkbox" />주 2일
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardFilter;
