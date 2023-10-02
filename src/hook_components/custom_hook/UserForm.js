import React, { useState } from 'react'
import useInput from '../../hooks/useInput'

function UserForm() {

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label> Firstname</label>
        <input text="text" {...bindFirstName}></input>
        <label> Lastname</label>
        <input text="text" {...bindLastName}></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UserForm
