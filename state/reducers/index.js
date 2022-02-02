import { combineReducers } from 'redux';
import {usersReducers} from "./usersReducer";
import {roleReducer} from "./roleReducer";
import {servicemenReducers} from "./servicemenReducer";
import {jobReducer} from "./jobReducer";
import {categoryReducer} from "./categoryReducer";
import {clientReducers} from "./clientReducer";
import {skillReducers} from "./skillReducer";


const rootReducer = combineReducers({
  usersState: usersReducers,
  clientState: clientReducers,
  roleState: roleReducer,
  servicemenState: servicemenReducers,
  jobState: jobReducer,
  categoryState: categoryReducer,
  skillState: skillReducers
});

export default rootReducer;
