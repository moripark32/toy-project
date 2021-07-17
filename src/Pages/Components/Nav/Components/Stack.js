import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../Components/Stack.scss';

const Stack = () => {
  return (
    <div className="stack">
      <div>
        <a>
          <FontAwesomeIcon icon={faSearch} />
        </a>
        <a className="loginSignup">회원가입/로그인</a>
      </div>

      <div className="service">기업서비스</div>
    </div>
  );
};

export default Stack;
