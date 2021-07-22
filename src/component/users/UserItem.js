import axios from 'axios';
import React, { Component } from 'react'
import User from './User';
 

 class UserItem extends Component {
  
     state={
         user: {}
     }
     componentWillMount() {
         const login=this.props.match.params.login;
         axios.get(`https://api.github.com/users/${login}`)
         .then(res =>{
            this.setState
            (
                {
                    user:res.data
                }
            )
         })
     }
     
    render() {
        return (
             <div>
              <User user={this.state.user}/>
            </div>
        )
    }
}

export default UserItem
