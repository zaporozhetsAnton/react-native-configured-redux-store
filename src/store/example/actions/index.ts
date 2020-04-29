import {ExampleActions, ExampleActionTypes} from './types';
import {SomeInterface} from '../reducers/types';

export const firstAction = (payload: SomeInterface): ExampleActions => ({
  type: ExampleActionTypes.LOREM_IPSUM,
  payload,
});

export const secondAction = (): ExampleActions => ({
  type: ExampleActionTypes.ASYNC_LOREM,
});
