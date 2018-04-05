import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

import './Repo.css';

// SVG
import star from '../../../img/stars.svg';
import fork from '../../../img/forks.svg';
import issues from '../../../img/issues.svg';

const repo = ({
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
  const languageElement = language ? (
    <div className="language icon">{language}</div>
  ) : null;
  const starElement = stargazers_count ? (
    <div className="star icon"><img src={star} alt="stars" />{stargazers_count}</div>)
    : null;
  const forkElement = forks_count ? (
    <div className="fork icon"><img src={fork} alt="forks" />{forks_count}</div>)
    : null;
  const issuesElement = open_issues_count ? (
    <div className="issue icon"><img src={issues} alt="issues" />{open_issues_count}</div>)
    : null;

  return (
    <li className="repo">
      <span className="repo-idx">{idx}</span>
      <div className="repo-text">
        <div className="repo-heading">
          <div className="repo-title">
            <a href={html_url}>{name}</a>
          </div>
          <div className="repo-achievements">
            {starElement}
            {forkElement}
            {issuesElement}
            {languageElement}
          </div>
        </div>
        <span className="repo-description">{description}</span>
        <p className="repo-time">
          Created:
          <span className="repo-time--date">
            {format(created_at, 'DD.MM.YYYY')}
          </span>
          Updated:
          <span className="repo-time--date">
            {format(updated_at, 'DD.MM.YYYY')}
          </span>
        </p>
      </div>
    </li>
  );
};

repo.propTypes = {
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
export default repo;
