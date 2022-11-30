import React from 'react'

export class NewQuote extends React.Component {
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
