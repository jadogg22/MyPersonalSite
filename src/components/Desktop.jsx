import React from 'react';
import blissWallpaper from '../assets/bliss-wallpaper.jpg';


function Desktop() {
  return (
    <div 
      className="h-full w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${blissWallpaper})` }}
    >
      <div className="absolute top-4 left-4 flex flex-col items-center space-y-4">
        <DesktopIcon name="My Computer" />
        <DesktopIcon name="Recycle Bin" />
        <DesktopIcon name="My Documents" />
      </div>
    </div>
  );
}

function DesktopIcon({ name }) {
  return (
    <div className="flex flex-col items-center w-20 cursor-pointer">
      <div className="w-16 h-16 bg-blue-500 flex items-center justify-center text-white">
        Icon
      </div>
      <p className="text-center text-white text-shadow mt-1">{name}</p>
    </div>
  );
}

export default Desktop;