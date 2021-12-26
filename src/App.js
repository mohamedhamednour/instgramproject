import React, {useState} from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import styled , {ThemeProvider} from 'styled-components';
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { PrivateRoute } from './compontents/Auth/PrivteRoute';
import Login from './compontents/Login/index';
import SignUp from './compontents/SignUp';
import Home from './compontents/Home';
import Profile from './compontents/Profile';
import Spinner from './compontents/Spinner'
import Editprofile from './compontents/Profile/Editprofile';
import { lightTheme, darkTheme, GlobalStyles } from "./themestyle";
import Postid from './compontents/Postid/index';


const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;


function App() {

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
     <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
       {/* <Spinner />  */}
       <button onClick={() => themeToggler()} className='dark_mode'>
       <FontAwesomeIcon icon={faMoon} size="lg" style={{ color: '#fff' }} /> 
       &nbsp; Mode
        

       </button>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign" element={<SignUp />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/edit/:ID" element={<Editprofile/>} />
        <Route path="/postid/:id" element={<Postid/>} />

        <Route
          path='/profile/:id'
           element={
            <PrivateRoute>
              <Profile/>
            </PrivateRoute>
          }
        />



        
      </Routes>
    
      </StyledApp>
    </ThemeProvider>






        {/* <Route path='/editprofile' element={<Editprofile />} /> */}
        
        {/* <Route path="/edit/:ID">
          <Editprofile />
        </Route>
         */}
        
       
    </>
  );
}

export default App;
