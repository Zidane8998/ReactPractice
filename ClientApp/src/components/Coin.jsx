import React, { Component } from 'react';
import Price from "./Price"

/*
 * Class: Cointable
 *
 * Holds: Price components
 *
 * Purpose: Fill out the price and non-price related table row/columns.
 *
 * Passes to children: Data required to call Coinbase using fetch, display info.
 *
 * */
class Coin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.symbol}</td>
                <td><Price exchange={"coinbase"} coin={this.props.symbol} url={"https://api.coinbase.com/v2/prices/"}  pair={this.props.pair} /></td>
            </tr>
        );
    }

    componentDidMount() {
        
    }
}

export default Coin;