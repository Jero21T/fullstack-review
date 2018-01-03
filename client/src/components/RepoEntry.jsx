import React from 'react'

const RepoEntry = (props)=>(

<li onClick={props.handleRepoClick}>{props.repo.repoName}</li>
)

export default RepoEntry