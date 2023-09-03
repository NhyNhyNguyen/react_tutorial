import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  
  render() {
    console.log("********************Pure comp render*************8")

    return (
      <div>
        Pure component {this.props.name}
      </div>
    )
  }
}

export default PureComp
