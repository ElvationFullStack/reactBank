import React, { Component } from 'react'
import Transaction from './Transaction'

export class Transactions extends Component {
    render() {
        return (
            <div>
                {this.props.data.map(t => {
                    return <Transaction key={t.vendor} removeTransaction={this.props.removeTransaction} transaction={t}></Transaction>
                })}

            </div>
        )
    }
}

export default Transactions
