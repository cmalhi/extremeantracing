import React, { Component } from 'react';
import './App.css';
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
    this.fetch = this.fetch.bind(this);
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

  // created this function in a repl 
  main() {
  //create array of promises for promise all to be able to calculate everything at once
  var promises = [];
  antData.data.ants.forEach((ant) => { 
    const pinkyPromise = new Promise((resolve, reject) => {
      generateAntWinLikelihoodCalculator()(resolve);
    })
      .then((data)=>{
        var obj = {
          likelihood: data,
          ant: ant
        }
        console.log('Calculated likelihood of', obj.ant.name, 'winning')
        return obj
      })
    promises.push(pinkyPromise);
    console.log('ant order', ant.name)
  });
  
  Promise.all(promises)
    .then((values) => {
      values = values.sort((a,b)=>{
        return a.likelihood < b.likelihood
      })
      console.log('all calculations done \n', values)
    })
    .catch((error) => {
      console.log(error)
    })
}


  render() {
    return (
      <div className="App">
        <h1>- Extreme Ant Racing -</h1>
        <ButtonBar />
        <AntList ants={this.state.ants} />
      </div>
    );
  }
}

export default App;
