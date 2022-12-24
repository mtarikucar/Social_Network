import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Community from "./pages/Community";
import MessageBox from "./pages/MessageBox";
import Settings from "./pages/Settings"
import SinglePost from "./pages/SinglePost";


import Sidebar from "./layout/Sidebar";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex w-full">
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="post/:id" element={<SinglePost/>}></Route>
            </Route>

            <Route path="/Profile" element={<Profile />}>
              <Route path=":id" element={<Profile />}/>
            </Route>
            
            <Route path="/Community" element={<Community />}>
              <Route path=":id" element={<Community/>}/>
            </Route>

            <Route path="/MessageBox" element={<MessageBox />}></Route>
            <Route path="/Settings" element={<Settings />}></Route>

          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
