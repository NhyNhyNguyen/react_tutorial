import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super()
        
         this.state = {
            count: 0
         }
    }

    increment(){
        // // this.state.count = this.state.count + 1
        // // console.log(this.state.count)
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)

       
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
               <div> Count - {this.state.count}</div>
               <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter

