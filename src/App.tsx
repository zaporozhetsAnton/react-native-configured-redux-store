import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import configureStore from './store';
import ExampleComponent from './ExampleComponent';

const {store, persistor} = configureStore();

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ExampleComponent />
      </PersistGate>
    </Provider>
  );
};
export default App;
