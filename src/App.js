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
/* clickHandler(message){
  alert(message);
} */

  constructor(){
    super();
    //constructor is the only palce where you can define this.state
    //anywhere else you have to use set.state
    this.state = {
      subscribersListToShow: []
    }
    console.log("Constructor Called")                  
  }

  componentDidMount() {
    console.log("Component Did Mount Called")
    let newSubscriber = 
      {
        id: 1,
        name: "Shilpa Bhat",
        phone: "8888888888"
      }
    
    let subscribersList = this.state.subscribersListToShow;
    subscribersList.push(newSubscriber);
    this.setState({subscribersListToShow: subscribersList});
    console.log("Compoenent Did Mount");
    console.log(this.state);
  }
  render() {
    console.log("Render Called")
    /* let subscribers = [
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
    ] */
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
            this.state.subscribersListToShow.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className = "grid-item">{sub.name}</span>
                <span className = "grid-item">{sub.phone}</span>
                <span className= "grid-item action action-btn-container">
                  <button className= "custom-btn delete-btn" /* onClick={this.clickHandler.bind(this, "Delete Handler Clicked")} */>Delete</button>
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
