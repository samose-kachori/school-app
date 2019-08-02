import {
    SELECT_MAIN,
    SELECT_ENROLL,
    SELECT_ADDRESSES
} from '../types/StudentsTypes';

const selectMain = () => {
    return {
        type: SELECT_MAIN,
        payload :{
            selectedAction: 'main',
            selectedActionName: 'Main'
        }
    }
}

const selectEnroll = () => {
    return {
        type: SELECT_ENROLL,
        payload: {
            selectedAction: 'enroll',
            selectedActionName: 'Enroll'
        }
    }
}
const selectAddresses = () => {
    return {
        type: SELECT_ADDRESSES,
        payload: {
            selectedAction: 'addresses',
            selectedActionName: 'Addresses'
        }
    }
}

export const selectAction = (newValue, props) => {
    console.log(newValue);
    const {dispatch} = props;  
    switch (newValue){
        case "main": 
            return dispatch(selectMain());
        case "enroll": 
            return dispatch(selectEnroll());
        case "addresses": 
            return dispatch(selectAddresses());
        default:
            return dispatch(selectMain())
    }
}

