import {
    ADD_EMAIL,
    OPEN_EMAIL_FORM,
    EDIT_EMAIL,
    CLOSE_EMAIL_FORM
} from '../types/EmailTypes.js';

export const openEmailForm = () => {
    return {
        type: OPEN_EMAIL_FORM,
        payload: {
            open:true
        }
    }
}

export const closeEmailForm = () => {
    return {
        type: CLOSE_EMAIL_FORM,
        payload: {
            open:false
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

export const editEmail = (emailType, 
    email) => {
    return {
        type: EDIT_EMAIL,
        payload: {
            emailType,
            email,
            open: true 
        }
    }
}