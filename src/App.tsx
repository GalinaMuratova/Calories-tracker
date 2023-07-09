import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Meals from "./container/Meals/Meals";
import Add from "./container/Add/Add";
import NavBar from "./components/NavBar/NavBar";
import Edit from "./container/Edit/Edit";

function App() {
  return (
      <>
          <NavBar />
          <Routes>
              <Route path='/' element={(<Meals/>)}/>
              <Route path='/add' element={(<Add/>)}/>
              <Route path='/edit/:id' element={(<Edit/>)}/>
          </Routes>
      </>
  );
}

export default App;
