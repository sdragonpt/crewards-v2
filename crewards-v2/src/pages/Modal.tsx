import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: () => void;
  children?: React.ReactNode; // Adicionando children como opcional
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onConnect,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-zinc-800 p-6 rounded-lg shadow-lg w-80">
        {children} {/* Renderiza os filhos aqui */}
        <div className="flex">
          <button
            onClick={onConnect}
            className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 mr-3"
          >
            Connect
          </button>
          <button
            onClick={onClose}
            className="py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
