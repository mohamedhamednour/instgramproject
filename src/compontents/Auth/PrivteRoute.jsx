import { Route, Navigate, Routes,Outlet  } from 'react-router-dom'

import { useContext} from 'react'
import AuthContext from './Authcontext';
import Home from '../Home/index';



export const PrivateRoute = ({children,}) => {
    const {user} = useContext(AuthContext)

  
    return user ? children : <Navigate to="/" />;
}

  

 