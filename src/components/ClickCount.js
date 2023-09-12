import React, { Component } from 'react'
import WithCounter from './WithCounter'

export class ClickCount extends Component {
 
    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount}> {this.props.name} click {count} times </button>
            </div>
        )
    }
}

export default WithCounter(ClickCount, 5)
