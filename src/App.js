import React, { Component } from 'react';


import './App.css';
import GenerateQuote from './GenerateQuote';
import DisplayQuote from './DisplayQuote';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // we can set up a sampleQuote as the default
      // to always display a quote
      quote: {}, /*or a sampleQuote for static example*/
      isLoading: true,
    };
  }

  getQuote() {
    // Quote collection via fetch
    fetch("https://randomuser.me/api?nat=fr")
      .then(response => response.json())
      .then(data => {
        // Once the data is collected, we update our state with the new data
        this.setState({
          quote: data.results[0],
          isLoading: false,
        });
      });
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <GenerateQuote selectQuote={() => this.getQuote()} />
          {
            !this.state.isLoading &&
            <DisplayQuote quote={this.state.quote} />
          }
        </header>
      </div>
    );
  }
}





export default App;
