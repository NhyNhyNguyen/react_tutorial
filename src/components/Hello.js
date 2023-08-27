import React from "react";

const Hello = () => {
    //
    // return (
    //     <div className='dummyClass'>
    //         <h1> Hello JXS</h1>
    //     </div>

    // )

    //element tag, props, value
    return React.createElement(
        'div', {id: 'hello', className: 'dummyClass'}, React.createElement('h1', null, 'Hello Nhi')
    )
}

export default Hello