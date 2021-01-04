import React from 'react';
import './top-bar.sass';

const TopBar = () => {
  const menuOptions = ['File', 'Edit', 'View', 'Arrange', 'Help'];
  return (
    <div className='opsly-top-bar'>
      <div className='opsly-top-bar__title'><span>Your project title</span></div>
      <div className='opsly-top-bar__options-container'>
        {menuOptions.map( (e, i) => <div key={i} className='opsly-top-bar__option-title'><span>{e}</span></div>)}
      </div>
    </div>);
};

export default TopBar;
