import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comment: '',
            topic: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        const {username, comment, topic} = th
        return (
            <div>
                Form Component
                <form  onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input
                        type='text'
                        value={username}
                        onChange={this.handleUsernameChange} ></input>
                    <div>
                        <label>Comment</label>
                        <textarea value={comments}
                            onChange={this.handleCommentChange}></textarea>
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={topic} onChange={this.handleTopicChange}>
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                            <option value="Vue">Vue</option>
                        </select>
                    </div>
                    <button>Button</button>
                </form>
            </div>
        )
    }
}

export default Form
