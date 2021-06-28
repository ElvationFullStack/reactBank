import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export class Transaction extends Component {
    handleRemove = () => {
        console.log("here")
        console.log(" removing ", this.props.transaction.vendor)
        this.props.removeTransaction(this.props.transaction.vendor)

    }
    render() {
        console.log(this.props.transaction)
        {
            // <button onClick={this.handleRemove}> remove</button>
        }
        return (
            <tr>
                <td>{this.props.transaction.amount}</td>
                <td>{this.props.transaction.vendor}</td>
                <td>{this.props.transaction.category}</td>
                <td> <Button onClick={this.handleRemove}>remove</Button></td>

            </tr>
        )
    }
}

export default Transaction
