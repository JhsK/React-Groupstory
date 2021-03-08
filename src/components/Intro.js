import React from "react";
import "./Intro.scss";

const Intro = () => {
  return (
    <div className="Intro">
      <div className="section">
        <ul>
          <li>
            외로운 대학생활,
            <br />
            취업을 위한 대외활동,
            <br />
            동아리 · 소모임에 들어가자
          </li>
          <li>
            아무도 모르고 낯선 대학생활에 두려움을 가진 분,
            <br />
            포트폴리오에 적을 활동을 하고 싶다면
            <br />
            그룹스토리를 통해 동아리 · 소모임에 가입해보세요!
          </li>
          <li>
            <button>시작하기</button>
          </li>
        </ul>
        <figure>
          <a href="/">f</a>
        </figure>
      </div>
      <div className="section">
        <figure>
          <a></a>
        </figure>
        <ul>
          <li>
            내가 원하는 유형의
            <br />
            모입을 쉽게!
          </li>
          <li>
            내가 좋아하는 분야의 활동을 찾고, 나의 일정을 고려해
            <br />
            언제 모임을 갖는지 이 모든것을 쉽고 한번에 찾아보자!
          </li>
          <li>
            <button>시작하기</button>
          </li>
        </ul>
      </div>
      <div className="section">
        <ul>
          <li>
            프로필만 설정하면
            <br />
            모임에서 먼저 가입제안!
          </li>
          <li>
            그룹스토리를 통해 쉽게 모임을 가입했다면
            <br />
            좋은 사람들과 함께 협업을 통해 대외활동은 어때요?
          </li>
          <li>
            <button>시작하기</button>
          </li>
        </ul>
        <figure>
          <a></a>
        </figure>
      </div>
      <div className="section">
        <figure>
          <a></a>
        </figure>
        <ul>
          <li>
            모임은 가입했고
            <br />
            이제 대외활동 해볼까?
          </li>
          <li>
            그룹스토리를 통해 쉽게 모임을 가입했다면
            <br />
            좋은 사람들과 함께 협업을 통해 대외활동은 어때요?
          </li>
          <li>
            <button>시작하기</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;
