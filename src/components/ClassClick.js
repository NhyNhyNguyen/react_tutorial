import React, { Component } from 'react'

export class ClassClick extends Component {
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
