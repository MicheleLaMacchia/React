import React, {useContext, useState} from 'react';
import { LibriContext } from '../contexts/LibriContext';

const AggiungiLibri = () => {
    const {aggiungiLibro} = useContext(LibriContext);

    const [titolo, setTitolo] = useState('');
    const [autore, setAutore] = useState('');

    const gestisciSubmit = (e) => {
        e.preventDefault();
        aggiungiLibro(titolo,autore);
        setTitolo('');
        setAutore('');
    }

    return ( 
        <div>
            <form onSubmit={gestisciSubmit}>
                <input type="text" required value={titolo} placeholder="inserire titolo" 
                onChange={(e) => setTitolo(e.target.value)}/>
                <input type="text" required value={autore} placeholder="inserire autore" 
                onChange={(e) => setAutore(e.target.value)}/>
                <input type="submit" value='aggiungi titolo' />
            </form>
        </div>
     );
}
 
export default AggiungiLibri;