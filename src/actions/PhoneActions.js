import {
    ADD_PHONE,
    OPEN_PHONE_FORM,
    EDIT_PHONE,
    CLOSE_PHONE_FORM
} from '../types/PhoneTypes.js';

export const openPhoneForm = () => {
    return {
        type: OPEN_PHONE_FORM,
        payload: {
            open:true
        }
    }
}

export const closePhoneForm = () => {
    return {
        type: CLOSE_PHONE_FORM,
        payload: {
            open:false
        }
    }
}

export const addPhone = (phoneType, 
    phone) => {
    return {
        type: ADD_PHONE,
        payload: {
            phoneType,
            phone,
            open: false 
        }
    }
}

export const editPhone = (phoneType, 
    phone) => {
    return {
        type: EDIT_PHONE,
        payload: {
            phoneType,
            phone,
            open: true 
        }
    }
}