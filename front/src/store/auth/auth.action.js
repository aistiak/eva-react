import axios from "axios"
import { useDispatch } from "react-redux"


export const login = ({email,password}) => async (dispatch) => {
    console.log(`logging in`)
    console.log({email,password})
    const res = await axios.post(`login`,{email,password}) 
    if(res?.data?.statusCode == 200)
    await dispatch({ 
        type : 'SET_AUTH_REDUCER' ,
        payload : { isLoggedIn :true ,user : {...res.data.user,password:password} }
    }) 
    return res?.data 
}

export const logOut = () => async (dispatch) => {



    await dispatch({ 
        type : 'SET_AUTH_REDUCER' ,
        payload : { isLoggedIn :false,user:{}}
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


export const updateProfile = ({name,dob,profession}) => async (dispatch,useState) => {
    console.log(`updating profile`)
    const user = useState().authReducer.user 
    const res = await axios.post("update",{
        name,
        dob ,
        profession ,
        email : user.email ,
        password : user.password 
    })

    console.log(res)

    return res?.data 
}

export const deleteProfile = () => async (dispatch,useState) => {
    const user = useState().authReducer.user 
    const res = await axios.post("delete",{
        ...user 
    }) 

    console.log(res) 
    await dispatch({ 
        type : 'SET_AUTH_REDUCER' ,
        payload : { isLoggedIn :false,user:{}}
    }) 
    return res?.data 
}