import {useState} from "react";

import ProfilePicture from "./Profile/ProfilePicture";

import { publicRequest } from "../requestMethods";

import { useEffect } from "react";
import { useSelector } from "react-redux";

function Post({post}) {
  const auth = useSelector((store) => store.auth);

  const [profile, setProfile] = useState({});
  const getInfo = async () => {
    try {
      setProfile({});
      const url = `/users/${post.userId}`;
      const response = await publicRequest.get(url);
      setProfile(response.data.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getInfo()
  },[])
  return (
    
      <div className="flex justify-center items-center mt-4 z-0">
        
        <div className="max-w-md container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <div className="flex p-4 justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 rounded">
                <ProfilePicture url={post.userId} />
              </div>
              <h2 className="text-gray-800 font-bold cursor-pointer">
                {profile.profile_name}
              </h2>
            </div>
            <div className="flex space-x-2">
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-gray-600 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </span>
                <span>22</span>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>20</span>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
              {post.content}
            </h1>
            <p className="ml-4 mt-1 mb-2 text-gray-700 hover:underline cursor-pointer">
              #by Saca Tuerca
            </p>
          </div>
          <img
            className="w-full cursor-pointer"
            src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt=""
          />
          
        </div>
      </div>

  );
}

export default Post;