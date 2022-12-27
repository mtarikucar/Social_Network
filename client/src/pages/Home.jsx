import React from "react";

import Posts from "../components/Posts";
import { createModal, useModals } from "../utils/modal";
import Modal from "../modals";
function Home() {
  const modals = useModals()
  return (
    <>
      <div>
        {modals.length > 0 && <Modal />}

        <button
          onClick={() => {
            createModal("login");
          }}
        >
          entier
        </button>
      </div>
      <Posts />
    </>
  );
}

export default Home;
