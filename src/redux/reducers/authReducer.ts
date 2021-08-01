import {IAuth, IAuthActions, IAuthTypes} from './../types/authTypes';

const init: IAuth = {
  isFirstTime: true,
};

const authReducer = (state = init, action: IAuthActions): IAuth => {
  switch (action.type) {
    case IAuthTypes.IS_FIRST_TIME:
      return {...state, isFirstTime: action.payload};
    default:
      const isAllActions: never = action;
  }
  return state;
};

export default authReducer;
