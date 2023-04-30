import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Hook from '../pages/hook/Hook';
import Main from '../pages/work/Main';
import CarsMain from '../pages/CarsCatalog/CarsMain';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  element= {<Home />} path='/' />
        <Route element= {<Hook />} path ='/hook' />
        <Route element= {<Main />} path ='/1' />
        <Route element= {<CarsMain />} path ='/2' />
    
        <Route path='*' element = {<div>Страница не найдена</div>}  />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
