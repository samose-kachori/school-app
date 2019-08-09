import {
    ADD_PHONE,
    EDIT_PHONE,
    OPEN_PHONE_FORM,
    CLOSE_PHONE_FORM
} from '../types/PhoneTypes';

const initialState = {
    open: false,
    data: []
}

export default function PhoneReducer (state = initialState, action){
    switch(action.type)
    {
        case OPEN_PHONE_FORM:
            return {
                ...state, 
                open: true
            };
        case CLOSE_PHONE_FORM:
            return {
                ...state, 
                open: false
            };
        case EDIT_PHONE:
            return {
                ...state,
                open: action.payload.open,
                phoneType: action.payload.phoneType,
                phone: action.payload.phone
            }
        case ADD_PHONE:
            return {
                ...state,
                open: action.payload.open,
                data: [
                    ...state.data,
                    {
                        phoneType: action.payload.phoneType,
                        phone: action.payload.phone
                    }
                ]
            }
        default:
            return state;
    }
}

