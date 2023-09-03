import React from 'react'

function Column() {
    const items = [{
        id: 1,
        title: "Java"
    }]
  return (
    <>
        {
            items.map( item => (
            <React.Fragment key={item.id}>
                <h1>Title</h1>
                <p>{item.title}</p>
            </React.Fragment>
            ))
        }
      <td>Name</td>
      <td>Nhi</td>
    </>
  )
}

export default Column
