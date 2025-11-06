import '../izgled/natjecanja.css'
import NavigacijskaTraka from './navigacijskatraka.jsx'
import natjecanjaData from '../data/natjecanjaData.json'
import DodajNatjecanje from "./suceljeDodajNatjecanje.jsx";
import {useState} from 'react'

export default function Natjecanja() {
    const [competitions, setCompetitions] = useState(natjecanjaData);
    const [pokaziSucelje, setPokaziSucelje] = useState(false);
    const [odabranoNatjecanje, setOdabranoNatjecanje] = useState(null);
    const [podaciZaUredi, setPodaciZaUredi] = useState(null)
    const dohvatiPodatkeONatjecanju = async (id) => {
        const response = await fetch(`http://localhost:5000/natjecanja/${odabranoNatjecanje.id}`);
        const data = await response.json();
        setPodaciZaUredi(data);  
        setPokaziSucelje(true); 
    }
    return (
    <>
        <nav>
            <NavigacijskaTraka />
        </nav>
        <section className="naslov-sekcija">
            <h1 className="naslov">Popis natjecanja</h1>
        </section>
        <section className="sekcija">
            <div className="tablica-container">
                {competitions.length > 0 ? (
                    <table className="tablica">
                    <thead>
                        <tr>
                            <th>Naziv</th>
                            <th>Datum</th>
                            <th>Mjesto</th>
                            <th>Kategorija</th>
                        </tr>
                    </thead>
                    <tbody>
                        {competitions.map((comp) => (
                            <tr key={comp.id} onClick={() => {
                            if (odabranoNatjecanje?.id === comp.id) {
                            setOdabranoNatjecanje(null); 
                            } else {
                            setOdabranoNatjecanje(comp); 
                            }}} className={odabranoNatjecanje?.id === comp.id ? 'selected' : ''}>
                                <td>{comp.naziv}</td>
                                <td>{comp.datum}</td>
                                <td>{comp.mjesto}</td>
                                <td>{comp.kategorija}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                ) : (
                    <p className="nema">Nema natjecanja!</p>
                )}
            </div> 
            <div className="gumbovi">
                <button className="dodaj" onClick={() => setPokaziSucelje(true)}>Dodaj natjecanje</button>
                <button className="uredi" onClick={dohvatiPodatkeONatjecanju} style={{backgroundColor: odabranoNatjecanje ? '#2CDE32' : 'rgba(23, 101, 25, 1)', cursor: odabranoNatjecanje ? 'pointer' : 'not-allowed'}}>Uredi natjecanje</button>
                <button className="obrisi">Obriši natjecanje</button>
            </div>
        </section>
        {pokaziSucelje && (
            <DodajNatjecanje onClose={() => {
                    setPokaziSucelje(false);
                    setPodaciZaUredi(null);
                    setOdabranoNatjecanje(null);
                }}
                natjecanjeZaUredi={podaciZaUredi}
            />
        )}
        
    </>
    )
}