import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

export class GroupTransaction extends Component {

    displayAmount = () => {
        const myKeys = Object.keys(this.props.group)
        return myKeys.map(c => {
            return <tr> <td>{c}</td> <td>{this.props.group[c]}</td></tr>
        })
    }
    render() {
        console.log(this.props.group)

        return (
            <div>
                {
                    <Table>
                        <thead>
                            <tr>
                                <td>group</td>
                                <td>totalAmount</td>

                            </tr>
                        </thead>
                        <tbody>
                            {this.displayAmount()}
                        </tbody>
                    </Table>

                }

            </div>
        )
    }
}

export default GroupTransaction
