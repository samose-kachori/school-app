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

export const selectDashboard = () => {
    return {
        type: SELECT_DASHBOARD,
        payload:{
            show:'dashboard',
            drawerTitle:'Dashboard'
        }
    }
}

export const selectStudents = () => {
    return {
        type: SELECT_STUDENTS,
        payload:{
            show:'students',
            drawerTitle:'Students'
        }
    }
}

export const selectTeachers = () => {
    return {
        type: SELECT_TEACHERS,
        payload:{
            show:'teachers',
            drawerTitle:'Teachers'
        }
    }
}

export const selectClasses = () => {
    return {
        type: SELECT_CLASSES,
        payload:{
            show:'classes',
            drawerTitle:'Classes'
        }
    }
}

export const selectLibrary = () => {
    return {
        type: SELECT_LIBRARY,
        payload:{
            show:'library',
            drawerTitle:'Library'
        }
    }
}

export const selectTransport = () => {
    return {
        type: SELECT_TRANSPORT,
        payload:{
            show:'transport',
            drawerTitle:'Transport'
        }
    }
}

export const selectCafeteria = () => {
    return {
        type: SELECT_CAFETERIA,
        payload:{
            show:'cafeteria',
            drawerTitle:'Cafeteria'
        }
    }
}

export const selectReports = () => {
    return {
        type: SELECT_REPORTS,
        payload:{
            show:'reports',
            drawerTitle:'Reports'
        }
    }
}

export const drawerOpen = () => {
    return {
        type: DRAWER_OPEN,
        payload: {
            open: true
        }
    }
}

export const drawerClose = () => {
    return {
        type: DRAWER_CLOSE,
        payload: {
            open: false
        }
    }
}