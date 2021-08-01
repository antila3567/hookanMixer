export interface Mix {
  id: number;
  mix: [
    {
      color: string;
      percentage: number;
      tabak: string;
      vkus: string;
    },
  ];
}

export interface IMixesState {
  mixes: Mix[];
}

export enum IMixesTypes {
  ADD_FAVORITE_MIX = 'ADD_FAVORITE_MIX',
  REMOVE_FAVORITE_MIX = 'REMOVE_FAVORITE_MIX',
}

interface INewFavorite {
  type: IMixesTypes.ADD_FAVORITE_MIX;
  payload: Mix;
}

interface IRemoveFavorite {
  type: IMixesTypes.REMOVE_FAVORITE_MIX;
  payload: number;
}

export type IMixesActions = INewFavorite | IRemoveFavorite;
