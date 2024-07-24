import React, { useState } from 'react';

function Taskbar() {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  const toggleStartMenu = () => {
    setIsStartMenuOpen(!isStartMenuOpen);
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-blue-700 to-blue-500 flex items-center px-1">
        <button 
          onClick={toggleStartMenu}
          className="px-4 py-1 bg-green-600 hover:bg-green-700 text-white font-bold rounded-l-lg rounded-r-lg flex items-center"
        >
          <span className="mr-2">Start</span>
        </button>
        {/* You can add more taskbar items here */}
      </div>
      {isStartMenuOpen && (
        <div className="fixed bottom-12 left-0 w-64 bg-white border-2 border-blue-300 rounded-t-lg">
          <div className="bg-gradient-to-b from-blue-600 to-blue-400 h-12 flex items-center px-4">
            <span className="text-white font-bold">Start Menu</span>
          </div>
          <div className="p-2">
            {/* Add start menu items here */}
            <div className="hover:bg-blue-200 p-2 cursor-pointer">My Computer</div>
            <div className="hover:bg-blue-200 p-2 cursor-pointer">My Documents</div>
            <div className="hover:bg-blue-200 p-2 cursor-pointer">Control Panel</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Taskbar;