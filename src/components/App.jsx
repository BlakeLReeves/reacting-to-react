import React, { Component } from 'react';

// const App = (props) => {
//     return (
//         <h1>Hello World!</h1>
//     )
// }

class App extends Component {
    constructor() {
        super();

        this.state = {
            text: "React is awesome!",
            hasLoaded: false
        };
    }

    handleInputChange(value) {
        this.setState({ text: value });
    }

    handleToggle() {
        this.setState({ hasLoaded: true });
    }

    componentDidMount() {
        this.setState({ hasLoaded: true });
    }

    render() {

        if (this.state.hasLoaded === true) {
            let title = 'React';
            return (
                <React.Fragment>
                    <h1>Hello {title}! {this.state.text}</h1>
                    <input
                        value={this.state.text}
                        placeholder={this.state.text}
                        onChange={(event) => this.handleInputChange(event.target.value)}
                    />
                    <button
                        onClick={(event) => this.handleToggle(event.target)}
                    >Click to Load!</button>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <h1>Loading...</h1>
                    <button
                        onClick={(event) => this.handleToggle(event.target)}
                    >Click to Load!</button>
                </React.Fragment>
            );
        }
    }
}

export default App;