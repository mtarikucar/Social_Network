import { useState } from "react";

import BarItem from "./BarItem";
import Candle from "../components/Candle";
import { useSelector, useDispatch } from "react-redux";
import { createModal, useModals } from "../utils/modal";
import Modal from "../modals";

import {
  FiMessageSquare,
  FiUser,
  FiArrowLeft,
  FiHome,
  FiTool,
  FiUsers,
  FiUnlock,
} from "react-icons/fi";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((store) => store.auth);
  const modals = useModals();
  return (
    <div
      className={` ${
        open ? "w-20" : "w-60 "
      } flex flex-col h-screen p-3 bg-gray-800 shadow duration-200 sticky top-0 z-50`}
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
          <FiArrowLeft color="white" size={24} />
        </button>
      </div>
      <div className="space-y-3 my-auto">
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm ">
            <BarItem
              name={"Home"}
              icon={<FiHome size={24} color="white" />}
              open={open}
              url={""}
            />
            { !currentUser &&
              <div>
                <li className="rounded-sm">
                  {modals.length > 0 && <Modal />}

                  <button
                    onClick={() => {
                      createModal("login");
                    }}
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <FiUnlock size={24} color="white" />
                    <div className={` ${open ? "hidden" : ""}`}>
                      <span className={`text-gray-100`}>Login</span>
                    </div>
                  </button>
                </li>
              </div>
            }
            {currentUser && (
              <>
                <BarItem
                  name={"Profile"}
                  url={`Profile/${currentUser.user.id}`}
                  open={open}
                  icon={<FiUser size={24} color="white" />}
                />
                <BarItem
                  name={"Community"}
                  icon={<FiUsers size={24} color="white" />}
                  open={open}
                  url={"Community"}
                />
                <BarItem
                  name={"Message Box"}
                  icon={<FiMessageSquare size={24} color="white" />}
                  open={open}
                  url={"MessageBox"}
                />
                <BarItem
                  name={"Settings"}
                  icon={<FiTool size={24} color="white" />}
                  open={open}
                  url={"Settings"}
                />
              </>
            )}
          </ul>
        </div>
      </div>
      {<Candle />}
    </div>
  );
}
