import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import './canvas-object.sass';
import {selectCanvasObject} from '../../../actions/canvas-objects.action';

const CanvasObject = ({i, type, defaultCoordinates, containerPosition, styles, isSelected}) => {
  const dispatch = useDispatch();
  const [coordinates, setCoordinates] = useState(defaultCoordinates);
  const [dragging, setDragging] = useState(false);

  const getPositionStyles = () => {
    if (coordinates) {
      return {top: coordinates.top, left: coordinates.left}
    }
    return {}
  };

  const getSelectedStyles = () => {
    if(!isSelected) return;
    return {border: '1px solid black'}
  };

  const onMouseDown = e => {
    if (e.button !== 0) return;
    dispatch(selectCanvasObject(i));
    setDragging(true);

    e.stopPropagation();
    e.preventDefault();
  };

  const onMouseUp = e => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const onMouseMove = e => {
    if (!dragging) return;
    setCoordinates({top: `${e.pageY - containerPosition.y - 50}px`, left: `${e.pageX - containerPosition.x - 50}px`})
  };

  return <div onMouseMove={onMouseMove}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
              className={`opsly-cavnas-object opsly-cavnas-object--${type.toLowerCase()}`}
              style={{...getPositionStyles(), ...getSelectedStyles(), ...styles}}/>;

};

export default CanvasObject;
