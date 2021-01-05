import configureStore from 'redux-mock-store';

import { ACTIONS, addCanvasObject, addCanvasObjectStyles, selectCanvasObject } from './canvas-objects.action';

const mockStore = configureStore();
const store = mockStore();

let expectedActions = [];
describe('canvas objects actions', () => {
  beforeEach(() => {
    store.clearActions();
    expectedActions = [];
  });

  it('should addCanvasObject', () => {
    store.dispatch(addCanvasObject({type: 'rectangle'}));
    expectedActions.push({ type: ACTIONS.ADD_CANVAS_OBJECT, payload: {type: 'rectangle', coordinates: undefined, styles: undefined} });
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should addCanvasObjectStyles', () => {
    store.dispatch(addCanvasObjectStyles({i: 1, styles: {backgroundColor: 'pink'}}));
    expectedActions.push({ type: ACTIONS.ADD_CANVAS_OBJECT_STYLES, payload: {i: 1, styles: {backgroundColor: 'pink'}} });
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should selectCanvasObject', () => {
    store.dispatch(selectCanvasObject(1));
    expectedActions.push({ type: ACTIONS.SELECT_CANVAS_OBJECT, payload: 1 });
    expect(store.getActions()).toEqual(expectedActions);
  });
});
