import {IMixesState, IMixesActions, IMixesTypes} from './../types/mixesTypes';

const init: IMixesState = {
  mixes: [],
};

const mixesReducer = (state = init, action: IMixesActions): IMixesState => {
  switch (action.type) {
    case IMixesTypes.ADD_FAVORITE_MIX:
      return {...state, mixes: [...state.mixes, action.payload]};
    case IMixesTypes.REMOVE_FAVORITE_MIX:
      const filterArr = state.mixes.filter(item => item.id !== action.payload);
      return {...state, mixes: filterArr};
    default:
      const isAllActions: never = action;
  }
  return state;
};

export default mixesReducer;
