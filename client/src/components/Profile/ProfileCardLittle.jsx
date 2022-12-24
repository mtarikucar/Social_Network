import React from "react";

function ProfileCard() {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-screen-md px-10 py-6 mx-4 mt-16 bg-white rounded-lg shadow md:mx-auto border-1">
        <div className="flex flex-col items-start w-full m-auto md:flex-row">
          <div className="flex mx-auto md:mr-10 md:m-0">
            <div className="items-center justify-center w-20 h-20 m-auto mr-4 md:w-32 md:h-32">
              <img
                alt="profil"
                src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="object-cover w-20 h-20 mx-auto rounded-full md:w-32 md:h-32"
              />
            </div>
          </div>
          <div className="flex flex-col pt-4 mx-auto my-auto md:pt-0 md:mx-0">
            <div className="flex flex-col mx-auto md:flex-row md:mx-0 ">
              <h1 className="text-lg  text-gray-800 md:text-xl">
                Alexander Noah
              </h1>
            </div>
            <div className="flex items-center justify-between mt-3 space-x-2">
              <div className="flex">
                <p className="text-md text-gray-500 md:text-base">Fotografer</p>
              </div>
              <div className="flex">
                <span className="mr-1 font-semibold">55 </span> infulence
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pt-5">
          <div className="flex">
            <button className="font-bold py-2 px-4 rounded inline-flex items-center w-full justify-center bg-rose-700 hover:bg-rose-800 text-white">
              kick out
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-screen-md px-10 py-6 mx-4 mt-2 bg-white rounded-lg shadow md:mx-auto border-1 text-center">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-full justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
