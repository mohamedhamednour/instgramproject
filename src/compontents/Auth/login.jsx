import React from 'react'
import { useContext} from 'react'
import AuthContext from './Authcontext';

export const Login = () => {
    const {loginUser} = useContext(AuthContext)
    return (
        <div>
            <form onSubmit={loginUser}>

              username:  <input type="text" name="username" /><br/>
                password: <input type="password" name="password" /><br/>
                submit : <input type="submit"  />
            </form>
        </div>
    )
}


