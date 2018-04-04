import React from 'react';
import PropTypes from 'prop-types';

import Repo from '../Repo/index';
import './RepoList.css';

const repoList = ({ isShow, repos }) =>
  (isShow ? (
    <div className="repo-list">
      <h3>Repositories</h3>
      <ul>
        {repos.map((repo, i) => <Repo key={repo.id}{...repo} idx={i + 1} />)}
      </ul>
    </div>
  )
    :
    null);

repoList.propTypes = {
  isShow: PropTypes.bool,
  repos: PropTypes.array,
};

export default repoList;
