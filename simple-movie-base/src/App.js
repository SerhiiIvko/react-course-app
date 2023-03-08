import './App.css';
import React from 'react';
import { legacy_createStore as createStore } from 'redux';
import allReducers from './reducers/AllReducers';
import { Provider } from 'react-redux';
import WebPage from './components/WebPage';

 const store=createStore(allReducers); 

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <WebPage />
      </div>
    </Provider>
  );
}

export default App;
