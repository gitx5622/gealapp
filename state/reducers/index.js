import { combineReducers } from 'redux';
import {usersReducers} from "./usersReducer";
import {roleReducer} from "./roleReducer";


const rootReducer = combineReducers({
  usersState: usersReducers,
  roleState: roleReducer,
});

export default rootReducer;
