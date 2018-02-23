import React, { Component } from 'react';
import './App.css';
import Card from './components/ant-card/card/card';
import ButtonBar from './components/bar/button-bar/button-bar';
import { createApolloFetch } from 'apollo-fetch';
import AntList from './components/ant-list/ant-list';

// connect to API
const fetch = createApolloFetch({
  uri: 'https://antserver-blocjgjbpw.now.sh/graphql',
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ants: [],
    }
  }

  componentDidMount() {
    fetch({
      query: '{ ants { name weight length color }}',
    }).then(res => {
      this.setState({ants: res.data.ants}, () => {console.log(this.state.ants)})
    });
  }

  render() {
    return (
      <div className="App">
        <ButtonBar />
        <AntList ants={this.state.ants} />
      </div>
    );
  }
}

export default App;
