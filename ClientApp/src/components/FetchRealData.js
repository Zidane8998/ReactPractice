import React, { Component } from 'react';
import Cointable from './Cointable'
import Clock from './Clock'

export class FetchRealData extends React.Component {
  static displayName = FetchRealData.name;

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  static renderCoinTable() {
      return (
          // JSX here to avoid IntelliSense error for no parent.
          <>
              <div>
                  <Clock />
              </div>

              <table className='table table-striped' aria-labelledby="tabelLabel">
                  <thead>
                      <tr>
                          <th>Coin Name</th>
                          <th>Coin Symbol</th>
                          <th>Last Price (Coinbase)</th>
                      </tr>
                  </thead>
                  <Cointable />
              </table>
          </>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchRealData.renderCoinTable();

    return (
      <div>
        <h1 id="tabelLabel" >Coinbase Real-time Data</h1>
        <p>This component demonstrates fetching real-time price data using ReactJS.</p>
        {contents}
      </div>
    );
  }

    async populateCoinData() {
    this.setState({ loading: false });
  }

}
