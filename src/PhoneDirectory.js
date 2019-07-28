import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscribersList: [{
                id: 1,
                name: 'Shilpa Bhat',
                phone: '8888888888'
            },
            {
                id: 2,
                name: 'Shristi Gupta',
                phone: '999999999'
            }]
        }
    }

    deleteSubscriberHandler = (subscriberId) => {
        let subscribersList = this.state.subscribersList;
        let subscriberIndex = 0;
        subscribersList.forEach(function(suscriber, index) {
            if(subscriberId == subscriberId){
                subscriberIndex = index;
            }
        },this)
        let newSubscribers = subscribersList;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState({subscribersList: subscribersList});
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList
        if (subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        }
        else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({ subscribersList: subscribersList });
        //console.log("Phone Directory");
        //console.log(this.state.subscribersList);
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' render={(props) => <ShowSubscribers {...props} subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler}/>} />
                    <Route exact path='/add' render={({history},props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} />
                </div>
            </Router>
            //<AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />
            //<ShowSubscribers subscribersList={this.state.subscribersList}></ShowSubscribers>
        )
    }
}

export default PhoneDirectory;