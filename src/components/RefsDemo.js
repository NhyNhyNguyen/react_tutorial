import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCBRef = element => {
            this.cbRef = element
        }
        this.state = {

        }
    }

    componentDidMount() {
        if(this.cbRef){
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }



    clickHandler = () =>{
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
                <input type="text" ref={this.setCBRef}></input>
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default RefsDemo
