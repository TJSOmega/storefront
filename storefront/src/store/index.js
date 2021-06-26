import { createStore,combineReducers } from "redux"; 
import {composeWithDevTools} from 'redux-devtools-extension'

import categories from './categories.js'


const reducers = combineReducers({categories})


const store = () => {
  return createStore(reducers, composeWithDevTools)
}

export default store();