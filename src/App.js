import React, { Component }  from 'react';
import Message from "./Message";
import Flexi from "./Flexi";
import './App.css';

const flexiConfig = {
  items: [
      {
        "name": "person_name",
        "label": "Person's Name",
        "type": "TextField",
      },
      {
        "name": "states",
        "label": "Person's State",
        "type": "DropDown",
            "values": [
            "Maharashtra",
            "Kerala",
            "Tamil Nadu"
            ]
      }
    ]
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Everyone',
      place: 'India',      
    };
  }

  onFlexSubmit = (val) => {
    this.setState({ 
      name: val.name, 
      place: val.data
    });
  }

  render() {
    return (
      <div className="form">
        <Flexi onSubmit={this.onFlexSubmit} config={flexiConfig.items} />
        <Message name={this.state.name} place={this.state.place} />
      </div>
    );
  }

}

 
