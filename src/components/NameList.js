import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Nhi', 'Ri', "Ri"]
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name} </h2>)
    const persons = [
        {
            id:1,
            name: "Nhi",
            age: 12,
            skill: "full stack"
        },
        {
            id: 2,
            name: "Hoang",
            age: 12,
            skill: "java"
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person = {person}></Person>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
