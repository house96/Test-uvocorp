import React, { Fragment } from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import location from '../../../img/location.svg';

const UserNotFound = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: #808080;
`;
const UserInfoSection = styled.section`
  display: flex;
  padding: 20px  10px;
`;
const UserBlock = styled.div`
  display: flex;
`;
const UserAvatar = styled.div`
  height: 150px;
  img {
    height: 100%;
  }
`;
const UserContacts = styled.div` 
  padding: 0 10px;
`;
const UserName = styled.p` 
  color: black;
  font-size: 22px;
  font-weight: 600;
  margin: 0;
  span {
    font-size: 14px;
    padding-left: 10px;
    a {
      padding: 0 5px;
    }
  }
`;
const UserLocation = styled.p`
  color: #000;
  display: flex;
`;
const UserDate = styled.span`
  padding-left: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 700;
`;
const Achievements = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;
const AchievementAmount = styled.div`
  text-align: center;
  padding: 0 10px;
  font-size: 32px;
  color: ${props => (props.red ? '#ff4500' : '#000')}
  span {
    display: block;
    font-size: 12px;
  }
`;

const UserInfo = ({ isLoading, isSuccess, userData }) => {
  const template = isLoading ? (
    <UserInfoSection>
      {isSuccess ?
        <Fragment>
          <UserBlock>
            <UserAvatar>
              <img src={userData.avatar_url} alt={userData.name} />
            </UserAvatar>
            <UserContacts>
              <UserName>{userData.name}
                <span>
                [<a href={userData.html_url}>Github</a>|<a href={userData.blog}>Blog</a>]
                </span>
              </UserName>
              <UserLocation>
                <img src={location} alt="location" />
                <span>{userData.location ? userData.location : 'unknown'}</span>
              </UserLocation>
              <p>Created: <UserDate>{format(userData.created_at, 'D.MM.YYYY')}</UserDate></p>
              <p>Updated: <UserDate>{format(userData.updated_at, 'D.MM.YYYY')}</UserDate></p>
            </UserContacts>
          </UserBlock>
          <Achievements>
            <AchievementAmount red>{userData.public_repos}<span>repos</span></AchievementAmount>
            <AchievementAmount>{userData.public_gists}<span>gist</span></AchievementAmount>
          </Achievements>
        </Fragment>
        :
        <UserNotFound>User not found</UserNotFound>}
    </UserInfoSection>
  )
    : null;

  return (<div>{template}</div>
  );
};
UserInfo.propTypes = {
  isLoading: PropTypes.bool,
  isSuccess: PropTypes.bool,
};

export default UserInfo;
