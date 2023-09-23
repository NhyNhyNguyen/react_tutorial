import axios from 'axios'
import React, { Component } from 'react'

class PostList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }



    componentDidMount() {
        axios.post("https://jsonplaceholder.typicode.com/posts/", { userId: 1000, title: "aaa", body: "111" })
            .then(res => {
                console.log("data" + JSON.stringify(res.data))
            }).catch(error => {
                console.log(error)
            })

        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then(res => {
                console.log("Get data" + JSON.stringify(res.data))
            }).catch(error => {
                console.log(error)
            })


    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default PostList
