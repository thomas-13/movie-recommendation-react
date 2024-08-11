import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from './components/Navbar';
import {Home} from './pages/Home';
import { Admin } from './pages/Admin';
import { Login } from './components/Login';
import { useState, createContext, useEffect } from 'react';
import data from './data/movies.json'

export const AppContext = createContext()

function App() {

  const [movies, setMovies] =  useState(data)

  useEffect(()=>{
    const storedData = localStorage.getItem('movieData');
    if (storedData === null){
      const movieData = JSON.stringify(data);
      localStorage.setItem('movieData', movieData);
    }
    else{
      const parsedData = JSON.parse(storedData);
      setMovies(parsedData)
    }
  },[])

  return (
    <div className="App">
      <AppContext.Provider value={{movies, setMovies}}>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
