import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  this.fetchRepos = this.fetchRepos.bind(this);
  // this.fetchRepos = this.fetchRepos.bind(this)();

  }

  fetchRepos() {
    $.ajax({
      url: 'http://localhost:1128/repos',
      type: 'GET',
      success: (data) => {
        this.setState({repos: data})
      },
      dataType: 'json',
      error: function(err) {
        console.error(err);
      }
    });
  }

  search (term) {
    console.log(`${term} was searched`);
  
     $.ajax({
      url: 'http://localhost:1128/repos',
      type: 'POST',
      data: JSON.stringify({term:term}),
      contentType: 'application/json',
      success: (data) => {
        console.log('succes')
      },
      error: (err) => {
        console.error('error')
      }
    })

  }

  handleRepoClick (event){
    // console.log(this.state.repos)
    // console.log(event.target.innerText)
    this.state.repos.forEach((repo)=>{
      if (repo.repoName === event.target.innerText){
        window.open(repo.userUrl, "_blank");
      }
    })
  }

  componentWillMount() {
    this.fetchRepos();
  }


  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} handleRepoClick={this.handleRepoClick.bind(this)} />
      <Search onSearch={this.search.bind(this)} fetch={this.fetchRepos.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));