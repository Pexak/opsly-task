export const ACTIONS = {
  ADD_CANVAS_OBJECT: 'OPSLY/ADD_CANVAS_OBJECT',
  ADD_CANVAS_OBJECT_STYLES: 'OPSLY/ADD_CANVAS_OBJECT_STYLES',
  SELECT_CANVAS_OBJECT: 'OPSLY/SELECT_CANVAS_OBJECT',
};

// not passing coordinates will set the default position
export const addCanvasObject = ({type, coordinates, styles}) => ({
  type: ACTIONS.ADD_CANVAS_OBJECT,
  payload: {type, coordinates, styles}
});

export const addCanvasObjectStyles = ({i, styles}) => ({
  type: ACTIONS.ADD_CANVAS_OBJECT_STYLES,
  payload: {i, styles}
});

export const selectCanvasObject = i => ({
  type: ACTIONS.SELECT_CANVAS_OBJECT,
  payload: i
});
