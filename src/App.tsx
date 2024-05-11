import React, { Component } from 'react';
import { Header } from './components/Header/Header';
import './Styles/global.css';
import { UnfilledButton } from './components/Buttons/unfilledButton/unfilledButton';
import { GenericCard } from './components/CardPainel/GenericCard/GenericCard';

import { DisableButton } from './components/Buttons/disableButton/disableButton';
import { GenericFilterPanel } from './components/FilterPanel/GenericFilterPanel/GenericFilterPanel';
import { SearchResults } from './components/SearchResults/SearchResults';
import { Footer } from './components/Footer/Footer';
import CardCategory from "@raiadrogasil/pulso-react-components/CardCategory";
import { CardValue, ThemeProvider } from "@raiadrogasil/pulso-react-components/";
import { MainSearch } from './routes/MainSearch/MainSearch';
import  { useEffect, useState } from "react";

import { Outlet } from 'react-router-dom';








function App() {


  return (
    <>
      <ThemeProvider theme='raiadrogasil'>
        <Header />
        <body>
       
       
        <Outlet/>
          

        </body>


        <Footer />

      </ThemeProvider>
     
    </>
  );
}

export default App;
