import {ExampleState} from './types';
import {ExampleActions, ExampleActionTypes} from '../actions/types';

const initialState: ExampleState = {
  someArr: [],
};

const ExampleReducer = (
  state = initialState,
  action: ExampleActions,
): ExampleState => {
  switch (action.type) {
    case ExampleActionTypes.LOREM_IPSUM:
      return {
        someArr: [...state.someArr, action.payload],
      };
    default:
      return state;
  }
};

export default ExampleReducer;
