import React, { Component } from "react";

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: "Welcome State"
        }
    }

    changeMessage(){
        this.setState({
            message: "Change state"
        })
    }

    render(){
        return ( 
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={ () => this.changeMessage()}>Subscribe</button>
            </div>)
    }
}

export default Message
