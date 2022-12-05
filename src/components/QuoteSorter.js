import React from "react";
import twitter from "../assets/twitter.png";
import newQuote from "../assets/newPaper.png";
import { Link } from 'react-router-dom'

export class QuoteSorter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
    };
    this.nextQuote = this.nextQuote.bind(this);
  }

  componentDidMount() {
    this.nextQuote();
  }

  nextQuote() {
    fetch("https://fccquoterbackend-production.up.railway.app/quotes/sorter", {
      method: "get",
      headers: {
        "Content-Type": "aplication/json",
      },
    })
      .then((response) => response.json())
      .then((obj) => {
        this.setState({
          quote: obj.quote,
          author: obj.author,
        });
      });
  }

  createAQuote() {
    // Aca tiene que cambiar a la parte de crear una Quote, esa parte ya anda
    console.log("Aca va la store");
  }

  render() {
    return (
      <div className="App vh-100 d-flex align-items-center justify-content-center">
        <div id="quote-box" className="wrapper">
          <h1 id="text" className="text-center p-4">
            {"❝ " + this.state.quote + " ❞"}
          </h1>

          <div className="m-4">
            <a
              id="author"
              className="none"
              href={"https://twitter.com/" + this.state.author}
              target="_blank"
            >
              <span className="none p-2">@ {this.state.author}</span>
            </a>
          </div>
          <div className="d-flex justify-content-around pb-3">
            <>
              <a
                className="none"
                target="_blank"
                href={
                  "https://twitter.com/intent/tweet?url=" +
                  this.state.quote +
                  "%0a-@" +
                  this.state.author
                }
                id="tweet-quote"
              >
                <i>
                  <img src={twitter}></img>
                </i>{" "}
                Tweet it
              </a>
            </>
            <>
              <Link
                className="none fs-5"
                id="new-quote"
                to="/new"
                onClick={this.createAQuote}
              >
                <i>
                  <img src={newQuote}></img>
                </i>{" "}
                Create a Quote
              </ Link>
            </>
            <>
              <button onClick={this.nextQuote} className=" btn btn-primary">
                Next
              </button>
            </>
          </div>
        </div>
      </div>
    );
  }
}
