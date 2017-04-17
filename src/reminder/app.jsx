import React, { Component } from 'react';

import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

import './app.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (<div className="app">
                    <div className="title">
                        Reminder Pro
                    </div>
                    <div className="from-inline">
                        <div className="form-group">
                            <input className="form-control" placeholder="I have to..." onChange={event => this.setState({ text: event.target.value })} />
                            <input className="form-control" type="datetime-local" onChange={event => this.setState({ dueDate: event.target.value })} />
                        </div>
                        <button type="button" className="btn btn-success" onClick={() => this.addReminder()}>
                            Add Reminder
                        </button>
                    </div>
                </div>)
    }
}

export default App;
