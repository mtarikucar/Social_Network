import { destroyModal } from "../utils/modal";
import Header from "./components/header";

import { register } from "../store/auth-actions";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

export default function RegisterModal() {
  const dispatch = useDispatch();

  const auth = useSelector((store) => store.auth);
  const profileNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const profile_name = profileNameRef.current.value
    if (!password.trim() || !email.trim() || !profile_name.trim()) return;
    dispatch(
      register({
        profile_name,
        email,
        password,
      })
    );
    emailRef.current.value = "";
    passwordRef.current.value = "";
    profileNameRef.current.value = "";
  };
  return (
    <div className="px-4 w-full h-screen flex justify-center items-center bg-login bg-no-repeat bg-cover">
      <form
        onSubmit={formSubmitHandler}
        action=""
        className="border bg-white p-6 flex flex-col items-center min-w-[17rem] sm:min-w-[22rem] md:min-w-[35rem] max-w-[25rem]"
      >
        <Header title={"SIGN UP"} />
        <div className="container">
          <div className="grid gap-4 md:grid-cols-1 mb-4 w-full">
            <input
              className="block p-2 border-2 rounded focus:outline-none"
              type="text"
              placeholder="First Name"
              ref={profileNameRef}
            />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 mb-4 w-full">
          <input
            className="block p-2 border-2 rounded focus:outline-none"
            type="email"
            placeholder="Email"
            ref={emailRef}
          />

          <input
            className="block p-2 border-2 rounded focus:outline-none"
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
        </div>

        <button className="mb-4 bg-teal-700 text-white p-2">Create</button>
        {auth.error && <p>Something went wrong. Please try later...</p>}
        <button className="capitalize underline mb-4" onClick={destroyModal}>
          Already have an account
        </button>
      </form>
    </div>
  );
}
