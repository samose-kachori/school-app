import {
    ADD_EMAIL,
    OPEN_EMAIL_FORM,
    EDIT_EMAIL
} from '../types/EmailTypes.js';

export const openEmailForm = () => {
    return {
        type: OPEN_EMAIL_FORM,
        payload: {
            open:true
        }
    }
}

export const addEmail = (emailType, 
    email) => {
    return {
        type: ADD_EMAIL,
        payload: {
            emailType,
            email,
            open: false 
        }
    }
}