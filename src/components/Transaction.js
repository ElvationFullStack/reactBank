import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export class Transaction extends Component {
    handleRemove = () => {
     
        this.props.removeTransaction(this.props.transaction.vendor)

    }
    render() {
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
