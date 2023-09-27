import React, { Component } from 'react'

class ClassTimer extends Component {
    inverval 
    constructor(props) {
      super(props)
    
      this.state = {
         timer: 0
      }
    }

    componentDidMount(){
        this.inverval = setInterval( ()=> {
            this.setState(prevState => ({timer: prevState.timer + 1}))
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
    
    render() {
        return (
            <div>
                This timer - {this.state.timer}
                <button onClick={()=> clearInterval(this.inverval)}>Clear timer</button>
            </div>
        )
    }
}

export default ClassTimer
