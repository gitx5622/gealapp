import { combineReducers } from 'redux';
import {usersReducers} from "./usersReducer";
import {roleReducer} from "./roleReducer";
import {servicemenReducers} from "./servicemenReducer";
import {jobReducer} from "./jobReducer";


const rootReducer = combineReducers({
  usersState: usersReducers,
  roleState: roleReducer,
  servicemenState: servicemenReducers,
  jobState: jobReducer,
});

export default rootReducer;
