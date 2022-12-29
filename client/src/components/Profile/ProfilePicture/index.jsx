import React from "react";
import { NavLink   } from "react-router-dom";

import "./index.css";

function ProfilePicture({
  imgpath = "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg",
  url
}) {
  return (
    <NavLink
      to={`/${url}`}
      className="flex items-center p-2 space-x-3 rounded-md"
    >
      <img className="pp" src={imgpath} />
    </NavLink>
  );
}

export default ProfilePicture;
