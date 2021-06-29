import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge'
import axios from 'axios';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Transactions from './components/Transactions';
import Operations from './components/Operations';
import GroupTransaction from './components/GroupTransaction';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [
      ],
      balance: 4000
      , res: []
    }
  }
  async getTransaction() {
    return axios.get("http://localhost:3005/transactions")
  }
  async getDataFromDb() {
    const response = await this.getTransaction()
    this.setState({ data: response.data })
  }

  async componentDidMount() {
    this.getDataFromDb()
  }
  getTotalBalance = () => {
    let balance = 0;
    this.state.data.forEach(t => balance += t.amount)
    return balance
  }

  addTransaction = async (tran) => {
    let postResponse = await axios.post("http://localhost:3005/transactions", tran)
    console.log(postResponse.status)
    if (postResponse.status === 201) {
      this.getDataFromDb()


    }




  }
  removeTransaction = async (vendor) => {
    const tempData = [...this.state.data]
    const deletTrans = tempData.find(t => t.vendor === vendor)
    await axios.delete("http://localhost:3005/transactions", { data: deletTrans })
    this.getDataFromDb()

  }

  amountByGroup = () => {
    const amountGroupSet = {}
    this.state.data.forEach(t => {
      amountGroupSet[t.category] = + amountGroupSet[t.category] === undefined ? 0 : t.amount
    })

    return amountGroupSet

  }
  balanceClassName=()=>{
   
  }
  render() {
    return (
      <div className="App">
        <h2>
          Your Balance:
          {this.getTotalBalance()>500? <span className="green">{this.getTotalBalance()}</span>: <span className="red">{this.getTotalBalance()}</span>}
        </h2>

        <Router>

          <Container fluid="md">
            <Row className="justify-content-md-center">
              <Col>

                <Link to="/transaction">
               
                    transaction
                
                </Link>

              </Col>
              <Col>
                <Link to="/operation">  operation </Link>
              </Col>
            
              <Col>
                <Link to="/group"> group </Link>
              </Col>
            

            </Row>
          </Container>




          <Route path='/transaction' exact render={() =>
            <Transactions
              data={this.state.data}
              removeTransaction={this.removeTransaction}>
            </Transactions>}>
          </Route>

          <Route path='/operation' exact render={() =>
            <Operations
              addTransaction={this.addTransaction}>
            </Operations>
          }>
            {//this.amountByGroup()
              // 
            }
          </Route>

          <Route path="/group" exact render={() =>

            <GroupTransaction group={this.amountByGroup()}></GroupTransaction>
          }

          >

          </Route>
        </Router>


      </div>
    );
  }
}



export default App;
