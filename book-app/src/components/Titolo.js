import React, {useContext} from 'react';
import {LibriContext} from '../contexts/LibriContext'

const Titolo = () => {
    const {libri} = useContext(LibriContext);
    return ( 
        <div>
            <h1>Questa è la mia lista dei libri</h1>
            <h2>{`al momento hai ${libri.length} libri`}</h2>
        </div>
     );
}
 
export default Titolo;