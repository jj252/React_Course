//import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

//import CampsiteCard from './features/campsites/CampsiteCard';
import CampsitesList from './features/campsites/CampsitesList';
//import {CAMPSITES} from './app/shared/CAMPSITES';

function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesList />
      <Footer />
    </div>
  );
}

export default App;
