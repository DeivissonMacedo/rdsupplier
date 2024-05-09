import React from 'react';
import { Header } from './components/Header/Header';
import './Styles/global.css';
import { UnfilledButton } from './components/Buttons/unfilledButton/unfilledButton';
import { GenericCard } from './components/CardPainel/GenericCard/GenericCard';
import { DisableButton } from './components/Buttons/disableButton/disableButton';
import { GenericFilterPanel } from './components/FilterPanel/GenericFilterPanel/GenericFilterPanel';
import { SearchResults } from './components/SearchResults/SearchResults';
import { Footer } from './components/Footer/Footer';








function App() {
  return (
    <>
    <Header/>
    <SearchResults/>
    <GenericFilterPanel/>
    <GenericFilterPanel/>
    <GenericFilterPanel/>
    <Footer/>
    
   
  
  </>
  );
}

export default App;
