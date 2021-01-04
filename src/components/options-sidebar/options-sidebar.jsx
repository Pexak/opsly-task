import React from 'react';
import { useDispatch } from 'react-redux';
import './options-sidebar.sass';
import {OBJECT_TYPE} from '../../model/object-types';
import {addCanvasObject} from '../../actions/canvas-objects.action';

const menuOptions = [
  {name: 'Rectangle', type: OBJECT_TYPE.RECTANGLE},
  {name: 'Circle', type: OBJECT_TYPE.SQUARE},
  {name: 'Router'},
  {name: 'LAN'},
  {name: 'More stuff'}
];

const OptionsSidebar = ({}) => {
  const dispatch = useDispatch();

  const createObject = (type) => {
    if(!type) return
    dispatch(addCanvasObject({type}))
  };

  const renderOption = (e, i) => {
    return <div key={i} className='opsly-options-sidebar__element'><span onClick={() => createObject(e.type)}>{e.name}</span></div>
  };

  return (
    <div className='opsly-options-sidebar'>
      <div className='opsly-options-sidebar__title'><span>Add object</span></div>
      {menuOptions.map(renderOption)}
    </div>);
};

export default OptionsSidebar;
