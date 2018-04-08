import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// SVG
import star from '../../../img/stars.svg';
import fork from '../../../img/forks.svg';
import issues from '../../../img/issues.svg';

const RepoBlock = styled.li`
  display: flex;
  border-top: 1px solid #DCDCDC;
  padding: 10px 15px 10px 0;
  font-size: 14px;
  list-style: none;
`;
const RepoIndex = styled.span` 
  display: flex;
  align-items: flex-start;
  padding: 0 20px;
  font-size: 14px;
  color: #DCDCDC;
`;
const RepoContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  line-height: 1.5;
`;
const RepoHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const RepoAchievements = styled.div`
  display: flex;
`;

const RepoIcon = styled.div`
  padding: 0 10px;
  display: flex;
  ${props => (props.language ?
    'background-color: #808080; color: #fff' : null)}
`;
const RepoTime = styled.p`
  margin: 0;
  span {
    padding: 0 10px;
    font-weight: 600;
  }
`;

const Repo = ({
  name,
  html_url,
  description,
  idx,
  created_at,
  updated_at,
  stargazers_count,
  forks_count,
  open_issues_count,
  language,
}) => {
  const languageElement = language ? (<RepoIcon language>{language}</RepoIcon>
  ) : null;

  const starElement = stargazers_count ? (
    <RepoIcon><img src={star} alt="stars" />{stargazers_count}</RepoIcon>)
    : null;

  const forkElement = forks_count ? (
    <RepoIcon><img src={fork} alt="forks" />{forks_count}</RepoIcon>)
    : null;

  const issuesElement = open_issues_count ? (
    <RepoIcon><img src={issues} alt="issues" />{open_issues_count}</RepoIcon>)
    : null;

  return (
    <RepoBlock>
      <RepoIndex>{idx}</RepoIndex>
      <RepoContent>
        <RepoHeader>
          <div>
            <a href={html_url}>{name}</a>
          </div>
          <RepoAchievements>
            {starElement}
            {forkElement}
            {issuesElement}
            {languageElement}
          </RepoAchievements>
        </RepoHeader>
        <span>{description}</span>
        <RepoTime>
          Created:
          <span>
            {format(created_at, 'DD.MM.YYYY')}
          </span>
          Updated:
          <span>
            {format(updated_at, 'DD.MM.YYYY')}
          </span>
        </RepoTime>
      </RepoContent>
    </RepoBlock>
  );
};

Repo.propTypes = {
  name: PropTypes.string,
  html_url: PropTypes.string,
  description: PropTypes.string,
  idx: PropTypes.number,
  created_at: PropTypes.string,
  updated_at: PropTypes.string,
  stargazers_count: PropTypes.number,
  forks_count: PropTypes.number,
  open_issues_count: PropTypes.number,
  language: PropTypes.string,
};
export default Repo;
