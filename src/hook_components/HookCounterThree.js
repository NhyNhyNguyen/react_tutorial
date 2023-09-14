import React, { useState } from 'react'

function HookCounterThree() {
    const  [name, setName] = useState({firstname: '', lastName:''})
    return (
        <div>
            <form>
            <input type="text" value={name.firstname} onChange={e => setName({...name, firstname: e.target.value})}></input>
            <input type="text" value={name.lastname} onChange={e => setName({...name, lastname: e.target.value})}></input>
            <h2>First name {name.firstname}</h2>
            <h2>Last name {name.lastname}</h2>
            <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default HookCounterThree
