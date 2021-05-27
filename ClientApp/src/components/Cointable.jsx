import React, { Component } from 'react';
import Coin from './Coin'

/*
 * Class: Cointable
 * 
 * Holds: Coin components
 * 
 * Purpose: Create the table body on the page.
 * 
 * Passes to children: Data required to map to/construct ajax API calls, display info.
 * 
 * */
export class Cointable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { coins: [] };
    }

    render() {
        return (
            <tbody>
                
                <Coin name={"Bitcoin"}              symbol={"BTC"}          pair={"BTC-USD/buy"}      />
                <Coin name={"Wrapped Bitcoin"}      symbol={"WBTC"}         pair={"WBTC-USD/buy"}     />
                <Coin name={"Bitcoin Cash"}         symbol={"BCH"}          pair={"BCH-USD/buy"}      />
                <Coin name={"Ethereum"}             symbol={"ETH"}          pair={"ETH-USD/buy"}      />
                <Coin name={"Litecoin"}             symbol={"LTC"}          pair={"LTC-USD/buy"}      />
                <Coin name={"Polygon"}              symbol={"MATIC"}        pair={"MATIC-USD/buy"}    />
                <Coin name={"Uniswap"}              symbol={"UNI"}          pair={"UNI-USD/buy"}      />
                <Coin name={"Chainlink"}            symbol={"LINK"}         pair={"LINK-USD/buy"}     />
                <Coin name={"Compound"}             symbol={"COMP"}         pair={"COMP-USD/buy"}     />
                <Coin name={"Forth"}                symbol={"FORTH"}        pair={"FORTH-USD/buy"}    />
                <Coin name={"Maker"}                symbol={"MKR"}          pair={"MKR-USD/buy"}      />
                <Coin name={"Stellar"}              symbol={"XLM"}          pair={"XLM-USD/buy"}      />
                <Coin name={"Cardano"}              symbol={"ADA"}          pair={"ADA-USD/buy"}      />
                <Coin name={"Algorand"}             symbol={"ALGO"}         pair={"ALGO-USD/buy"}     />
                <Coin name={"Dai"}                  symbol={"DAI"}          pair={"DAI-USD/buy"}      />
                <Coin name={"Tether"}               symbol={"USDT"}         pair={"USDT-USD/buy"}     />
                <Coin name={"USD Coin"}             symbol={"USDC"}         pair={"USDC-USD/buy"}     />
            </tbody>    
        );
    }
}

export default Cointable;