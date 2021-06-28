import React, { Component } from 'react'

export class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: 0,
            vendor: "",
            category: ""
        }
    }
    handleTextChange = (event) => {
        const target = event.target
        const name = target.name
        const value = target.value
        this.setState({
            [name]: value
        })
    }


    handleSubmit = (e) => {
        let sign = 1;
        if (e.target.name === 'withdraw') {
            sign *= -1
        }
        const transaction = {
            amount: this.state.amount * sign,
            vendor: this.state.vendor,
            category: this.state.category

        }
        this.props.addTransaction(transaction)
       
    }
    render() {
        return (
            <div>
                <input onChange={this.handleTextChange} name="amount" amount={this.state.amount} placeholder="amount "></input>
                <input onChange={this.handleTextChange} name="vendor" placeholder="vendor"></input>
                <input onChange={this.handleTextChange} name="category" placeholder="category"></input>

                <button name="deposite" onClick={this.handleSubmit}>Deposite</button>
                <button name="withdraw" onClick={this.handleSubmit}>Withdrow</button>

            </div>
        )
    }
}

export default Operations
