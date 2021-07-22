import React, { Component } from 'react'

export class  SearchUser extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             search:"Renée Beach "
        }
    }
    handelform =(e)=>
    { //console.log(e.target.value)
      this.setState(
          {
               search:e.target.value
            
          }
      )

    
    }
    SearchUser=(e)=>
    {   e.preventDefault();
        this.props.getUserSearch(this.state.search)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.SearchUser}>
                 <div className ="form-group ">
                   <input value={this.state.search}  onChange={this.handelform}  type="text" name="" id="search" className ="form-control " placeholder="search users...." />
                 </div>
                
                 <div class="d-grid gap-2">
                     <input type="button" onClick={this.SearchUser} className="btn btn-danger btn-block mt-2"  value="go"/>
                </div>
                </form>
            </div>
        )
    }
}

export default SearchUser
