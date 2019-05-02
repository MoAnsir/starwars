import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ListView from './listView/listView';

const axios = require('axios');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      profileCount: '',
      items: [],
      prev: '',
      next: '',
      viewed: [],
    };
  }

  componentDidMount() {
    this.getDataHandler();
  }

  getDataHandler = () => {
    axios.get('https://swapi.co/api/people/?format=json')
      .then(response => {
        let res = response.data
        this.setState({
          isLoaded: true,
          profileCount: res.count,
          items: res.results,
          prev: res.previous,
          next: res.next
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error
        });
      })
  }

  filterDataHandler = () => {

  }

  searchDataHandler = () => {

  }

  checkArray = (user) => {

  }

  getDetailsViewHandler = (event) => {
    let userNameExtract = event.target.getElementsByClassName("user__name");
    let userName = userNameExtract[0].innerText.replace('name: ', '');

    if (this.state.viewed.indexOf(userName) <= -1){
      let joined = this.state.viewed.concat(userName);

      this.setState({
        viewed: joined
      })
      console.log('Oh you clicked - ', userName, '|   Array content - ', this.state.viewed);
      return;
    }
  }

  render() {
    const { error, isLoaded, items, profileCount, prev, next } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="row">
          <div className="App col-md-12">
            <h1>Number of profiles: {profileCount}</h1>

            <ListView items={items} click={this.getDetailsViewHandler}></ListView>

            {prev ? <p><a href={prev}>Prev</a></p> : ''}
            {next ? <p><a href={next}>Next</a></p> : ''}
          </div>
        </div>
      );
    }
  }
}

export default App;
