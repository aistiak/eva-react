



export const login = ({email,password}) => async () => {
    console.log(`logging in`)
    console.log({email,password})
    return {
        statusCode : 200 ,
        msg : "logged in" ,
        data : {}
    }
}