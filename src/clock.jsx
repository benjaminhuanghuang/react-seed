import React, { Component } from 'react';
import './app.css'

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - new Date();
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor(time / (1000 * 60 * 60) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        this.setState({days, hours, minutes, seconds});
    }
    componentWillMount(){
        this.getTimeUntil(this.props.deadline);
    }
    componentDidMount()
    {
        setInterval(()=>this.getTimeUntil(this.props.deadline), 1000);
    }
    render() {
        return (<div>
                    <div className="time"> {this.state.days} Days</div>
                    <div className="time"> {this.state.hours} Hours</div>
                    <div className="time"> {this.state.minutes} Minutes</div>
                    <div className="time"> {this.state.seconds} Seconds</div>
                </div>);
    }
}
export default Clock;
