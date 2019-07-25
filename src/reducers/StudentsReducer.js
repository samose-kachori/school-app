import {
    SELECT_MAIN_TAB,
    SELECT_ENROLL_TAB
} from '../types/StudentsTypes';

const initialState = {
    selectedTabId: 0,
    selectedTabName: 'main'
}

export default function StudentsReducer (state = initialState, action){
    switch (action.type) {
        case SELECT_MAIN_TAB:
            return {
                ...state,
                selectedTabId: action.payload.selectedTabId,
                selectedTabName: action.payload.selectedTabName
            };
        case SELECT_ENROLL_TAB:
            return {
                ...state,
                selectedTabId: action.payload.selectedTabId,
                selectedTabName: action.payload.selectedTabName
            };
        default:
            return state;
    }
}