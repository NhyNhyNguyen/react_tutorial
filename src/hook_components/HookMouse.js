import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('Move event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("useEffect call")
        window.addEventListener('mousemove', logMousePosition)
        return () => {
            console.log("unmounted listener")
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
    return (
        <div>
            Hook X {x}, Y {y}
        </div>
    )
}

export default HookMouse
