import {
    SELECT_MAIN,
    SELECT_ENROLL,
    SELECT_ADDRESSES,
    SELECT_CONTACTS
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

function selectContacts(){
    return {
        type: SELECT_CONTACTS,
        payload: {
            selectedAction: 'contacts',
            selectedActionName: 'Contacts'
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
        case "contacts": 
            return dispatch(selectContacts());
        default:
            return dispatch(selectMain())
    }
}

