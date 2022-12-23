import { useState } from "react";

import BarItem from "./BarItem";
export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    
      <div
        className={` ${
          open ? "w-20" : "w-60 "
        } flex flex-col h-screen p-3 bg-gray-800 shadow duration-200 sticky top-0`}
      >
          <div className="flex items-center justify-between">
            <h2 className={`m-auto text-xl font-bold text-white`} onClick={open ? () => setOpen(!open): () => {}}>Logo</h2>
            <button className={`${open ? "hidden": ""}`} onClick={() => setOpen(!open)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
          </div>
        <div className="space-y-3 my-auto">
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm ">
              
              <BarItem name={"Home"} path={"home"} open={open} url={""}/>
              <BarItem name={"Profile"} path={""} open={open} url={"Profile"}/>
              <BarItem name={"Community"} path={"growth"} open={open} url={"Community"}/>
              <BarItem name={"Message Box"} path={"window"} open={open} url={"MessageBox"}/>
              <BarItem name={"Post"} path={"post"} open={open} url={"Post"}/>
            </ul>
          </div>
        </div>
      </div>

  );
}
