import React from 'react';

/*
 * Class: Clock
 *
 * Holds: Nothing (displays info only)
 *
 * Purpose: Display the current datetime. Update self.
 *
 * Passes to children: N/A
 *
 * */
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };

        // bind methods to "this" context to prevent JS errors for missing methods
        this.tick = this.tick.bind(this)
    }
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleString()
        });
    }

    render() {
        return (
            <p className="App-clock">
                Datetime: {this.state.time}
            </p>
        );
    }
}

export default Clock;