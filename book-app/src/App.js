import React from 'react';
import './App.css';
import AggiungiLibri from './components/AggiungiLibri';
import ListaLibri from './components/ListaLibri';
import Titolo from './components/Titolo';
import LibriContextProvider from './contexts/LibriContext';

const App = () => {
  return (
    <div>
      <LibriContextProvider>
        <Titolo/>
        <ListaLibri/>
        <AggiungiLibri />
      </LibriContextProvider>      
    </div>);
}
 
export default App;
