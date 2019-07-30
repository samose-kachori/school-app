import {
    ADD_ADDRESS,
    EDIT_ADDRESS,
    OPEN_ADDRESS_FORM
} from '../types/AddressTypes';

const initialState = {
    addressType: null,
    addressLine1: null,
    addressLine2: null,
    city: null,
    state: null,
    country: null, 
    zip: null,
    open: false
}

export default function AddressReducer (state = initialState, action){
    switch(action.type)
    {
        case OPEN_ADDRESS_FORM:
            return {
                ...state, 
                open: true
            };
        case EDIT_ADDRESS:
            return {
                ...state,
                open: action.payload.open,
                addressLine1: action.payload.addressLine1,
                addressLine2: action.payload.addressLine2,
                city: action.payload.city,
                state: action.payload.state,
                country: action.payload.country,
                zip: action.payload.zip
            }
        case ADD_ADDRESS:
            return {
                ...state,
                open: action.payload.open,
                addressLine1: action.payload.addressLine1,
                addressLine2: action.payload.addressLine2,
                city: action.payload.city,
                state: action.payload.state,
                country: action.payload.country,
                zip: action.payload.zip
            }
        default:
            return state;
    }
}

