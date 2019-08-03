import {
    SELECT_MAIN,
    SELECT_ENROLL,
    SELECT_ADDRESSES
} from '../types/StudentsTypes';

function selectMain(){
    return {
        type: SELECT_MAIN,
        payload :{
            selectedAction: 'main',
            selectedActionName: 'Main'
        }
    }
}

function selectEnroll() {
    return {
        type: SELECT_ENROLL,
        payload: {
            selectedAction: 'enroll',
            selectedActionName: 'Enroll'
        }
    }
}
function selectAddresses(){
    return {
        type: SELECT_ADDRESSES,
        payload: {
            selectedAction: 'addresses',
            selectedActionName: 'Addresses'
        }
    }
}

export function selectAction(newValue, props){
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

