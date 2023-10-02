import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../home";
import { Dashboard } from "../dashboard";

export const NavigateRoute = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
};
