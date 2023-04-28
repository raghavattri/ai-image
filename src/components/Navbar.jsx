import React from 'react'
import { Link } from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth';
import {Auth} from "../firebase-config"
import { signOut } from 'firebase/auth';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user] = useAuthState(Auth)
  const navigator = useNavigate()
  const logOut = async () => {
    await signOut(Auth)
    navigator("/")
  }
  return (
    <header >
       <Link className='link' to="/" style={{textDecoration:'none'}}><h3 style={{color:'black'}}>Generator-rex</h3></Link>
        <div className="menu">
            <Link className='link' to="/">Home</Link>
            {user && <Link className='link' to={"/generate"}>Generate</Link>}
            {user? <div className='link'><div className='d-flex'><img className='logo' src={user.photoURL} alt="" /> 
             <button onClick={logOut} style={{cursor:"pointer"}}><LogoutIcon/></button></div></div>
            : <Link className='link' style={{cursor:"pointer"}} to={"/login"}>Login</Link>
            }
        </div>
    </header>
  )
}

export default Navbar