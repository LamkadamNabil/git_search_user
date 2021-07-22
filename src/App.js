import logo from './logo.svg';
import './App.css';
import Users from './component/users/Users'
import Navbar from './component/layaout/Navbar'
import {BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import UserItem from './component/users/UserItem';
function App() {
  return (
    <Router>
    <div className="App">
       <Navbar/>
      {/*<div className="container mt-2">
       <Users/> 
      </div>*/}
      <div className="container mt-2">
            <Switch>
              <Route exact path="/users" component={Users}/>
              <Route exact path="/users/:login" component={UserItem}/>
              <Route exact  component={Users}/>
            </Switch>
      </div>
 </div>
 </Router>
  );
}

export default App;
