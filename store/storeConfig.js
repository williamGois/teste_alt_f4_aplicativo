import { combineReducers } from 'redux';
import AuthReducer from './reducers/produto';

const Reducers = combineReducers({
    produto: AuthReducer
});

export default Reducers;