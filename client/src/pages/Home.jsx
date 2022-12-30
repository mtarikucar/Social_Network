import React from "react";

import Posts from "../components/Posts";
import { createModal, useModals } from "../utils/modal";
import Modal from "../modals";
import SendPost from "../components/SendPost";
function Home() {
  const modals = useModals()
  return (
    <>
      <SendPost/>
      <Posts />
    </>
  );
}

export default Home;
