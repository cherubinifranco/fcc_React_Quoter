import React from 'react'
import { NewQuote } from "./NewQuote";
import { QuoteSorter } from "./QuoteSorter";

let displayQuotes = true;

export class QuoteWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return displayQuotes ? <QuoteSorter /> : <NewQuote />;
  }
}
