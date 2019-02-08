import { combineReducers } from 'redux';
import operator from './operator.js';

const reducers = combineReducers({
    operator: operator,
});

export default  reducers;