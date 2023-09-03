import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Nhi"
        }
        console.log("LifeCycle B constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycle B getDerivedStateFromProps")
        return null
    }

    shouldComponentUpdate(){
        console.log("LifeCycle B shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycle B getSnapshotBeforeUpdate")
        return null
    }

    render() {
        console.log("LifeCycle B render")
        return (
            <div>
                Life Cycle B
            </div>
        )
    }

    componentDidMount(){
        console.log("LifeCycle B componentDidMount")
    }

    componentDidUpdate(){
        console.log("LifeCycle B componentDidUpdate")
    }
}

export default LifeCycleB
