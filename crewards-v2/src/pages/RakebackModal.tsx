import React from "react";

interface RakebackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void; // Altera para onConfirm
  title: string; // Adicionando a propriedade title
}

const RakebackModal: React.FC<RakebackModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-20">
      <div className="bg-zinc-800 p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-white text-lg font-base mb-4">{title}</h2>
        <div className="flex justify-start">
          <button
            onClick={onConfirm}
            className="py-2 px-4 bg-green-600 text-white rounded transition duration-300 ease-in-out hover:bg-green-700 hover:scale-105 mr-3"
          >
            Confirm
          </button>
          <button
            onClick={onClose}
            className="py-2 px-4 bg-red-600 text-white rounded transition duration-300 ease-in-out hover:bg-red-700 hover:scale-105"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RakebackModal;
