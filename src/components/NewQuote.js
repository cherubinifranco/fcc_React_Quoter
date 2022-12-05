import React from "react";
import { Link } from "react-router-dom";
import twitter from "../assets/twitter.png";

export class NewQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit() {
    fetch("http://quoter-api-pbyg.onrender.com/quotes/new", {
      method: "POST",
      body: JSON.stringify({
        quote: this.state.quote,
        author: this.state.author,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // Aca tiene que cambiar a la vista de Quotes, esa parte ya anda, aunque deberia mostrar esta quote
        console.log(json);
      });
  }

  render() {
    return (
      <div className="App vh-100 d-flex align-items-center justify-content-center">
        <form className="p-4 wrapper">
          <div className="form-floating">
            <textarea
              className="form-control h-75 p-4 fs-2 fw-semibold"
              placeholder="nose"
              id="floatingTextArea"
              name="quote"
              onChange={this.handleChange}
              value={this.state.quote}
            />
            <label for="floatingTextarea" className="text-dark">
              Quote
            </label>
          </div>

          <div className="my-3 input-group">
            <Link
              to="/"
              className="btn btn-primary"
            >
              Back
            </Link>
            <label className="w-25 text-secondary m-2">
            </label>
            <span class="input-group-text">@</span>
            <input
              className="form-control"
              type="text"
              placeholder="Your twitter handle"
              name="author"
              onChange={this.handleChange}
              value={this.state.author}
            />
            
            
            <button
              onClick={this.handleSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}
