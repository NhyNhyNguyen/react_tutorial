import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetching() {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

 
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                setPosts(res.data)
                console.log("res" + posts)
            })
            .catch(err => {
                console.log("error" + err)
            })
    }, [idFromButtonClick])
    return (
        <div>
            <input type="text" value={id} onChange={(e) => {setId(e.target.value)}}></input>
            <h2>{posts.title}</h2>
            <button onClick={() => {setIdFromButtonClick(id)}}>Click to fetch</button>
        </div>
    )
}

export default DataFetching
