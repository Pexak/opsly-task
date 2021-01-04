import React from 'react';
import './element-sidebar.sass';
import {useDispatch, useSelector} from 'react-redux';
import {addCanvasObjectStyles} from '../../actions/canvas-objects.action';

const colorList = ['#e1d89f', '#d89216', '#374045', '#2c061f', '#ff7b54', '#939b62', '#295939', '#e8efeb', '#a9294f', '#6f9eaf'];
const ElementSidebar = () => {
  const dispatch = useDispatch();
  const canvas = useSelector(state => state.canvasObjects);
  const onColorPick = (e) => {
    dispatch(addCanvasObjectStyles({i: canvas.selectedObjectIndex, styles: {backgroundColor: e}}))
  };

  return (
    <div className='opsly-element-sidebar'>
      <p className='opsly-element-sidebar__title'>Style</p>
      <div className='opsly-element-sidebar__color-container'>
        {colorList.map((e, i) => <div key={i} className='opsly-element-sidebar__color-picker'
                                      onClick={() => onColorPick(e)} style={{backgroundColor: e}}/>)}
      </div>
    </div>);
};

export default ElementSidebar;
