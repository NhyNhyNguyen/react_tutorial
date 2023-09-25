import React, { useCallback, useState } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {
    const [age, setAge] = useState(10)
    const [salary, setSalary] = useState(10000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 5000)
    }, [salary])
    return (
        <div>
            <Title></Title>
            <Count count={age} text="Age: "></Count>
            <Button handleClick={incrementAge}>Increment Age</Button>

            <Count count={salary} text="Salary: "></Count>
            <Button handleClick={incrementSalary}>Increment Salary</Button>

        </div>
    )
}

export default ParentComponent
