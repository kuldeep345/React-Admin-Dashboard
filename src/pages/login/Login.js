import React, { useContext, useState } from 'react'
import { baseUrl } from '../../constants/baseUrl'
import AuthContext from '../../context/authContext'
import './login.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookie from 'js-cookie'

const Login = () => {

    const [ credentials , setCredentials  ] = useState({
        username:undefined,
        password:undefined
    })

    const { state:{user, loading, error } , dispatch } = useContext(AuthContext)

 

    const handleOnChange = (e)=>{
        setCredentials({
            ...credentials,
            [e.target.id]:e.target.value
        })
    }

    const navigate = useNavigate()

    const handleOnClick = async(e)=>{
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try {
            const res = await axios.post(`${baseUrl}/auth/login`, credentials)
           
            if(res.data.isAdmin){
                dispatch({ type:'LOGIN_SUCCESS' , payload:res.data.otherDetails })
                navigate("/")
                console.log(res.data.token)
            }
            else{
                dispatch({ type:'LOGIN_FAIL' , payload:{message:"You are not allowed"}})
            }
        } catch (error) {
          console.log(error)
            dispatch({ type:'LOGIN_FAIL' , payload:error.response.data.message})
        }
    }

  return (
    <div className='login'>
        <div className="loginContainer">
            <input type="text" placeholder="Email Address" id="email" onChange={handleOnChange} className="loginInput"/>
            <input type="password" placeholder='password' id='password' onChange={handleOnChange} className="loginInput"/>
            <button onClick={handleOnClick} className='loginButton'>Login</button>
        {error && <span className='errorMessage'>{error}</span>}
        </div>
        
    </div>
  )
}

export default Login