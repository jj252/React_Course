//import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

//import CampsiteCard from './features/campsites/CampsiteCard';
//import CampsitesList from './features/campsites/CampsitesList';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import {CAMPSITES} from './app/shared/CAMPSITES';

function App() {
  const [campsite1, campsite2, campsite3] = CAMPSITES;
  console.log(campsite2.name);
  return (
    <div className="App">
      <Header />
        <CampsitesDirectoryPage />
      <Footer />
    </div>
  );
}

export default App;
