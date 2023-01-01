import React, { useState } from "react";
import {
  FaPaperclip,
  FaFileImage,
  FaFileVideo,
  FaMicrophone,
} from "react-icons/fa";
import ProfilePicture from "../components/Profile/ProfilePicture";
import { useDispatch, useSelector } from "react-redux";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";

import LoadSpin from "./LoadSpin"
import { addPost } from "../store/post-actions";

const SendPost = () => {
  const {currentUser} = useSelector(store => store.auth)
  const post = useSelector(store => store.post)
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch()

  const handleTextChange = (event) => {
    setText(event.target.value);
    console.log(files);
  };

  const handleFile = (event) => {
    setFiles((files) => [...files, event.target.files[0]]);
  };

  const upload = (file) => {
    const type = file.type.split("/")[0]
    const fileName = type +"/" + new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const addedpost = { file: downloadURL };
          console.log(addedpost);
          dispatch(addPost({
            content: text,
            userId: currentUser.user.id,
            
          },
          currentUser.token))          
        });
      }
    );
    
  };
  const handleClick = (e) => {
    e.preventDefault();

    for(const file of files){      
      upload(file)
    }
  };

  return (
    <div className="m-4">
      
      <form>
        <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
          <ProfilePicture />
          <textarea
            placeholder="Write a post..."
            className="px-4 py-2 leading-tight text-gray-700 bg-white rounded-lg shadow-inner w-full"
            onChange={handleTextChange}
          ></textarea>
          <div className="flex items-center px-4 py-2 -mx-2">
            <label htmlFor="image-input" className="cursor-pointer px-2">
              <FaPaperclip />
            </label>
            <input
              id="image-input"
              type="file"
              accept="image/*"
              onChange={handleFile}
              className="hidden"
            />
            <label htmlFor="video-input" className="cursor-pointer px-2">
              <FaFileVideo />
            </label>
            <input
              id="video-input"
              type="file"
              accept="video/*"
              onChange={handleFile}
              className="hidden"
            />
            <label htmlFor="voice-input" className="cursor-pointer px-2">
              <FaMicrophone />
            </label>
            <input
              id="voice-input"
              type="file"
              accept="audio/*"
              onChange={handleFile}
              className="hidden"
            />
            <button
              className="px-4 py-2 rounded-full bg-gray-800 text-white font-bold hover:bg-gray-700 focus:outline-none"
              onClick={handleClick}
            >
              Send
            </button>
          </div>
        </div>
      </form>
      
    </div>
  );
};

export default SendPost;
