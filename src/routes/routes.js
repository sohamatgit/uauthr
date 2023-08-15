import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../home/Home";
import { UserPage } from "../user-manager/components/users/userPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UserPage/>} />
      <Route path="/test" element={<div>Test</div>} />
    </Routes>
  );
};
