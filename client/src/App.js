import React, { Component } from "react";
import CurrencyInput from "./components/CurrencyInput";
import SliderInput from "./components/SliderInput";
import DisplayGraph from "./components/DisplayGraph";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alreadySaved: 0,
      monthlySaving: 0,
      interest: 4,
    };
  }

  handleAlreadySaved = (alreadySaved) => {
    this.setState({ alreadySaved });
  }

  handleMonthlySaving = (monthlySaving) => {
    this.setState({ monthlySaving });
  }

  handleInterest = ({ target }) => {
    const { value } = target;

    this.setState({ interest: parseFloat(value) });
  }

  render() {
    const { alreadySaved, interest, monthlySaving } = this.state;

    return (
      <div className="App">
        <div className="header-banner">
          <h1 className="fmz-white-font">Finimize Interest Rate Calculator</h1>
        </div>
        <div className="financial-inputs">
          <p className="input-label">How much have you saved?</p>
          <CurrencyInput value={alreadySaved} onChange={this.handleAlreadySaved} />

          <p className="input-label">How much will you save each month?</p>
          <CurrencyInput value={monthlySaving} onChange={this.handleMonthlySaving} />

          <p className="input-label">
            How much interest will you earn per year?
          </p>
          <SliderInput value={interest} onChange={this.handleInterest} />
        </div>
        <div className="financial-display">
          <DisplayGraph
            data={[
              {
                month: 1,
                amount: 500
              },
              {
                month: 2,
                amount: 700
              },
              {
                month: 3,
                amount: 1000
              },
              {
                month: 4,
                amount: 1500
              }
            ]}
          />
        </div>
      </div>
    );
  }
}

export default App;
