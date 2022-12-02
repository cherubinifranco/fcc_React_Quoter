import React from "react";
import twitter from "../assets/twitter.png";
import newQuote from "../assets/newPaper.png";

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
    fetch("http://localhost:5000/quotes/sorter", {
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
      <div id="quote-box" className="container h-100">

        <h1 id="text" className="text-center p-4">
          {"❝ " + this.state.quote + " ❞"}
        </h1>
        
        <div className="my-3">
          <a id="author" className="none" href={"https://twitter.com/"+ this.state.author} target="_blank">
            <span class="none p-2">@ {this.state.author}</span>
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
                "%0a-" +
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
            <a
              className="none fs-5"
              id="new-quote"
              href={""}
              onClick={this.createAQuote}
            >
              <i>
                <img src={newQuote}></img>
              </i>{" "}
              Create a Quote
            </a>
          </>
          <>
            <button onClick={this.nextQuote} className=" btn btn-primary">
              Next
            </button>
          </>
        </div>
      
      </div>
    );
  }
}
