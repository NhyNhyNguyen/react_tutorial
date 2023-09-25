import React, { useEffect, useState } from 'react'
import axios from 'axios'
function DataFetchingOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then(res => {
                setLoading(false)
                setPost(res.data)
                setError('')
            })
            .catch(err => {
                setLoading(false)
                setPost({})
                setError("Something went wrong")
            })
    }, [])
    return (
        <div>
            {loading ? 'Loading' : post.title}
        </div>
    )
}

export default DataFetchingOne
