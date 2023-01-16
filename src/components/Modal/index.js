import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ openModal, onClose }) => {
  if (!openModal) return null;
  return (
    <div className="modal overlay bg-white border rounded">
      <AiOutlineClose onClick={onClose} size={30} className="cursor-pointer" />
      <input
        type="search"
        name="search"
        id="search"
        placeholder="search"
        className="mt-5 bg-gray-100 border hover:bg-transparent focus:bg-transparent w-full placeholder:text-sm py-1 px-2  outline-none rounded focus:border-gray-400"
      />
    </div>
  );
};

export default Modal;
