//import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/Homepage';
//import CampsiteCard from './features/campsites/CampsiteCard';
//import CampsitesList from './features/campsites/CampsitesList';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import {CAMPSITES} from './app/shared/CAMPSITES';
import { Routes,Route } from 'react-router-dom';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';

function App() {
  const [campsite1, campsite2, campsite3] = CAMPSITES;
  console.log(campsite2.name);
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='directory' element={<CampsitesDirectoryPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='directory/:campsiteId' 
            element={<CampsiteDetailPage />}
            />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
