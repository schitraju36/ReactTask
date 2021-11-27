import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GetEmployeeById from './GetEmployeeById';
import CreateEmployee from './CreateEmployee';
import GetEmployee from './GetEmployee';
import Notfound from './Notfound';
import { Route, Link,NavLink, BrowserRouter as Router,Switch } from 'react-router-dom';

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/getCaterer">
          Get CatererDetails
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/getCatererById">
          Get CatererDetails ByID
          </NavLink>
        </li>
       
      </ul>
      <br />
      <br />
      <Switch>
        <Route exact path="/" component={CreateEmployee} />
        <Route path="/createEmployee" component={CreateEmployee} />
        <Route path="/getCatererById" component={GetEmployeeById} />
        <Route path="/getCaterer" component={GetEmployee} />      
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
