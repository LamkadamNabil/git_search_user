import React, { Component } from 'react'
import User from './User'
import SearchUser from './SearchUser'
import axios from 'axios'
class Users extends Component {
    constructor(props) {
        super(props)

    this.state = {
         users:[
                      ]
    }
}
componentDidMount()
{
    axios.get('https://api.github.com/users')
    .then(response =>{
        this.setState
        (
            {
                users:response.data
            }
        )
       // console.log(response.data);
    })
}
getUsers =()=>
{
    ///
}

searchUser = (data ) => {

     if(data!=='')
     {
          axios.get(`https://api.github.com/search/users?q=${data}`).then
          (response =>{
            this.setState
            (
                {
                    users:response.data.items
                }
            )
          })
     }
}

       render() {
        return (
            <div>
                <div className="row my-2">
                    <div className="col-md-12">
                          <SearchUser getUserSearch={this.searchUser}/>
                    </div>
                </div>
                <div className="row">
                {this.state.users.map((user) => (
                    <div className="col-md-4" key={user.id}>
                          <User user={user} />
                    </div>
                ) 
                )
                }
                </div>
            </div>
        )
    }
    }


export default Users
