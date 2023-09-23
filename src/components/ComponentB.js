import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './UserContext'

class ComponentB extends Component {
  static contextType = UserContext
  render() {
    return (
      <div>
        Conponent B context: {this.context}
        <ComponentC></ComponentC>
      </div>
    )
  }
}


export default ComponentB
