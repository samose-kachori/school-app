import {
    ADD_ADDRESS,
    OPEN_ADDRESS_FORM,
    CLOSE_ADDRESS_FORM,
    EDIT_ADDRESS
} from '../types/AddressTypes';

export const openAddressForm = () => {
    return {
        type: OPEN_ADDRESS_FORM,
        payload: {
            open:true
        }
    }
}

export const closeAddressForm = () => {
    return {
        type: CLOSE_ADDRESS_FORM,
        payload: {
            open: false
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

export const editAddress = (addressType, 
    addressLine1,
    addressLine2,
    city,
    state, 
    country,
    zip) => {
    return {
        type: EDIT_ADDRESS,
        payload: {
            addressType,
            addressLine1,
            addressLine2,
            city,
            state,
            country,
            zip,
            open: true 
        }
    }
}