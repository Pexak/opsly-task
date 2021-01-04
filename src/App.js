import './App.css';
import TopBar from './components/top-bar/top-bar';
import React from 'react';
import OptionsSidebar from './components/options-sidebar/options-sidebar';
import CanvasContainer from './components/canvas/container/canvas-container';
import ElementSidebar from './components/element-sidebar/element-sidebar';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <div className='opsly-main'>
        <OptionsSidebar/>
        <CanvasContainer/>
        <ElementSidebar/>
      </div>
    </div>
  );
}

export default App;
