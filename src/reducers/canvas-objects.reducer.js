import produce from "immer"
import {ACTIONS} from '../actions/canvas-objects.action';

const initialState = {
  objects: [],
  selectedObjectIndex: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_CANVAS_OBJECT:
      return {...state, objects: [...state.objects, action.payload]};

    case ACTIONS.ADD_CANVAS_OBJECT_STYLES:
      return produce(state, draftState => {
        draftState.objects[action.payload.i].styles = action.payload.styles;
      });

    case ACTIONS.SELECT_CANVAS_OBJECT:
      return { ...state, selectedObjectIndex: action.payload};

    default:
      return state
  }
}
