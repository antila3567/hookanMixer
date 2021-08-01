import {Mix, IMixesTypes} from './../types/mixesTypes';

export const addNewFavorite = (mix: Mix) => {
  return {
    type: IMixesTypes.ADD_FAVORITE_MIX,
    payload: mix,
  };
};
export const removeFavorite = (id: number) => {
  return {
    type: IMixesTypes.REMOVE_FAVORITE_MIX,
    payload: id,
  };
};
