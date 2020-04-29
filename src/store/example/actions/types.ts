import {SomeInterface} from '../reducers/types';

export enum ExampleActionTypes {
  LOREM_IPSUM = 'LOREM_IPSUM',
  ASYNC_LOREM = 'ASYNC_LOREM',
}

interface FirstActionType {
  type: ExampleActionTypes.LOREM_IPSUM;
  payload: SomeInterface;
}

interface SecondActionType {
  type: ExampleActionTypes.ASYNC_LOREM;
}

export type ExampleActions = FirstActionType | SecondActionType;
