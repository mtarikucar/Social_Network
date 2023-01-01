import React from "react";
import { Link} from "react-router-dom";

import "./index.css";

function ProfilePicture({
  imgpath = "../../public/img/pp.png",
  url
}) {
  return (
    <Link
      to={`/Profile/${url}`}
      className="flex items-center p-2 space-x-3 rounded-md"
    >
      <img className="pp" src={imgpath} />
    </Link>
  );
}

export default ProfilePicture;
