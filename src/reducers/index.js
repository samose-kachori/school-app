import { combineReducers } from 'redux';
import DrawerReducer from './DrawerReducer';
import StudentsReducer from './StudentsReducer';

const rootReducer = combineReducers({
    DrawerReducer,
    StudentsReducer
});

export default rootReducer;

