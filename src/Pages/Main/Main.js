import React from 'react';
import MainImageOne from '../../images/mainone.png';
import MainImageTwo from '../../images/maintwo.png';
import MainImageThree from '../../images/mainthree.png';

const Main = () => {
  return (
    <div className="main">
      <p>hello</p>
      <img src={MainImageOne} />
      <img src={MainImageTwo} />
      <img src={MainImageThree} />
    </div>
  );
};

export default Main;
