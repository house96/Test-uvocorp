import React, { Fragment } from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

import './UserInfo.css';
import location from '../../../img/location.svg';

const userInfo = ({ isLoading, isSuccess, userData }) => {
  const template = isLoading ? (
    <div className="userInfo">
      {isSuccess ?
        <Fragment>
          <div className="userInfo-block">
            <div className="user-avatar">
              <img src={userData.avatar_url} alt={userData.name} />
            </div>
            <div className="user-contacts">
              <p className="user-name">{userData.name}
                <span className="user-link">
                [<a href={userData.html_url}>Github</a>|<a href={userData.blog}>Blog</a>]
                </span>
              </p>
              <p className="user-location">
                <img src={location} alt="location" />
                <span>{userData.location ? userData.location : 'unknown'}</span>
              </p>
              <p className="user-date">Created: <span>{format(userData.created_at, 'D.MM.YYYY')}</span></p>
              <p className="user-date">Updated: <span>{format(userData.updated_at, 'D.MM.YYYY')}</span></p>
            </div>
          </div>
          <div className="user-achievements">
            <div className="user-achievements-repos">{userData.public_repos}<span className="user-achievements-title" >repos</span></div>
            <div className="user-achievements-gist">{userData.public_gists}<span className="user-achievements-title" >gist</span></div>
          </div>
        </Fragment> : <div className="user-not-found">User not found</div>}
    </div>
  )
    : null;

  return (<div>{template}</div>
  );
};
userInfo.propTypes = {
  isLoading: PropTypes.bool,
  isSuccess: PropTypes.bool,
};

export default userInfo;
