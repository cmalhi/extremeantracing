import React, { Component } from 'react';
import './App.css';
import Card from './components/ant-card/card';
import ButtonBar from './components/bar/button-bar/button-bar';
import ProgressBar from './components/bar/progress-bar/progress-bar';

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
  render() {
    return (
      <div className="App">
        <ButtonBar />
        <Card name={sampleData[0].name} weight={sampleData[0].weight} color={sampleData[0].color} length={sampleData[0].length} />
      </div>
    );
  }
}

export default App;
