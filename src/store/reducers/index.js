import { combineReducers } from 'redux';
import operator from './operator.js';

//combineReducers get a object Json with another reducers as values.
const reducers = combineReducers({
    operator: operator,
});

export default  reducers;