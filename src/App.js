import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import React, { Component } from 'react'

import Transactions from './components/Transactions';
import Operations from './components/Operations';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" }
      ],
      balance: 4000
      , res: []
    }
  }
  async getTransaction() {
    return axios.get("http://localhost:3005/transactions")
  }
  // async addTransactionToDb(tran) {
  //   axios.post("http://localhost:3005/transactions",tran)

  // }
  async componentDidMount() {
    const response = await this.getTransaction()
    this.setState({ data: response.data })
  }
  getTotalBalance = () => {
    let balance = 0;
    this.state.data.forEach(t => balance += t.amount)
    return balance
  }

  addTransaction = async (tran) => {
    // const tempData = [...this.state.data]
    // tempData.push(tran)
    // this.setState({ data: tempData })
    let postResponse = await axios.post("http://localhost:3005/transactions", tran)
    console.log(postResponse.status)
    if (postResponse.status === 201) {

    }




  }
  removeTransaction = async (vendor) => {
    // const tempData = [...this.state.data]
    // const tempDataFiltter = tempData.filter(t => t.vendor !== vendor)
    // this.setState({ data: tempDataFiltter })
    const tempData = [...this.state.data]
    const deletTrans = tempData.find(t => t.vendor === vendor)
    await axios.delete("http://localhost:3005/transactions", {data:deletTrans})


  }

  render() {
    return (
      <div className="App">
        <h1>your balance {this.getTotalBalance()}</h1>
        <Transactions data={this.state.data} removeTransaction={this.removeTransaction}></Transactions>

        <Operations addTransaction={this.addTransaction}></Operations>
      </div>
    );
  }
}



export default App;
