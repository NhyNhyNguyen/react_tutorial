import React, { Component } from 'react'
import Hello from './Hello'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: "Good bye"
    //     })
    // }

    //bind by user arrow function
    clickHandler = () => {
        this.setState({
            message: "Good bye"
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click</button>
                <button onClick={this.clickHandler.bind(this)}>Click</button>
                <button onClick={() => this.clickHandler()}>Click</button>
                <div> {this.state.message} </div>
            </div>
        )
    }
}

export default EventBind
