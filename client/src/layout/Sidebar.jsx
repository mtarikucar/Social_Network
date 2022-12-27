import { useState } from "react";

import BarItem from "./BarItem";
import Candle from "../components/Candle";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/auth-actions";

import { FiMessageSquare, FiUser, FiArrowLeft, FiHome, FiTool, FiUsers } from "react-icons/fi";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch()
  const { currentUser } = useSelector((store) => store.auth);

  return (
    <div
      className={` ${
        open ? "w-20" : "w-60 "
      } flex flex-col h-screen p-3 bg-gray-800 shadow duration-200 sticky top-0`}
    >
      <div className="flex items-center justify-between">
        <h2
          className={`m-auto text-xl font-bold text-white`}
          onClick={open ? () => setOpen(!open) : () => {}}
        >
          Logo
        </h2>
        <button
          className={`${open ? "hidden" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <FiArrowLeft color="white" size={24}/>
        </button>
      </div>
      <div className="space-y-3 my-auto">
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm ">
            <BarItem name={"Home"} icon={<FiHome size={24} color="white"/>} open={open} url={""} />
            {currentUser && (
              <>
                <BarItem
                  name={"Profile"}
                  url={`Profile/${currentUser.userId}`}
                  open={open}
                  icon={<FiUser size={24} color="white"/>}
                />
                <BarItem
                  name={"Community"}
                  icon={<FiUsers size={24} color="white"/>}
                  open={open}
                  url={"Community"}
                />
                <BarItem
                  name={"Message Box"}
                  icon={<FiMessageSquare size={24} color="white"/>}
                  open={open}
                  url={"MessageBox"}
                />
                <BarItem
                  name={"Settings"}
                  icon={<FiTool size={24} color="white"/>}
                  open={open}
                  url={"Settings"}
                />
                <button onClick={()=> dispatch(logout())}> <h1>logout</h1> bu buton profilede settingsin içine taşınacak</button>
              </>

            )}
          </ul>
        </div>
      </div>
      {<Candle />}
    </div>
  );
}
