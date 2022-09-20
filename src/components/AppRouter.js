import React from 'react'
import { Routes, Route } from "react-router-dom";
import {  NotFound } from '../pages';
import { publicRoutes } from '../routes';


function AppRouter() {
  return (
    <Routes>
        {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={Component} exact/>
        )}
        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default AppRouter