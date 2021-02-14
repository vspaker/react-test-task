import React, { Component } from 'react';
import Loader from './Loader/Loader.js'
import Table from './Table/Table';

class App extends Component {

  state = {
    isLoading: true,
    data: []
  }

  async componentDidMount() {
    const response = await fetch(` http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
    const data = await response.json()
    this.setState({
      isLoading: false,
      data
    })
  }

  render() {
    return (
      <div className="wrapper">
          <h1>Список пользователей</h1>
            {
              this.state.isLoading 
              ? <Loader />
              : <Table 
              data={this.state.data}
              />
            }
      </div>
    );
  }
}

export default App;

