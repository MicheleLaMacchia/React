import React, { createContext, useEffect, useState } from 'react';

export const LibriContext = createContext();

const LibriContextProvider = (props) => {
    const [libri, setLibri] = useState(
        JSON.parse(localStorage.getItem('libri')) ?
        JSON.parse(localStorage.getItem('libri')) :
        []
    );
    
    useEffect(() =>{
        localStorage.setItem('libri',JSON.stringify(libri))
    },[libri])

    const ottieniId = () => {
        let i = 0;
        for (; i < libri.length; i++) {
            
        }
        return ++i;
    }
    const aggiungiLibro = (titolo, autore) => {
        setLibri([...libri, {titolo, autore, id: ottieniId()}])
    }
    const rimuoviLibro = (id) => {
        setLibri(libri.filter(book => book.id !== id))
    }
    return (
        <LibriContext.Provider value={{libri, aggiungiLibro, rimuoviLibro}}>
            {props.children}
        </LibriContext.Provider>
      );
}
 
export default LibriContextProvider;