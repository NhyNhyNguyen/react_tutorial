import React, { useEffect, useState } from 'react'

function HookInterval() {
    const [count, setCount] = useState(0)
    const tick = () => {
        setCount(pre => pre + 1)
        console.log("count" +  count)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div>
            Number count: {count}
        </div>
    )
}

export default HookInterval
