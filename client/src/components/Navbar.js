import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {LOGOUT} from '../store/types/UserTypes'
const Navbar=()=>{
    const {user} =useSelector((state)=>state.AuthReducer);
    const dispatch= useDispatch();
    const logout=()=>{
        localStorage.removeItem('myToken');
        dispatch({type: LOGOUT});
    }
    const Links=user?(
        <div className='navbar__right'>
            <li>
                <Link to='/create'>Create Post</Link>
            </li>
            <li>
                <Link to='/dashboard/1'>{user.name}</Link>
            </li>
            <li>
                <span onClick={logout}>logout</span>
            </li>
        </div>
    ):(
        <div className='navbar__right'>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/register'>Register</Link>
            </li>
        </div>
    )
    return (
        <nav className='navbar'>
            <div className='container'>
                <div className='navbar__row'>
                    <div className='navbar__left'>
                        <Link to='/'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYenth9x1QqBWsal9l8SYdKdkI1xBrBbUgA&usqp=CAU' alt=''/>
                        </Link>
                    </div>
                {Links}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;