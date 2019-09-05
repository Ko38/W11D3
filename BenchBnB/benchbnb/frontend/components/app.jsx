import React from 'react';
import GreetingContainer from './greeting_container'
import {login} from '../actions/session_actions'
import {Route, Switch} from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';


window.login = login

export default function(props){
  return(
    <div>
      <header>
        <h1>Bench BnB</h1>
        <GreetingContainer/>
        <Switch>
          <Route path="/login" component={LoginFormContainer} />
          <Route path="/signup" component={SignupFormContainer} />
        </Switch>
      </header>
    </div>
  )
}