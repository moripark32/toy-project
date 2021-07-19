import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../Components/Stack.scss';

const Stack = () => {
  return (
    <div className="stack">
      <a className="searchIconUp">
        <FontAwesomeIcon icon={faSearch} />
      </a>
      <div className="position">
        <a className="signup">회원가입</a>
        <a className="login">/로그인</a>
        <div className="iconContainer">
          <a className="searchIconDown">
            <FontAwesomeIcon icon={faSearch} />
          </a>
          <a className="searchIconDown">
            <FontAwesomeIcon icon={faList} />
          </a>
        </div>
      </div>

      <div className="service">기업서비스</div>
    </div>
  );
};

export default Stack;
