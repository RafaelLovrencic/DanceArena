import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../izgled/suceljeDodajNatjecanja.css'

export default function DodajNatjecanje({onClose}) {
    const [podaciNatjecanje, setPodaciNatjecanje] = useState({ime: '', opis: '', lokacija: '', kotizacija: '', dobnaKategorija: '', stilPlesa: '', velicinaGrupa: '', sudci: ''});
    const [datum, setDatum] = useState(null);
    const napraviPromjenu = (e) => {
        const { name, value } = e.target;
        setPodaciNatjecanje(prev => ({ ...prev, [name]: value }));
    };
    return (
        <>
            <div className="sucelje">
                <form className='formaZaNatjecanja'>
                    <div className="imeNatj">
                        <label>Ime natjecanja:</label>
                        <input type="text" value={ime} onChange={napraviPromjenu}/>
                    </div>
                    <div className="opisNatj">
                        <label>Opis natjecanja:</label>
                        <textarea  value={opis} onChange={napraviPromjenu} style={{width: '560px', height: '80px', maxHeight: '200px', minHeight: '40px'}}/>
                    </div>
                    <div className="datumNatj">
                        <label>Datum natjecanja:</label>
                        <DatePicker selected={datum} onChange={(date) => setDatum(date)} dateFormat="dd.MM.yyyy"/>
                    </div>
                    <div className="lokacijaNatj">
                        <label>Lokacija:</label>
                        <input type='text' value={lokacija} onChange={napraviPromjenu}/>
                    </div>
                    <div className='dobnaKategorija'>
                        <label>Dobna kategorija:</label>
                        <select value={dobnaKategorija} onChange={napraviPromjenu}>
                            <option value=""></option>
                            <option value="djeca">Djeca</option>
                            <option value="juniori">Juniori</option>
                            <option value="seniori">Seniori</option>
                        </select>
                    </div>
                    <div className='stilPlesa'>
                        <label>Stil plesa:</label>
                        <select value={stilPlesa} onChange={napraviPromjenu}>
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
                        <select value={velicinaGrupa} onChange={napraviPromjenu}>
                            <option value=""></option>
                            <option value="solo">Solo</option>
                            <option value="duo">Duo</option>
                            <option value="mala grupa">Mala grupa (3-8)</option>
                            <option value="formacija">Formacija ({'>'}9)</option>
                        </select>
                    </div>
                    <div className='kotizacija'>
                        <label>Kotizacija:</label>
                        <input type='text' value={kotizacija} onChange={napraviPromjenu}/>
                    </div>
                    <div className='sudci'>
                        <label>Sudci:</label>
                        <textarea type='text' placeholder={'Ivan Horvat\nAna Kovač\nMarko Babić\n...'} value={sudci} onChange={napraviPromjenu}/>
                    </div>
                    <div className='submitOdustani'>
                        <button type="submit">Stvori natjecanje</button>
                        <button onClick={onClose}>Odustani</button>
                    </div>
                </form>
            </div>
        
        </>
    )
}