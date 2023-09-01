import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={ () => props.greetHandle('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
