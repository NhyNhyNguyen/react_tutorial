import React, { Component } from 'react'

class HeroBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }
    
    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }
    
    componentDidCatch(error, info){
        console.log("Error:" + JSON.stringify(error) + " " + JSON.stringify(info))
    }
    render() {
        if(this.state.hasError){
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }
}

export default HeroBoundary
