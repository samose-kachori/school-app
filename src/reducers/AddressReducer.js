import {
    ADD_ADDRESS,
    EDIT_ADDRESS,
    OPEN_ADDRESS_FORM,
    CLOSE_ADDRESS_FORM
} from '../types/AddressTypes';

const initialState = {
    open: false,
    data: []
}

export default function AddressReducer (state = initialState, action){
    switch(action.type)
    {
        case OPEN_ADDRESS_FORM:
            return {
                ...state, 
                open: true
            };
        case CLOSE_ADDRESS_FORM:
            return {
                ...state, 
                open: false
            };
        case EDIT_ADDRESS:
            return {
                ...state,
                open: action.payload.open,
                addressType: action.payload.addressType,
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
                data: [
                    ...state.data,
                    {
                        addressType: action.payload.addressType,
                        addressLine1: action.payload.addressLine1,
                        addressLine2: action.payload.addressLine2,
                        city: action.payload.city,
                        state: action.payload.state,
                        country: action.payload.country,
                        zip: action.payload.zip,
                    }
                ]
            }
        default:
            return state;
    }
}

