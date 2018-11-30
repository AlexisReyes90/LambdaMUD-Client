import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import login from './components/login';
import register from './components/register';
import Dan from './Dan.jpg';
import './App.css';

/* 

heroku links for use later:
https://lambda-mud-alexis-app.herokuapp.com/api/registration/
https://lambda-mud-alexis-app.herokuapp.com/api/login
https://lambda-mud-alexis-app.herokuapp.com/api/adv/say/
https://lambda-mud-alexis-app.herokuapp.com/api/adv/init/

*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Dan} className="App-logo" alt="Dan" />
          <p>
            Lambda-MUD-Frontend Home Page
          </p>
          <p>
          Sponsored by Dan
          </p>
          <p>
          <Link to='/login' ><button className='log-button'>Login</button></Link>
          <Link to='/register' ><button className='reg-button'>Register</button></Link>
          </p>
          <Route  path='/login' component={login} />
          <Route  path='/register' component={register} />
        </header>
      </div>
    );
  }
}

export default App;
