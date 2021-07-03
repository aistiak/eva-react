

const authReducer = (auth = {
    isLoggedIn: false
}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...auth, isLoggedIn: action.paylod }
    }
}