import "./App.css";
import QuoteCard from "./components/QuoteCard";
import axios from "axios";
import React, { Component } from "react";

const SimpsonQuote = [
  {
    quote:
      "By chilling my loins I increase the chances of impregnating my wife.",
    character: "Apu Nahasapeemapetilon",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: SimpsonQuote[0]
    };
    this.getNewQuote = this.getNewQuote.bind(this);
  }

  getNewQuote = () =>
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({
          quote: data[0]
        });
      });

  render() {
    return (
      <div className="App">
        <QuoteCard quote={this.state.quote} />
        <button
          className="btnForQuote"
          type="button"
          onClick={this.getNewQuote}
        >
          Clic for NEW QUOTE
        </button>
      </div>
    );
  }
}

export default App;