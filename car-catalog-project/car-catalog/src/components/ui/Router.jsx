import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../screens/home/Home';
import carDetail from '../screens/car-detail/carDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  element= {<Home />} path='/' />
        <Route element={<carDetail />}  path='/car/:id'/>

        <Route path='*' element = {<div>Страница не найдена</div>}  />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
