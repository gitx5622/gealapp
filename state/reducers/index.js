import { combineReducers } from 'redux';
import {usersReducers} from "./usersReducer";
import {roleReducer} from "./roleReducer";
import {servicemenReducers} from "./servicemenReducer";
import {jobReducer} from "./jobReducer";
import {categoryReducer} from "./categoryReducer";


const rootReducer = combineReducers({
  usersState: usersReducers,
  roleState: roleReducer,
  servicemenState: servicemenReducers,
  jobState: jobReducer,
  categoryState: categoryReducer
});

export default rootReducer;
