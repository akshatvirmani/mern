import React, { useState }  from 'react';
import toast, {Toaster} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import BgImage from './BgImage';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {postLogin} from '../../store/asyncMethods/AuthMethods'
const Login=(props)=>{
    const dispatch =useDispatch();
    const {loginErrors, loading, user}=useSelector((state)=>state.AuthReducer);
    const navigate = useNavigate();
    const [state, setState]=useState({
        email:'',
        password:'',
    })
    const handleInputs=e=>{
        setState({
            ...state,
            [e.target.name]:e.target.value,
        })
    }
    const userLogin=(e)=>{
        e.preventDefault();
        dispatch(postLogin(state));
    }
    useEffect(()=>{
        if(loginErrors.length>0){
            loginErrors.map(error=>toast.error(error.msg))
        }
        if(user){
            navigate('/dashboard/1');
        }
    }, [loginErrors,user])
    return (
        <>
        <Helmet>
            <title>User Login</title>
            <meta name='description' content='User Login form'/>
        </Helmet>
            <div className='row mt-80'>
                <div className='col-8'>
                   <BgImage/>
                   <Toaster toastOptions={{style:{
                       fontSize:'12px',
                   }
                   }
                   }/>
                </div>
                <div className='col-4'>
                    <div className='account'>
                        <div className='account__section'>
                            <form onSubmit={userLogin}>
                            <div className='group'>
                                <h3 className='form-heading'>Login</h3>
                            </div>
                                <div className='group'>
                                    <input type='email' name='email' value={state.email} onChange={handleInputs} className='group__control' placeholder='Enter Email'/>
                                </div>
                                <div className='group'>
                                    <input type='password' name='password' value={state.password} onChange={handleInputs} className='group__control' placeholder='Create Password'/>
                                </div>
                                <div className='group'>
                                    <input type='submit' name='' className='btn btn-default btn-block' value={loading ? '...':'Login'}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login; 