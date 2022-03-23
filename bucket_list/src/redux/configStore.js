import {createStore,combineReducers} from "redux"
import bucket from "./modules/bucket";

const rootreducer = combineReducers({bucket});

const store = createStore(rootreducer);

export default store;