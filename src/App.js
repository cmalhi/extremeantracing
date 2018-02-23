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
  console.log('clicked')
  //create array of promises for promise.all
  var promises = [];
  this.state.ants.forEach((ant, i) => { 
    const pinkyPromise = new Promise((resolve, reject) => {
      generateAntWinLikelihoodCalculator()(resolve);
    })
      .then((data)=>{
        let newAnts = this.state.ants;
        newAnts[i]['likelihood'] = Math.round(data * 100);
        console.log('Calculated likelihood of', newAnts[i].name, 'winning')
        this.setState({ants: newAnts});
        return newAnts[i];
      })
    promises.push(pinkyPromise);
  });
  
  Promise.all(promises)
    .then((values) => {
      values = values.sort((a,b)=>{
        return a.likelihood < b.likelihood
      })
      this.setState({ants: values})
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
