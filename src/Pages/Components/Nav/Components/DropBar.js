// import React, { useState } from 'react';
import React from 'react';
// import Categories from './Categories';

import '../Components/DropBar.scss';
const DropBar = props => {
  // const [isHovered, setIsHovered] = useState(false); //바꿈
  // const [isHovered, setIsHovered] = useState(true); //바꿈
  // console.log({ setIsHovered });

  // const handleHover = () => {
  //   setIsHovered(!isHovered);
  //   console.log(isHovered);
  // };

  // const openHover = () => {
  //   // setIsHovered(true);
  // };

  // const closeHover = () => {
  //   // setIsHovered(false);
  // };

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
      {/* {isHovered && (
        <Categories isHovered={isHovered} closeHover={closeHover} />
      )} */}
    </>
  );
};

export default DropBar;
