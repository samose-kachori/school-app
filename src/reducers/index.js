import { combineReducers } from 'redux';
import DrawerReducer from './DrawerReducer';
import StudentsReducer from './StudentsReducer';
import AddressReducer from './AddressReducer';

const rootReducer = combineReducers({
    DrawerReducer,
    StudentsReducer,
    AddressReducer
});

export default rootReducer;

