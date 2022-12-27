import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createModal } from "../utils/modal";
import Header from "./components/header";

import { login } from "../store/auth-actions";

export default function LoginModal() {
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);
  const emailRef = useRef();
  const passwordRef = useRef();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!password.trim() || !email.trim()) return;
    dispatch(
      login({
        email,
        password,
      })
    );
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="px-4 w-full h-screen flex justify-center items-center bg-login bg-no-repeat bg-cover">
      <form
        onSubmit={formSubmitHandler}
        action=""
        className="border bg-white p-6 flex flex-col min-w-[17rem] sm:min-w-[22rem] md:min-w-[25rem]"
      >
        <Header title={"Login"} />
        <input
          className="p-2 mb-4 border-2 rounded focus:outline-none"
          type="text"
          placeholder="email"
          ref={emailRef}
        />
        <input
          className="p-2 mb-4 border-2 rounded focus:outline-none"
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <button
          className="mb-4 bg-teal-700 text-white p-2 disabled:bg-teal-500 disabled:cursor-not-allowed"
          disabled={auth.isFetching}
        >
          Login
        </button>
        {auth.error && <p>Something went wrong. Please try later...</p>}
        <button onClick={() => createModal("register")}>register</button>
      </form>
    </div>
  );
}
