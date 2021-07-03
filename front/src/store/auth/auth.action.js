import axios from "axios"
import { useDispatch } from "react-redux"


export const login = ({email,password}) => async (dispatch) => {
    console.log(`logging in`)
    console.log({email,password})
    const res = await axios.post(`login`,{email,password}) 
    await dispatch({ 
        type : 'SET_AUTH_REDUCER' ,
        payload : { isLoggedIn :true}
    }) 
    return res?.data 
}

export const logOut = () => async (dispatch) => {


    await dispatch({ 
        type : 'SET_AUTH_REDUCER' ,
        payload : { isLoggedIn :false}
    }) 
}

export const signUp = ({name,email,password,profession,dob}) => async (dispatch) => {
    console.log(`signin up`)
    const res = await axios.post('signup',{
        name ,
        password ,
        email ,
        profession ,
        dob 
    })
    return res?.data 
}


export const updateProfile = ({}) => async (dispatch) => {

}

export const deleteProfile = () => async (dispatch) => {

}