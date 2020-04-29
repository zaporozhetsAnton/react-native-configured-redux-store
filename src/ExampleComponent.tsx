import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import {useTypedSelector} from './store/rootReducer';
import {AppDispatch} from './store';
import {firstAction, secondAction} from './store/example/actions';

export const ExampleComponent = () => {
  const someArr = useTypedSelector((store) => store.example.someArr);
  const dispatch: AppDispatch = useDispatch();

  const addLorem = () =>
    dispatch(firstAction({lorem: 'lorem', ipsum: 'ipsum'}));
  const addLoremAsync = () => dispatch(secondAction());

  return (
    <SafeAreaView>
      <Button title="lorem" onPress={addLorem} />
      <Button title="async lorem" onPress={addLoremAsync} />
      {someArr.length > 0 &&
        someArr.map((element, index) => (
          <Text key={index}>{element.lorem}</Text>
        ))}
    </SafeAreaView>
  );
};
export default ExampleComponent;
