import React, {Component} from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
 
import './app.css'

class App extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
  
        }; 
    }

    render(){
        return (<div className="app">  
                    <div className="app-title">Music Master</div>
                    <FormGroup>
                        <InputGroup>
                              <FormControl type= "text" placeholder="search an artist..."/>
                              <InputGroup.Addon>
                                <Glyphicon glyph="search"></Glyphicon>
                              </InputGroup.Addon>
                        </InputGroup>
                    </FormGroup>
                    <div className="profile">
                        <div>Artist Picture</div>
                        <div>Artist Name</div>
                    </div>
                    <div className="gallerry">
                        Gallery
                    </div>
                </div>) 
    }
}
 
export default App;
