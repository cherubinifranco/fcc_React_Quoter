import React from "react";
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
    fetch("http://localhost:5000/quotes/new", {
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
      <form className="m-4">
        
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
          <span class="input-group-text">@</span>
          <input
            className="form-control"
            type="text"
            placeholder="Author"
            name="author"
            onChange={this.handleChange}
            value={this.state.author}
          />
          <label className="w-50 text-secondary m-2">(Your twitter handle)</label>
        <button
          onClick={this.handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Send
        </button>

        </div>


      </form>
    );
  }
}
