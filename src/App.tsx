import React from 'react';
import './stylesheets/App.scss';
import Header from './components/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';
import Footer from './components/Footer/Footer';

const App = () => (
  <div>
    <Header />
    <MainPage />
    <Footer />
  </div>
);

export default App;
