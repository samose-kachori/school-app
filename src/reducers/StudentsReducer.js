import {
    SELECT_MAIN,
    SELECT_ENROLL,
    SELECT_ADDRESSES,
    SELECT_CONTACTS
} from '../types/StudentsTypes';

const initialState = {
    selectedAction: 'main',
    selectedActionName: 'Main'
}

export default function StudentsReducer (state = initialState, action){
    console.log(action.type);
    switch (action.type) {
        case SELECT_MAIN:
            return {
                ...state,
                selectedAction: action.payload.selectedAction,
                selectedActionName: action.payload.selectedActionName
            };
        case SELECT_ENROLL:
            console.log("******************");
            return {
                ...state,
                selectedAction: action.payload.selectedAction,
                selectedActionName: action.payload.selectedActionName
            };
        case SELECT_ADDRESSES:
            return {
                    ...state,
                    selectedAction: action.payload.selectedAction,
                    selectedActionName: action.payload.selectedActionName
            };
        case SELECT_CONTACTS:
            return {
                    ...state,
                    selectedAction: action.payload.selectedAction,
                    selectedActionName: action.payload.selectedActionName
            };
        default:
            return state;
    }
}