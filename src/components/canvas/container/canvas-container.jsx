import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import './canvas-container.sass';
import CanvasObject from '../object/canvas-object';

const CanvasContainer = () => {

  const canvasObjects = useSelector(state => state.canvasObjects);
  const refContainer = useRef();
  return (
    <div className='opsly-cavnas-container' ref={refContainer}>
      {canvasObjects.objects.map((e, i) => <CanvasObject {...e} i={i} isSelected={canvasObjects.selectedObjectIndex === i} defaultCoordinates={e.coordinates} containerPosition={refContainer.current.getBoundingClientRect()} key={i}/>)}
    </div>);
};

export default CanvasContainer;
