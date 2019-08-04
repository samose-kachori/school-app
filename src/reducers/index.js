import { combineReducers } from 'redux';
import DrawerReducer from './DrawerReducer';
import StudentsReducer from './StudentsReducer';
import AddressReducer from './AddressReducer';
import EmailReducer from './EmailReducer';
import PhoneReducer from './PhoneReducer';

const rootReducer = combineReducers({
    DrawerReducer,
    StudentsReducer,
    AddressReducer,
    PhoneReducer,
    EmailReducer
});

export default rootReducer;

