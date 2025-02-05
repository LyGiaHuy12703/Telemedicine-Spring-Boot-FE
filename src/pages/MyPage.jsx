// src/pages/MyPage.jsx
import React, { useState } from "react";
import { toast } from "react-toastify";
import Modal from "../components/ui/Modal";

const MyPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        onClick={openModal}
      >
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Custom Modal">
        <p>This is the content of the modal. You can put anything here.</p>
      </Modal>
    </div>
  );
};

export default MyPage;
