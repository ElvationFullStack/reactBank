import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
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
            <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">amount</InputGroup.Text>
            <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm"  name="amount" onChange={this.handleTextChange} />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">vendor</InputGroup.Text>
          <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm"   onChange={this.handleTextChange} name="vendor" />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">category</InputGroup.Text>
        <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm"   onChange={this.handleTextChange} name="category" />
      </InputGroup>
      <div className="d-grid gap-2">
      <Button name="deposite" onClick={this.handleSubmit} variant="primary" size="sm">
      Deposite
      </Button>
      <Button  name="withdraw" onClick={this.handleSubmit} variant="secondary" size="sm">
      Withdrow
      </Button>
    </div>

               

            </div>
        )
    }
}

export default Operations
