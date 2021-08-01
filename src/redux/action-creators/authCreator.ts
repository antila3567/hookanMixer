import {IAuthTypes} from './../types/authTypes';

export const firstStartApp = (bool: boolean) => {
  return {
    type: IAuthTypes.IS_FIRST_TIME,
    payload: bool,
  };
};
