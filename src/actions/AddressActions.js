import {
    ADD_ADDRESS,
    OPEN_ADDRESS_FORM
} from '../types/AddressTypes';

export const openAddressForm = () => {
    return {
        type: OPEN_ADDRESS_FORM,
        payload: {
            open:true
        }
    }
}

export const addAddress = (addressType, 
    addressLine1,
    addressLine2,
    city,
    state, 
    country,
    zip) => {
    return {
        type: ADD_ADDRESS,
        payload: {
            addressType,
            addressLine1,
            addressLine2,
            city,
            state,
            country,
            zip,
            open: false 
        }
    }
}