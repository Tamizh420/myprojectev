import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Router, Route, Switch, Link } from 'react-router-dom';
import EV from './projectev/EV.js'
import Signup from './projectev/loginsignin/signin.js';
import Login from './projectev/loginsignin/login.js';
import Homepage from './projectev/home.js';





function App() {
  /*
 <BrowserRouter>

        <Signup></Signup>

        <Routes>

          <Route path='/logedin' element={<Login />}></Route>
          <Route path='/register' element={<Signup />}></Route>

        </Routes>
      </BrowserRouter>


 */
  return (

    <>

      <Homepage> </Homepage>


    </>
  );
}

export default App;
