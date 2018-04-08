import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  border-bottom: 2px solid #ff4500 ;
  div {
    display: flex;
    justify-content: space-between;
    margin: 0 10px;
    h1 {
      color: #808080;
      font-weight: 300;
    }
    form {
      display: flex;
      align-items: center;
    }
  }
`;
const Input = styled.input`
  padding-left: 10px;
  outline: none;
  ${props => props.warn && 'border : 1px solid #ff4500'};
`;

const Header = ({
  handlerOnChange, value, handlerOnClick, stateButton, warn,
}) => (
  <HeaderWrapper>
    <div>
      <h1>Github user info</h1>
      <form action="#">
        <Input
          type="text"
          placeholder="Username"
          onChange={handlerOnChange}
          value={value}
          warn={warn}
        />
        <button onClick={handlerOnClick} disabled={stateButton()}>Search</button>
      </form>
    </div>
  </HeaderWrapper>
);

Header.propTypes = {
  handlerOnChange: PropTypes.func,
  handlerOnClick: PropTypes.func,
  stateButton: PropTypes.func,
  value: PropTypes.string,
  warn: PropTypes.bool,
};

export default Header;
