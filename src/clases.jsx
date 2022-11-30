import React from 'react';
// import {useSelector, useDispatch} from 'react-redux'
let displayQuotes = true;



export class QuoteWrapper extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return displayQuotes ? <QuoteSorter/> : <NewQuote/>
    }
}

class QuoteSorter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            quote: "",
            author: ""
        }
        this.nextQuote = this.nextQuote.bind(this)
    }

    componentDidMount(){
        this.nextQuote()
    }

    nextQuote(){
        fetch('http://localhost:5000/quotes/sorter', {
            method: 'get',
            headers: {
                'Content-Type': 'aplication/json'
            }
        })
        .then(response => response.json())
        .then(obj => {
            this.setState({
                quote: obj.quote,
                author: obj.author
            })
        })
    }
    
    createAQuote(){
        // Aca tiene que cambiar a la parte de crear una Quote, esa parte ya anda
        console.log("Aca va la store")
    }

    render(){
        return (
            <div id="quote-box">
                <h1 id="text">{this.state.quote}</h1>
                <p id="author" >{this.state.author}</p>
                <div>
                    <a target="_blank" href={"https://twitter.com/intent/tweet?url=" + this.state.quote + "%0a-" + this.state.author} id="tweet-quote">TWT</a>
                    <a id="new-quote" href={""} onClick={this.createAQuote}>Create a Quote</a>
                    <button onClick={this.nextQuote}>Next Quote</button>
                    
                </div>
            </div>
        )
    }
}

class NewQuote extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quote: "",
            author: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(){
        displayQuotes = true;
        fetch('http://localhost:5000/quotes/new', {
            method: "POST",
            body: JSON.stringify({
                quote: this.state.quote,
                author: this.state.author
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then((response)=> response.json())
        .then(json=>{
            // Aca tiene que cambiar a la vista de Quotes, esa parte ya anda, aunque deberia mostrar esta quote
            console.log(json)
        })
    }

    render(){
        return (
            <div>
                <input type="text" placeholder="Quote" name="quote" onChange={this.handleChange} value={this.state.quote} />
                <input type="text" placeholder="Author" name="author" onChange={this.handleChange}value={this.state.author} />
                <button onClick={this.handleSubmit}>Send</button>
            </div>
        )
    }

}

