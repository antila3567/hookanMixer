export interface IAuth {
  isFirstTime: boolean;
}

export enum IAuthTypes {
  IS_FIRST_TIME = 'IS_FIRST_TIME',
}

interface IFirstTime {
  type: IAuthTypes.IS_FIRST_TIME;
  payload: boolean;
}

export type IAuthActions = IFirstTime;
