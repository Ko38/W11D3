import { combineReducers } from 'redux'
import errorsReducer from './errors_reducer'
import sessionReducer from './session_reducer'
import entitiesReducer from './entities_reducer'

export default combineReducers(
  {
    session: sessionReducer,
    entities: entitiesReducer,
    errors: errorsReducer
  }
)