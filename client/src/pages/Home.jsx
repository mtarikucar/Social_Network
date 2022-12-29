import React from "react";

import Posts from "../components/Posts";
import { createModal, useModals } from "../utils/modal";
import Modal from "../modals";
function Home() {
  const modals = useModals()
  return (
    <>
      
      <Posts />
    </>
  );
}

export default Home;
