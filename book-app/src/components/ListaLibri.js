import React, {useContext} from 'react';
import { LibriContext } from '../contexts/LibriContext';

const ListaLibri = () => {
    const {libri, rimuoviLibro} = useContext(LibriContext);
    return libri.length ? (
      <div className='book-list'>
         <ul>
            {libri.map(e => (
               <li key={e.id}>
                  <h2 >{e.titolo}</h2>
                  <h3 >{e.autore}</h3>
                  <button onClick={() => rimuoviLibro(e.id)}>elimina libro</button>
               </li>
            ))}
         </ul>
      </div>
    ):(
       <div>
         <h2>Non ci sono libri nella libreria</h2>
       </div>
    )
}
 
export default ListaLibri;