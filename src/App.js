import React, { Component } from 'react';
import Loader from './Loader/Loader.js'
import Table from './Table/Table';
import UserInfo from './UserInfo/UserInfo';
import ModeSelector from './ModeSelector/ModeSelector';
import _ from 'lodash';

class App extends Component {

  state = {
    isModeSelected: false,
    isLoading: false,
    data: [],
    sort: 'asc',
    sortField: 'id',
    row: null
  }

  async fetchData(url) {
    const response = await fetch(url)
    const data = await response.json()
    this.setState({
      isLoading: false,
      data: _.orderBy(data, this.state.sortField, this.state.sort)
    })
  }

  onSort = sortField => {
    
    const cloneData = this.state.data.slice();
    const sort = this.state.sort === 'asc' ? 'desc' : 'asc';
    const data = _.orderBy(cloneData, sortField, sort);

    this.setState({
      data,
      sort,
      sortField
    })
  }

  onRowSelect = row => {
    this.setState({row})
  }

  modeSelectHandler = url => {
    this.setState({
      isModeSelected: true,
      isLoading: true,
    })
    this.fetchData(url)
 }

  render() {

    if(!this.state.isModeSelected){
      return (
          <div className="wrapper">
            <ModeSelector onSelect={this.modeSelectHandler} />
          </div>
  )
}
    return (
      <div className="wrapper">
          <h1>Список пользователей</h1>
            {
              this.state.isLoading 
              ? <Loader />
              : <Table 
              data={this.state.data} 
              onSort={this.onSort}
              sort={this.state.sort}
              sortField={this.state.sortField}
              onRowSelect={this.onRowSelect}
              />
            }
            {
              this.state.row ? <UserInfo person={this.state.row} /> : null
            }
      </div>
    );
  }
}

export default App;

