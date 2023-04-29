import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import UserList from '../zadanie1/UserList';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  element= {<Home />} path='/' />

        <Route  element= {<UserList />} path='/Zadanie1' />
    
        <Route path='*' element = {<div>Страница не найдена</div>}  />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
