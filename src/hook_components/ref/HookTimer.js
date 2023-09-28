import React, { useEffect, useRef, useState } from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0)
    const [interval, setIntervalState] = useState(null)
    const intervalRef = useRef()
    useEffect(()=>{
        console.log("Set interval")

        setIntervalState(setInterval(()=>{
            setTimer(prevTimer => prevTimer + 1)
        }, 1000))
        return () => {
            clearInterval(interval)
        }
    }, [])
  return (
    <div>
      This timer - {timer}
      <button onClick={()=> clearInterval(interval)}>Clear timer</button>
    </div>
  )
}

export default HookTimer
