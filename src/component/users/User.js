import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class User extends Component {
    render() {
        const {login,avatar_url,repos_url}=this.props.user;
        return (
            <div>
                 <div className="card">
                              <img className="card-img-top" src={avatar_url}/>
                               <div className="card-body m-auto">
                                    <h4 className="card-title text-center">{login}</h4>
                                    <p className="card-text ">
                                        <Link to={'/users/'+login} className="btn btn-success m-1">show more</Link>
                                        <a href={repos_url} className="btn btn-warning m-1">Repositories</a>
                                    </p>
                               </div>
                          </div>
            </div>
        )
    }
}

export default User
