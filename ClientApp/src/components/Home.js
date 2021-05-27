import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>React Practice</h1>
        <p>This C# application is a simple single-page proof-of-concept that showcases React components using the C#/React paradigm.</p>
        <p>Features:</p>
        <ul>
          <li><strong>Near real-time updates</strong>. React components on the page update themselves in near real-time using React lifecycle methods. (Coinbase rate limits all public API requests, so it's not quite in real-time.)</li>
          <li><strong>React composition</strong>. All React components are composed of other React components. For example, a <code>Cointable</code> component is composed of several <code>Coin</code> components, which in turn are composed of <code>Price</code> components.</li>
          <li><strong>React data flow</strong>. All data contained in React components were passed from the parent. For example, a <code>Cointable</code> component passes in the data necessary to render several <code>Coin</code> components, which in turn passes in the necessary fetch query information to the <code>Price</code> component.</li>
          <li><strong>React data mapping</strong>. In order to display real-time data on the page from the Coinbase API, each Coinbase trading pair (e.g. BTC/USD) had to be mapped from the API documentation. This mapping can be found in the <code>Cointable</code> React component.</li>
        </ul>
        <p>Created by Andrew Hansen, 2021</p>
      </div>
    );
  }
}
