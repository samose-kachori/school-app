import {
    SELECT_MAIN_TAB,
    SELECT_ENROLL_TAB
} from '../types/StudentsTypes';

const selectMainTab = () => {
    return {
        type: SELECT_MAIN_TAB,
        payload :{
            selectedTabId: 0,
            selectedTabName: 'Main'
        }
    }
}

const selectEnrollTab = () => {
    return {
        type: SELECT_ENROLL_TAB,
        payload: {
            selectedTabId: 1,
            selectedTabName: 'Enroll'
        }
    }
}

export const selectTab = (newValue, props) => {
    console.log(newValue);
    const {dispatch} = props;  
    switch (newValue){
        case 0: 
            return dispatch(selectMainTab());
        case 1: 
            return dispatch(selectEnrollTab());
        default:
            return dispatch(selectMainTab())
    }
}

