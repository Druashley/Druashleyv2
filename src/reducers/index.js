import { combineReducers } from "redux";
import journalReducer from "./journalReducer";

const rootReducer = combineReducers({
  posts: journalReducer,
});

export default rootReducer;
