import canvasObjectsReducer, {initialState } from './canvas-objects.reducer';
import { ACTIONS } from '../actions/canvas-objects.action';

describe('canvas objects reducer', () => {
  it('should return the initial state', () => {
    expect(canvasObjectsReducer(undefined, {})).toEqual(initialState);
  });

  it('should set canvas object', () => {
    const state = initialState;
    const action = {
      type: ACTIONS.ADD_CANVAS_OBJECT,
      payload: {type: 'rectangle'},
    };

    expect(canvasObjectsReducer(state, action).objects.length).toEqual(1);
  });

  it('should select canvas object', () => {
    const state = initialState;
    const action = {
      type: ACTIONS.SELECT_CANVAS_OBJECT,
      payload: 5,
    };

    expect(canvasObjectsReducer(state, action).selectedObjectIndex).toEqual(5);
  });

  it('should select canvas object', () => {
    const state = {objects: [{}]};
    const action = {
      type: ACTIONS.ADD_CANVAS_OBJECT_STYLES,
      payload: {i: 0, styles: {backgroundColor: 'pink'}},
    };

    expect(canvasObjectsReducer(state, action).objects[0]).toEqual({styles: {backgroundColor: 'pink'}});
  });
});
