import React, {Component} from 'react';
import './app.css'

class Clock extends Component{
    constructor(props){
        super(props);
        this.state={
            days:0,
            hours:0,
            minutes:0,
            seconds:0
        }
    }
    render(){
            return (<div> 
                        <div className="time"> {this.state.days} Days</div>
                        <div className="time"> {this.state.hours} Hours</div>
                        <div className="time"> {this.state.minutes} Minutes</div>    
                        <div className="time"> {this.state.seconds} Seconds</div>    
                    </div>);
    }
}
export default Clock;
