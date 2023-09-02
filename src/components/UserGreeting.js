import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcome Nhi
        //         </div>
        //     )
        // } else {
        //     return (
        //             <div>
        //                 Welcome Guess
        //             </div>
        //     )
        // }

        // let message
        // if(this.state.isLoggedIn){
        //     message=<div> Welcome Nhi</div>
        // } else{
        //     message=<div> Welcome Guess</div>
        // }
        // return (
        //     <div>{message}</div>
        // )

        // let message
        // if(this.state.isLoggedIn){
        //     message=<div> Welcome Nhi</div>
        // } else{
        //     message=<div> Welcome Guess</div>
        // }
        // return (
        //     this.state.isLoggedIn ? (<div> Welcome Nhi</div>) : (<div> Welcome Guess</div>)
        // )
        return this.state.isLoggedIn && <div> Welcome Nhi</div>
    }
}

export default UserGreeting
