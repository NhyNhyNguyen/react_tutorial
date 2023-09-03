import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "nhi"
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "nhi nhi"
            })
        }, 2000)
    }
  render() {
    console.log("********************Parent comp render*************8")
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name}></MemoComp>
      </div>
      
    )
  }
}

export default ParentComp
