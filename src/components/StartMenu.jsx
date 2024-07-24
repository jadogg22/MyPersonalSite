import React from 'react';

function StartMenu() {
  return (
    <div className="absolute bottom-10 left-0 w-64 bg-blue-100 border-2 border-blue-300 rounded-tr-lg">
      <div className="bg-gradient-to-b from-blue-600 to-blue-400 h-12 flex items-center px-4">
        <span className="text-white font-bold">User Name</span>
      </div>
      <div className="p-2">
        {/* Start menu items will go here */}
        <div className="hover:bg-blue-200 p-2 cursor-pointer">My Computer</div>
        <div className="hover:bg-blue-200 p-2 cursor-pointer">Notepad</div>
        <div className="hover:bg-blue-200 p-2 cursor-pointer">Internet Explorer</div>
      </div>
    </div>
  );
}

export default StartMenu;