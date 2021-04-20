import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const logout = () => {
    window.localStorage.removeItem('token');
  }

  return (
    <Router>
      <div className='App-container'>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link onClick={logout} to='/login'>Logout</Link>
          </li>
          <li>
            <Link to='/friendslist'>Friends List</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path='/friendslist' component={FriendsList} />
          <Route path='/login' component={Login} />
          <Route render={(props) => <Login {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
