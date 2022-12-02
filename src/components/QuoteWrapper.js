import React from "react";
import { NewQuote } from "./NewQuote";
import { QuoteSorter } from "./QuoteSorter";

let displayQuotes = true;

export class QuoteWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App vh-100 d-flex align-items-center justify-content-center">
        <div className="wrapper">
          {displayQuotes ? <QuoteSorter /> : <NewQuote />}
        </div>
      </div>
    );
  }
}
