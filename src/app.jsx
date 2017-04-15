import React, {Component} from 'react';
import './app.css'

class App extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            deadline: 'December 25, 2017',
            counter: 0
        };
    }

    changeDeadline(){
        this.setState({deadline: "November 25, 2017"});
    }
    render(){
        return (<div className="app">  
                    <div className="app-title"> Countdown to {this.state.deadline}</div>
                    <div> 
                        <div className="time"> Days </div>
                        <div className="time"> Hours </div>
                        <div className="time"> minutes</div>    
                        <div className="time"> seconds</div>    
                    </div>
                    <div>
                        <input type="text" placeholder='new date'/>
                        <button onClick={()=>this.changeDeadline()}>Submit</button>
                    </div>
                </div>) 
    }
}

export default App;
