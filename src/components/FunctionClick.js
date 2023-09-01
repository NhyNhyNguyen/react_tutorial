import React from 'react'

 const FunctionClick = () => {

    function clickHandle(){
        console.log("Button click");
    }
  return (
    <div>
      <button onClick={clickHandle}>Click</button>
    </div>
  )
}

export default FunctionClick
