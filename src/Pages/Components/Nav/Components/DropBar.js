import React, { useState } from 'react';
import Categories from './Categories';

import '../Components/DropBar.scss';
const DropBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
    console.log(isHovered);
  };

  return (
    <>
      <div className="dropBar">
        <ul>
          <li onClick={handleHover}>탐색</li>
          <li>모</li>
          <li>도</li>
          <li>조</li>
          <li>고</li>
          <li>로</li>
          <li>코</li>
        </ul>
      </div>
      {isHovered && <Categories isHovered={isHovered} />}
    </>
  );
};

export default DropBar;
