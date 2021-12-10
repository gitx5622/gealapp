import { combineReducers } from 'redux';
import {usersReducers} from "./usersReducer";
import {roleReducer} from "./roleReducer";
import {servicemenReducers} from "./servicemenReducer";


const rootReducer = combineReducers({
  usersState: usersReducers,
  roleState: roleReducer,
  servicemenState: servicemenReducers,
});

export default rootReducer;
