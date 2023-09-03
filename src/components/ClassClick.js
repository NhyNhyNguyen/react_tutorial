import React, { Component } from 'react'

export class ClassClick extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }

      console.log("Init constructor")
    }
    
    clickHandle(){
        console.log("Click me");
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandle}>Click me</button>
      </div>
    )
  }
}

export default ClassClick
