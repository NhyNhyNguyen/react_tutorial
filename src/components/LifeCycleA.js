import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Nhi"
        }
        console.log("LifeCycle A constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycle A getDerivedStateFromProps")
        return null
    }

    shouldComponentUpdate(){
        console.log("LifeCycle A shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycle A getSnapshotBeforeUpdate")
        return null
    }

    changeState = () => {
        this.setState({
            name: 'Nhi'
        })
    }

    render() {
        console.log("LifeCycle A render")
        return (
            <div>
                Life Cycle A
                <LifeCycleB></LifeCycleB>
                <button onClick={this.changeState}>Change state</button>
            </div>
        )
    }

    componentDidMount(){
        console.log("LifeCycle A componentDidMount")
    }

    componentDidUpdate(){
        console.log("LifeCycle B componentDidUpdate")
    }
}

export default LifeCycleA
