import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { destroyAllModal } from "../utils/modal";
import Header from "./components/header";
import { logout } from "../store/auth-actions";
export default function editProfileModal() {
  const dispatch = useDispatch();
  const name_surname_ref = useRef();
  const passwordRef = useRef();
  const websiteRef = useRef();
  const bioRef = useRef();
  const auth = useSelector((store) => store.auth);

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  const save = (e) => {
    e.preventDefault()

  }
  const out = (e) => {
    dispatch(destroyAllModal());
    dispatch(logout());
  };

  const removeAccount = (e) => {
    out()
    dispatch()
  }
  return (
    <>
      {auth.currentUser.user && (
        <div className="px-4 w-full h-screen flex justify-center items-center bg-login bg-no-repeat bg-cover">
          <form
            onSubmit={formSubmitHandler}
            className="border bg-white p-6 flex flex-col min-w-[17rem] sm:min-w-[22rem] md:min-w-[25rem]"
          >
            <Header title={"edit profile"} />
            <input
              className="p-2 mb-4 border-2 rounded focus:outline-none"
              type="text"
              placeholder={auth.currentUser.user.email}
            />
            <input
              className="p-2 mb-4 border-2 rounded focus:outline-none"
              type="text"
              placeholder={auth.currentUser.user.name_surname || "name surname"}
            />
            <input
              className="p-2 mb-4 border-2 rounded focus:outline-none"
              type="text"
              placeholder={auth.currentUser.user.website || "website"}
            />
            <input
              className="p-2 mb-4 border-2 rounded focus:outline-none"
              type="text"
              placeholder={auth.currentUser.user.website || "bio"}
            />

            <p>
              Personal information is entered even if the account is being used
              for a business, a pet, or something else. These sections will not
              appear in the public profile.
            </p>
            <input
              className="p-2 mb-4 border-2 rounded focus:outline-none"
              type="tel"
              placeholder="phone number"
            />
            <select className="p-2 mb-4 border-2 rounded focus:outline-none">
              <option value="" disabled selected>
                Select your gender
              </option>

              <option value="m">man</option>

              <option value="w">woman</option>

              <option value="w">attack helicopter</option>
            </select>
            <button
              className="mb-4 bg-gray-800 text-white p-2 disabled:bg-gray-500 disabled:cursor-not-allowed rounded"
              disabled={auth.isFetching}
              onClick={() => save()}
            >
              save changes
            </button>
            <button
              className="mb-4 bg-rose-800 text-white p-2 disabled:bg-gray-500 disabled:cursor-not-allowed rounded"
              onClick={() => out()}
            >
              {" "}
              <h1>logout</h1>
            </button>
            <button
              
              onClick={() => removeAccount()}
            >
              {" "}
              <h1>remove account</h1>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
