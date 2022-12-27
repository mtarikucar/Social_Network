import React from "react";

import "./index.css";

function ProfilePicture({imgpath = "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg" }) {
  return (
    <>
      <img className="pp" src={imgpath} alt="" />
    </>
  );
}

export default ProfilePicture;
