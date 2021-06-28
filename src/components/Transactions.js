import React, { Component } from 'react'
import Transaction from './Transaction'
import Table from 'react-bootstrap/Table'

export class Transactions extends Component {
    render() {
        return (
            <div>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <td>amount</td>
                            <td>vendor</td>
                            <td>catagory</td>
                        </tr>

                    </thead>
                    <tbody>
                        {this.props.data.map(t => (
                            (<Transaction key={t.vendor}
                                removeTransaction={this.props.removeTransaction}
                                transaction={t}></Transaction>)

                        ))}

                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Transactions
