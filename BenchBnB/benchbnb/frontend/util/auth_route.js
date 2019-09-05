import {Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

function AuthRoute({sessionId, path, component:Component, exact}){
  return sessionId ? (<Redirect path={path} />) : <Component />
  // <Route 
  //   path={path}
  //   render=
  // />
}

function mapStateToProps(state){
  return {
    sessionId: state.session.id
  }
}


export default connect()(AuthRoute)
