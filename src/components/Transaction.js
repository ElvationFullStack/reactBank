import React, { Component } from 'react'

export class Transaction extends Component {
    handleRemove = () => {
        console.log("here")
        console.log(" removing ",this.props.transaction.vendor)
        this.props.removeTransaction(this.props.transaction.vendor)

    }
    render() {
        console.log(this.props.transaction)
        return (
            <div>
                <span> amount:  {this.props.transaction.amount}</span>
                <span> Vendor :  {this.props.transaction.vendor}</span>
                <span> catagory :  {this.props.transaction.category} </span>
                <button onClick={this.handleRemove}> remove</button>
                <br></br>
            </div>
        )
    }
}

export default Transaction
