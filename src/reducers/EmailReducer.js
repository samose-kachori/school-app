import {
    ADD_EMAIL,
    EDIT_EMAIL,
    OPEN_EMAIL_FORM,
    CLOSE_EMAIL_FORM
} from '../types/EmailTypes';

const initialState = {
    open: false,
    data: []
}

export default function EmailReducer (state = initialState, action){
    switch(action.type)
    {
        case OPEN_EMAIL_FORM:
            return {
                ...state, 
                open: true
            };
        case CLOSE_EMAIL_FORM:
            return {
                ...state, 
                open: false
            };
        case EDIT_EMAIL:
            return {
                ...state,
                open: action.payload.open,
                emailType: action.payload.emailType,
                email: action.payload.email
            }
        case ADD_EMAIL:
            return {
                ...state,
                open: action.payload.open,
                data: [
                    ...state.data,
                    {
                        emailType: action.payload.emailType,
                        email: action.payload.email
                    }
                ]
            }
        default:
            return state;
    }
}

