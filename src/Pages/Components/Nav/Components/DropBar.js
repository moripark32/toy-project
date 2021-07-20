import React from 'react';

import '../Components/DropBar.scss';
const DropBar = props => {
  const { openHover, closeHover } = props;

  return (
    <>
      <div className="dropBar">
        <ul>
          <li onMouseEnter={closeHover}>
            <span>홈</span>
          </li>
          <li onMouseEnter={openHover}>
            <span>탐색</span>
          </li>
          <li onMouseEnter={closeHover}>
            <span>커리어 성장</span>
          </li>
          <li onMouseEnter={closeHover}>
            <span>직군별 연봉</span>
          </li>
          <li onMouseEnter={closeHover}>
            <span>이력서</span>
          </li>
          <li onMouseEnter={closeHover}>
            <span>매치업</span>
          </li>
          <li onMouseEnter={closeHover}>
            <span>프리랜서</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropBar;
