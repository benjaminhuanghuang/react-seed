import React, { Component } from 'react';
import './app.css'

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }
    render() {
        return (<div> {this.state.name} </div>);
    }
}
export default MyComponent;
