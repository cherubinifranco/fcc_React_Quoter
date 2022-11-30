import React from 'react'

export class QuoteSorter extends React.Component {
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