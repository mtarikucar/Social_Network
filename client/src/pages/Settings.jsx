import React from 'react'
import { createModal, useModals } from "../utils/modal";
import Modal from "../modals";

function Settings() {
  const modals = useModals()
  return (
    <div>{modals.length > 0 && <Modal />}

    <button
      onClick={() => {
        createModal("login");
      }}
    >
      entier
    </button></div>
  )
}

export default Settings