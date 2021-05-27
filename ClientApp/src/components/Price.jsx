import React, { Component } from 'react';

/*
 * Class: Price
 *
 * Holds: Nothing (displays info only)
 *
 * Purpose: Fill out the price-related data in the table by calling Coinbase API.
 * Also updates itself using setTimeout and React lifecycle methods.
 *
 * Passes to children: N/A
 *
 * */
class Price extends React.Component {

    intervalId;

    constructor(props) {
        super(props);

        this.state = {
            price: "loading...",
        };

        // bind methods to "this" context to prevent JS errors for missing methods
        this.populateCoinData = this.populateCoinData.bind(this);
        this.findCorrectUrl = this.findCorrectUrl.bind(this);
        this.retrievePriceValueBasedOnExchange = this.retrievePriceValueFromJSON.bind(this);
    }


    render() {
        return (
            <span>
                ${this.state.price}
            </span>
        );
    }

    componentWillMount() {
        
    }

    componentDidMount() {
        this.populateCoinData();
        this.intervalId = setTimeout(this.populateCoinData(), 10000);
    }

    componentWillUnmount() {
        clearTimeout(this.intervalId);
    }

    findCorrectUrl() {
        var result;

        // must map to Coinbase API spec or the Ajax call fails
        result = this.props.url + this.props.pair;
     
        return result;
    }

    retrievePriceValueFromJSON(wrappedData) {
        var data;
        var amount;

        if (this.props.exchange == "coinbase") {
            data = wrappedData.data; 
            amount = data.amount;
        }

        return amount;
    }

    populateCoinData = () => {
        const xhr = new XMLHttpRequest();

        var requestUrl = this.findCorrectUrl();
        xhr.open('get', requestUrl, true);
        xhr.onload = () => {
            const response = xhr.responseText;
            var wrappedData = JSON.parse(response)
            
            if (wrappedData != undefined) {
                var amount = this.retrievePriceValueFromJSON(wrappedData);
                this.setState({ price: amount });
                this.intervalId = setTimeout(this.populateCoinData(), 10000);
            }
        };
        xhr.send();
    }

}

export default Price;