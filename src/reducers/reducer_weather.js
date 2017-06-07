import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //Don't push on array.  use concat or ...
      //return state.concat([action.payload.data]);
      return [action.payload.data, ...state]
  }
  return state;
}
