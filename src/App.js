import React from 'react';
//import AgGrid from "./components/AgGrid/AgGrid";
import Menu from './components/drawer/Menu';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../src/reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
function App() {
  return (
      <div className="App">
        <Provider store={store}>
          <Menu/>
        </Provider>
      </div>
  );
}

export default App;
