import React, { Component } from 'react';
import Header from "./Header";
import './App.css';

/* class App extends Component {
  
  render() {
    return (
      <div>
        <Header></Header>
        <button> Add </button>
        <div>
          <span> Name </span>
          <br/>
          <span> Phone </span>
        </div>
      </div> 
    );
  }
} */
class App extends Component {
  render() {
    let subscribers = [
      {
        id:1,
        name: "Shilpa Bhat",
        phone: "8888888888"
      },
      {
        id:2,
        name: "Srishti",
        phone: "9999999999"
      }
    ]
    return (
      <div>
        <Header heading="Phone Directory"></Header>
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {/* <div className="grid-container">
            <span className="grid-item ">Shilpa "THINK"</span>
            <span className="grid-item ">8888888888</span>
          </div>
          <div className="grid-container">
            <span className="grid-item ">Shristi</span>
            <span className="grid-item ">9999999999</span>
          </div> */}

          {
            subscribers.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className = "grid-item">{sub.name}</span>
                <span className = "grid-item">{sub.phone}</span>
                <span className= "grid-item action action-btn-container">
                  <button className= "custom-btn delete-btn">Delete</button>
                </span>
              </div>
          })
          }
        </div>
      </div>
    );
  }
}

export default App;
