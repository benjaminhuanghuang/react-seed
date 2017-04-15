import React, {Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';

import Clock from './clock';
import './app.css'

class App extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            deadline: 'December 25, 2017',
            newDeadline: ''
        };
    }

    changeDeadline(){
        console.log(this.state.newDeadline);
        this.setState({deadline: this.state.newDeadline});
    }

    render(){
        //this.setState({newDeadline: event.target.val})
        return (<div className="app">  
                    <div className="app-title"> Countdown to {this.state.deadline}</div>
                    <Clock deadline={this.state.deadline}/>
                    <Form inline>
                        <FormControl type="text" placeholder='new date' onChange={event=>this.setState({newDeadline: event.target.value})}/>
                        <Button onClick={()=>this.changeDeadline()}>Submit</Button>
                    </Form>
                </div>) 
    }
}
 
export default App;
