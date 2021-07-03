

export const authReducer = (auth = {
    isLoggedIn: '',
    user : {}
}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...auth, isLoggedIn: action.payload }
        case 'SET_AUTH_REDUCER' : 
            return {...auth,...action.payload}
        default :
            return {...auth}
    }
}
