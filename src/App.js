import React, { Component } from 'react';
import './App.css';
import ButtonBar from './components/bar/button-bar/button-bar';
import { createApolloFetch } from 'apollo-fetch';
import AntList from './components/ant-list/ant-list';
import generateAntWinLikelihoodCalculator from './utils/generator';

// connect to API
const fetch = createApolloFetch({
  uri: 'https://antserver-blocjgjbpw.now.sh/graphql',
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ants: [],
      totalProgress: 5,
      progressState: 'calculate',
    }
    this.fetch = this.fetch.bind(this);
    this.promisifyLikelihoodGeneration = this.promisifyLikelihoodGeneration.bind(this);
  }

  fetch() {
    fetch({
      query: '{ ants { name weight length color }}',
    }).then(res => {
      this.setState({ants: res.data.ants});
    });
  }

  componentDidMount() {
    this.fetch();
  }

  promisifyLikelihoodGeneration() {
  this.setState({totalProgress: 15, progressState: 'in progress'})
  //create array of promises for promise.all
  let promises = [];
  // increase the percentage on button bar based on array size
  let progressIncrease = 85 / this.state.ants.length;

  this.state.ants.forEach((ant, i) => { 
    // set data for progress bar and progress state 
    let newAntsProgress = [...this.state.ants];
    newAntsProgress[i]['progress'] = 20;
    newAntsProgress[i]['progressState'] = 'in progress';
    this.setState({ants:newAntsProgress});

    //create promise
    const pinkyPromise = new Promise((resolve, reject) => {
      generateAntWinLikelihoodCalculator()(resolve);
    })
      .then((data)=>{
        // set likelihood and create progress state and percentage for individual ants
        let newAnts = this.state.ants;
        let currentAnt;
        newAnts[i]['likelihood'] = Math.round(data * 100);
        newAnts[i]['progress'] = 100;
        newAnts[i]['progressState'] = 'complete';
        this.setState({ants: newAnts, totalProgress: this.state.totalProgress + progressIncrease})
        
        // resolve with progress and likelihood data
        return newAnts[i];
      })
    promises.push(pinkyPromise);
  });
  
  Promise.all(promises)
    .then((values) => {
      // sort by likelihood of win
      // values = values.sort((a,b)=>{
      //   return a.likelihood < b.likelihood
      // })
      // update total progress
      this.setState({ants: values, totalProgress: 100, progressState: 'complete'})
    })
    .catch((error) => {
      console.log(error)
    })
}

  render() {
    return (
      <div className="App">
        <h1>- Extreme Ant Racing -</h1>
        <ButtonBar click={this.promisifyLikelihoodGeneration} totalProgress={this.state.totalProgress} progressState={this.state.progressState} />
        <AntList ants={this.state.ants} />
      </div>
    );
  }
}

export default App;
