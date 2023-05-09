import React from 'react';

const Model = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if(e.target.id === 'wrapper') onClose();
  }
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      style={{ zIndex: 5 }}
      id='wrapper'
      onClick={handleClose}
    >
      <div className="w-[300px] flex flex-col ">
        <button className="text-white text-xl place-self-end text-[#E5ECF0]" onClick={() => onClose()}>
          X
        </button>
        <div className="bg-white p-2 rounded bg-[#E5ECF0]">{children}</div>
      </div>
    </div>
  );
};

export default Model;
