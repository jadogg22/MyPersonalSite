import React, { useState } from 'react';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import StartMenu from './components/StartMenu';

function App() {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  const toggleStartMenu = () => {
    setIsStartMenuOpen(!isStartMenuOpen);
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col">
      <div className="flex-grow">
        <Desktop />
      </div>
      <Taskbar onStartClick={toggleStartMenu} />
      {isStartMenuOpen && <StartMenu />}
    </div>
  );
}

export default App;