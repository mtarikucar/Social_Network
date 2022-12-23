import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Community from "./pages/Community";
import MessageBox from "./pages/MessageBox";
import Post from "./pages/Post"


import Sidebar from "./layout/Sidebar";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex w-full">
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
            {/* <Route path="/Profile/:profile" element={<Profile />}></Route> */}
            <Route path="/Community" element={<Community />}></Route>
            {/* <Route path="/Community/:community" element={<Community />}></Route> */}
            <Route path="/MessageBox" element={<MessageBox />}></Route>
            <Route path="/Post" element={<Post />}></Route>
            {/* <Route path="/Post/:post" element={<Post />}></Route> */}

          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
