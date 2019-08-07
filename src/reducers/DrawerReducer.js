import {
    SELECT_DASHBOARD,
    SELECT_STUDENTS,
    SELECT_CLASSES,
    SELECT_TEACHERS,
    SELECT_REPORTS,
    SELECT_TRANSPORT,
    SELECT_CAFETERIA,
    SELECT_LIBRARY,
    DRAWER_OPEN,
    DRAWER_CLOSE
} from '../types/DrawerTypes';

const initialState = {
    show:'dashboard',
    drawerTitle: 'Dashboard',
    open: true
}

export default function DrawerReducer(state=initialState, action) {
    switch(action.type)
    {
        case DRAWER_OPEN:
            return {
                ...state,
                open: action.payload.open
            };
        case DRAWER_CLOSE:
            return {
                ...state,
                open: action.payload.open
            };
        case SELECT_DASHBOARD:
            return {
                ...state,
                show: action.payload.show,
                drawerTitle: action.payload.drawerTitle
            };
        
        case SELECT_STUDENTS:
            return {
                ...state,
                show:action.payload.show,
                drawerTitle: action.payload.drawerTitle
            };
        case SELECT_CLASSES:
            return {
                ...state,
                show:action.payload.show,
                drawerTitle: action.payload.drawerTitle
            };
        case SELECT_TEACHERS:
            return {
                ...state,
                show:action.payload.show,
                drawerTitle: action.payload.drawerTitle
            };
        case SELECT_CAFETERIA:
            return {
                ...state,
                show:action.payload.show,
                drawerTitle: action.payload.drawerTitle
            };
        case SELECT_LIBRARY:
            return {
                ...state,
                show:action.payload.show,
                drawerTitle: action.payload.drawerTitle
            };
        case SELECT_TRANSPORT:
            return {
                ...state,
                show:action.payload.show,
                drawerTitle: action.payload.drawerTitle
            };
        case SELECT_REPORTS:
            return {
                ...state,
                show:action.payload.show,
                drawerTitle: action.payload.drawerTitle
            };
        default:
            return state;
    };
}
