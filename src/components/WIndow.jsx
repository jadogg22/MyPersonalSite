import React from 'react';

function Window({ title, children, onClose }) {
  return (
    <div className="absolute top-10 left-10 w-96 bg-white border-2 border-blue-300 rounded shadow-lg">
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-2 flex justify-between items-center">
        <h2 className="text-white font-bold">{title}</h2>
        <button onClick={onClose} className="text-white font-bold">X</button>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}

export default Window;