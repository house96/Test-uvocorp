import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Repo from '../Repo/index';

const RepoListSection = styled.section`
  h3 {
    padding-left: 10px;
    font-size: 26px;
  }
  ul {
    margin: 0;
    padding: 0;
  }
`;

const RepoList = ({ isShow, repos }) =>
  (isShow ? (
    <RepoListSection>
      <h3>Repositories</h3>
      <ul>
        {repos.map((repo, i) => <Repo key={repo.id}{...repo} idx={i + 1} />)}
      </ul>
    </RepoListSection>
  )
    :
    null);

RepoList.propTypes = {
  isShow: PropTypes.bool,
  repos: PropTypes.array,
};

export default RepoList;
