

export const authReducer = (auth = {
    isLoggedIn: '',
}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...auth, isLoggedIn: action.paylod }
        case 'SET_AUTH_REDUCER' : 
            return {...auth,...action.paylod}
        default :
            return {...auth}
    }
}
