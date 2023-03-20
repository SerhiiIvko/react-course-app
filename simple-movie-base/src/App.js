import './App.css';
import React from 'react';
import { legacy_createStore as createStore } from 'redux';
import allReducers from './reducers/AllReducers';
import { Provider } from 'react-redux';
import WebPage from './components/WebPage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './containers/Header';
import Footer from './containers/Footer';
import MovieDetailsPage from './components/MovieDetailsPage';
import MovieEditPage from './components/MovieEditPage';
import ActorPage from './components/ActorPage';

const store=createStore(allReducers); 

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
// }
function App() {

  //  const token = getToken();

  // if(!token) {
  //   return <RegistrationPage />
  //   // return <LoginPage setToken={setToken} />
  // }

  return (
    <Provider store={store}>
      <div>
        <Header />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/movies" element={<WebPage />}></Route>
          <Route path="/register" element={<RegistrationPage />}></Route>
          <Route path="/movie-details" element={<MovieDetailsPage />}></Route>
          <Route path="/actor-summary" element={<ActorPage />}></Route>
          <Route path="/movie-edit" element={<MovieEditPage />}></Route>
        </Routes>
        
      </BrowserRouter>
      {/* <div className="App"> */}
      {/* <BrowserRouter> */}
        {/* <Routes> */}
          {/* <Route path='/movies' element={<WebPage />} /> */}
          {/* <Route path='/register' element={<RegistrationPage />} /> */}
          {/* <Route path="/movies">
            <WebPage />
          </Route>
          <Route path="/registration">
            <RegistrationPage />
          </Route> */}
        {/* </Routes> */}
        
        {/* <WebPage /> */}
      {/* </div> */}
      <div className="container">
            <Footer />
        </div>
    </Provider>
  );
}

export default App;
