import { destroyModal } from "../utils/modal";
import Header from "./components/header";

export default function RegisterModal() {
  return (
    <div className="px-4 w-full h-screen flex justify-center items-center bg-login bg-no-repeat bg-cover">
      <form
        action=""
        className="border bg-white p-6 flex flex-col items-center min-w-[17rem] sm:min-w-[22rem] md:min-w-[35rem] max-w-[25rem]"
      >
        <Header title={"SIGN UP"}/>
        <div className="grid gap-4 md:grid-cols-2 mb-4">
          <input
            className="block p-2 border-2 rounded focus:outline-none"
            type="text"
            placeholder="First Name"
          />
          <input
            className="block p-2 border-2 rounded focus:outline-none"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2 mb-4">
          <input
            className="block p-2 border-2 rounded focus:outline-none"
            type="password"
            placeholder="Password"
          />
          <input
            className="block p-2 border-2 rounded focus:outline-none"
            type="phone"
            placeholder="phone number"
          />
        </div>

        <button className="mb-4 bg-teal-700 text-white p-2">Create</button>
        <button className="capitalize underline mb-4" onClick={destroyModal}>Already have an account</button>
      </form>
    </div>
  );
}
