import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../izgled/suceljeDodajNatjecanja.css';

export default function DodajNatjecanje({onClose, natjecanjeZaUredi}) {
    const [podaciNatjecanje, setPodaciNatjecanje] = useState(() => {
        if (natjecanjeZaUredi) {
            return {
                ime: natjecanjeZaUredi.naziv || '',
                opis: natjecanjeZaUredi.opis || '',
                datum: natjecanjeZaUredi.datum ? new Date(natjecanjeZaUredi.datum) : null,
                lokacija: natjecanjeZaUredi.mjesto || '',
                kotizacija: natjecanjeZaUredi.kotizacija || '',
                dobnaKategorija: natjecanjeZaUredi.kategorija || '',
                stilPlesa: natjecanjeZaUredi.stil || '',
                velicinaGrupa: natjecanjeZaUredi.velicina || '',
                sudci: (natjecanjeZaUredi.sudci || []).join('\n'),
            };
        }
        return {
            ime: '', opis: '', datum: null, lokacija: '', kotizacija: '',
            dobnaKategorija: '', stilPlesa: '', velicinaGrupa: '', sudci: ''
        };
    });
    const napraviPromjenu = (e) => {
        const { name, value } = e.target;
        setPodaciNatjecanje(prev => ({ ...prev, [name]: value }));
    };
    const pohraniPromjene = async (e) => {
        e.preventDefault();
        const sudciPolje = podaciNatjecanje.sudci.split('\n').map(s => s.trim()).filter(s => s !== '');;
        if (sudciPolje.length < 3) return alert('Morate unijeti najmanje 3 suca.');
        if (sudciPolje.length % 2 === 0) return alert('Broj sudaca mora biti neparan.');

        const method = natjecanjeZaUredi ? 'PUT' : 'POST';
        const url = natjecanjeZaUredi 
        ? `http://localhost:5000/natjecanja/${natjecanjeZaUredi.id}`
        : `http://localhost:5000/natjecanja`;
        const podaci = {...podaciNatjecanje, sudci: sudciPolje};
        try {
            const response = await fetch(url, { 
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(podaci)
            }); 
            if (!response.ok) {
                throw new Error('Greška pri slanju podataka');
            }
            const result = await response.json();
            console.log('Uspješno poslano:', result);
            onClose(); 
        } catch (error) {
            console.error(error);
            alert('Došlo je do pogreške pri slanju podataka');
        }
    }
    return (
        <>
            <div className="sucelje">
                <form className='formaZaNatjecanja' onSubmit={pohraniPromjene}>
                    <div className="imeNatj">
                        <label>Ime natjecanja:</label>
                        <input name="ime" type="text" value={podaciNatjecanje.ime} onChange={napraviPromjenu} required/>
                    </div>
                    <div className="opisNatj">
                        <label>Opis natjecanja:</label>
                        <textarea name="opis" value={podaciNatjecanje.opis} onChange={napraviPromjenu} required/>
                    </div>
                    <div className="datumNatj">
                        <label>Datum natjecanja:</label>
                        <DatePicker selected={podaciNatjecanje.datum} onChange={(date) => setPodaciNatjecanje(prev => ({ ...prev, datum: date }))} dateFormat="dd.MM.yyyy" required/>
                    </div>
                    <div className="lokacijaNatj">
                        <label>Lokacija:</label>
                        <input name="lokacija" type='text' value={podaciNatjecanje.lokacija} onChange={napraviPromjenu} required/>
                    </div>
                    <div className='dobnaKategorija'>
                        <label>Dobna kategorija:</label>
                        <select name="dobnaKategorija" value={podaciNatjecanje.dobnaKategorija} onChange={napraviPromjenu} required>
                            <option value=""></option>
                            <option value="djeca">Djeca</option>
                            <option value="juniori">Juniori</option>
                            <option value="seniori">Seniori</option>
                        </select>
                    </div>
                    <div className='stilPlesa'>
                        <label>Stil plesa:</label>
                        <select name="stilPlesa" value={podaciNatjecanje.stilPlesa} onChange={napraviPromjenu} required>
                            <option value=""></option>
                            <option value="balet">Balet</option>
                            <option value="hiphop">Hiphop</option>
                            <option value="jazz">Jazz</option>
                            <option value="step">Step</option>
                            <option value="break">Break</option>
                        </select>
                    </div>
                    <div className='velicinaGrupa'>
                        <label>Veličina grupa:</label>
                        <select name="velicinaGrupa" value={podaciNatjecanje.velicinaGrupa} onChange={napraviPromjenu} required>
                            <option value=""></option>
                            <option value="solo">Solo</option>
                            <option value="duo">Duo</option>
                            <option value="mala grupa">Mala grupa (3-8)</option>
                            <option value="formacija">Formacija ({'>'}9)</option>
                        </select>
                    </div>
                    <div className='kotizacija'>
                        <label>Kotizacija:</label>
                        <input name="kotizacija" type='text' value={podaciNatjecanje.kotizacija} onChange={napraviPromjenu} required/>
                    </div>
                    <div className='sudci'>
                        <label>Sudci:</label>
                        <textarea name="sudci" type='text' placeholder={'Ivan Horvat\nAna Kovač\nMarko Babić\n...'} value={podaciNatjecanje.sudci} onChange={napraviPromjenu} required/>
                    </div>
                    <div className='submitOdustani'>
                        <button type="submit">Stvori natjecanje</button>
                        <button type='button' onClick={onClose}>Odustani</button>
                    </div>
                </form>
            </div>
        
        </>
    )
}