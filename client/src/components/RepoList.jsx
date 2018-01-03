import React from 'react';
import RepoEntry from './RepoEntry.jsx'

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    <span>There are {props.repos.length} repos.</span>
    <ul>
    	{props.repos.map(repo=>
    		<RepoEntry repo={repo} handleRepoClick={props.handleRepoClick} />
    	)
    }
    </ul>
  </div>
)

export default RepoList;