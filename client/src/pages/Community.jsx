import React from "react";

import ProfileCard from "../components/Profile/ProfileCardLittle";
import UserList from "../components/UserList";

function Community() {

  return (
    <>
    
      <div className="grid md:grid-cols-2 grid-cols-1 ">
        <div className="flex p-4">
          <ProfileCard />
        </div>
        <UserList />
        
      </div>
      
    </>
  );
}

export default Community;
