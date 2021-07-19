import React, { useState } from 'react';
import '../Nav/Nav.scss';
import DropBar from './Components/DropBar';
import Logo from '../../../images/logo.png';
import Stack from './Components/Stack';
import Categories from './Components/Categories';

const Nav = () => {
  const [isHovered, setIsHovered] = useState(false);
  console.log({ setIsHovered });

  const openHover = () => {
    setIsHovered(true);
  };

  const closeHover = () => {
    setIsHovered(false);
  };

  return (
    <div className="navigation">
      <div className="nav-i">
        <div className="nav-i-a">
          <div className="logo">
            <img src={Logo} />
          </div>
          <DropBar openHover={openHover} closeHover={closeHover} />
        </div>
        <div className="nav-i-b">
          <Stack />
        </div>
      </div>
      <div className="nav-ii">
        {isHovered && (
          <Categories isHovered={isHovered} closeHover={closeHover} />
        )}
      </div>
    </div>
  );
};

export default Nav;
