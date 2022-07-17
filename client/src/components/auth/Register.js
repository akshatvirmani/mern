import React  from 'react';
import BgImage from './BgImage';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Helmet} from 'react-helmet';
import toast, {Toaster} from 'react-hot-toast'
import { postRegister } from '../../store/asyncMethods/AuthMethods';
const Register=(props)=>{
    const [state,setState]=useState({
      name:'',
      email:'',
      password:'',      
    });
    const {loading,registerErrors,user}=useSelector((state)=>state.AuthReducer);
    const navigate = useNavigate();
    const dispatch= useDispatch();
    const handleInputs=(e)=>{
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };
    const userRegister=async (e)=>{
        e.preventDefault();
        dispatch(postRegister(state));
    }
    useEffect(()=>{
        
        if(registerErrors.length>0)
        {
            registerErrors.map((error)=>toast.error(error.msg))
        }
        if(user){
            navigate('/dashboard');
        }
    },[registerErrors, user]);
    return (
        <>
        <Helmet>
            <title>User Register</title>
            <meta name='description' content='User Register form'/>
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
                            <form onSubmit={userRegister}>
                            <div className='group'>
                                <h3 className='form-heading'>Register</h3>
                            </div>
                                <div className='group'>
                                    <input type='text' name='name' className='group__control' placeholder='Enter Name' value={state.name} onChange={handleInputs}/>
                                </div>
                                <div className='group'>
                                    <input type='email' name='email' className='group__control' placeholder='Enter Email' value={state.email} onChange={handleInputs}/>
                                </div>
                                <div className='group'>
                                    <input type='password' name='password' className='group__control' placeholder='Create Password' value={state.password} onChange={handleInputs}/>
                                </div>
                                <div className='group'>
                                    <input type='submit' name='' className='btn btn-default btn-block' value={loading?'...':'Register'}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register; 