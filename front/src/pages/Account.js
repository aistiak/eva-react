import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import HeaderLoggedIn from '../partials/HeaderLoggedIn';
import { updateProfile ,deleteProfile} from '../store/auth/auth.action'
import {useForm} from "react-hook-form"

function SignIn() {
  const dispatch = useDispatch()
  const history = useHistory();
  const user = useSelector( state => state.authReducer.user)
  const isLoggedIn = useSelector( state => state.authReducer.isLoggedIn)
  const {register,handleSubmit } = useForm({
    defaultValues: user 
  })
 
  const [step,SetStep] = useState(0) 
  const [store,SetStore] = useState({
    email : '' ,
    password : ''
  })
  
  useEffect(() => {
    if(!isLoggedIn) history.push("/signin")
  },[isLoggedIn])

  const action = {
    async updateUser(data) {
        console.log(data)
        const res = await dispatch(updateProfile(data))
        console.log(res)
        if(res.statusCode == 200) SetStep(0)
    },
    async DeleteProfile() {
      let res = window.confirm('Are you sure to delete your profile ?') ;
      if(res) {
        dispatch(deleteProfile()).then( res => {
          console.log(res)
          if(res.statusCode == 200) {
            alert(`profile delete`)
            history.push("/")
          }
        })
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <HeaderLoggedIn />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1"> {`Welcome  ${user?.name?.split(' ')[0] }`} </h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                {step ==  0 && <>                
                    <form>
                    
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Name</label>
                        <input value={user?.name} id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" readOnly />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Profession</label>
                        <input value={user?.profession}  id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" readOnly />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Date Of Birth</label>
                        <input value={user?.dob}   id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" readOnly />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email</label>
                        <input value={user?.email}   id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" readOnly />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                        <div className="flex justify-between">
                            <label className="flex items-center">
                            {/* <input type="checkbox" className="form-checkbox" /> */}
                            {/* <span className="text-gray-600 ml-2">Keep me signed in</span> */}
                            </label>
                        </div>
                        </div>
                    </div>
                    <Link onClick={() => SetStep(1) } className="text-sm font-medium text-blue-600 hover:underline">Edit</Link>
                    {/* <div className="flex flex-wr    ap -mx-3 mt-6">
                        <div className="w-full px-3">
                        <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full" type="submit" onClick={action.SignIn}>Sign in</button>
                        </div>
                    </div> */}
                    </form>
                </>}
                {step ==  1 && <>                
                    <form onSubmit={handleSubmit(action.updateUser)}>
                    <div onClick={() => SetStep(0)} style={{cursor:'pointer'}}>
                       &#8592; back
                    </div>
                    <br/>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Name</label>
                        <input {...register("name")}  id="email" className="form-input w-full text-gray-800" placeholder="Enter your email address"  required />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Profession</label>
                        <input {...register("profession")} id="email"  className="form-input w-full text-gray-800" placeholder="Enter your email address"  required/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Date Of Birth</label>
                        <input  {...register("dob")} id="email" type="date" className="form-input w-full text-gray-800" placeholder="Enter your email address"  required/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email</label>
                        <input {...register("email")}  id="email"  className="form-input w-full text-gray-800" placeholder="Enter your email address" readOnly />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                        <div className="flex justify-between">
                            <label className="flex items-center">
                            {/* <input type="checkbox" className="form-checkbox" /> */}
                            {/* <span className="text-gray-600 ml-2">Keep me signed in</span> */}
                            </label>
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mt-6">
                        <div className="w-full px-3">
                        <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full" type="submit" >Save</button>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mt-6">
                        <div className="w-full px-3">
                        <button className="btn text-white bg-red-600 hover:bg-red-700 w-full" onClick={action.DeleteProfile} >Delete</button>
                        </div>
                    </div>
                    </form>
                </>}


              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default SignIn;