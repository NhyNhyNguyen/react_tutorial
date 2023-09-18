import React, { useEffect, useState } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        document.title = `Click ${count} times, name: ${name}`
        console.log("Update times")
    },[count])

    useEffect(() => {
        document.title = `Click ${count} times, name: ${name}`
        console.log("Update names")
    },[name])
    return (
        <div>
            <button onClick={() => { setCount(count + 1) }}>Click {count} times</button>
            <input onChange={(e) => setName(e.target.value)}></input>
        </div>
    )
}

export default HookCounterOne
