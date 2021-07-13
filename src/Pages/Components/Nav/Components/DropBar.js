import React, { useState } from 'react';
import Categories from './Categories';

import '../Components/DropBar.scss';
const DropBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  // const handleHover = () => {
  //   setIsHovered(!isHovered);
  //   console.log(isHovered);
  // };

  const openHover = () => {
    setIsHovered(true);
  };

  const closeHover = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="dropBar">
        <ul>
          <li onMouseEnter={openHover}>탐색</li>
          {/* <li>탐색</li> */}
          {/* onMouseEnter:영역에 들어갔을때 마우스포인터가 실행 */}
          <li onMouseEnter={closeHover}>커리어 성장</li>
          <li onMouseEnter={closeHover}>직군별 연봉</li>
          <li onMouseEnter={closeHover}>이력서</li>
          <li onMouseEnter={closeHover}>매치업</li>
          <li onMouseEnter={closeHover}>프리랜서</li>
        </ul>
      </div>
      {isHovered && (
        <Categories isHovered={isHovered} closeHover={closeHover} />
      )}
    </>
  );
};

export default DropBar;
