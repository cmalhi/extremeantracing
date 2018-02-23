import React, { Component } from 'react';
import './App.css';
import Card from './components/ant-card/card/card';
import ButtonBar from './components/bar/button-bar/button-bar';
import { createApolloFetch } from 'apollo-fetch';

// connect to API
const fetch = createApolloFetch({
  uri: 'https://antserver-blocjgjbpw.now.sh/graphql',
});

const sampleData = [
      {
        "name": "Marie ‘Ant’oinette",
        "weight": 2,
        "color": "BLACK",
        "length": 12
      },
      {
        "name": "Flamin’ Pincers",
        "weight": 2,
        "color": "RED",
        "length": 11
      },
      {
        "name": "Big Susan",
        "weight": 5,
        "color": "BLACK",
        "length": 20
      },
      {
        "name": "The Unbeareable Lightness of Being",
        "weight": 1,
        "color": "SILVER",
        "length": 5
      },
      {
        "name": "‘The Duke’",
        "weight": 3,
        "color": "RED",
        "length": 17
      }
    ]

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
        <Card name={sampleData[0].name} weight={sampleData[0].weight} color={sampleData[0].color} length={sampleData[0].length} />
        <ButtonBar />
      </div>
    );
  }
}

export default App;
