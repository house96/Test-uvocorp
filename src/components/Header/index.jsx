import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const header = ({
  onChange, value, onClick, disabled, warn,
}) => (
  <div className="Header">
    <div className="Header-content">
      <h1 className="title">Github user info</h1>
      <form action="#" className="form" >
        <input
          type="text"
          placeholder="Username"
          onChange={onChange}
          value={value}
          className={warn ? 'input-warn input' : 'input'}
        />
        <button onClick={onClick} disabled={disabled()}>Search</button>
      </form>
    </div>
  </div>
);

header.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  disabled: PropTypes.func,
  value: PropTypes.string,
  warn: PropTypes.bool,
};

export default header;
