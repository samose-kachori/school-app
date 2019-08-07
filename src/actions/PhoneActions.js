import {
    ADD_PHONE,
    OPEN_PHONE_FORM,
    EDIT_PHONE
} from '../types/PhoneTypes.js';

export const openPhoneForm = () => {
    return {
        type: OPEN_PHONE_FORM,
        payload: {
            open:true
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