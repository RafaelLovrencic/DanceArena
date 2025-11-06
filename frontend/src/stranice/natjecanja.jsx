import '../izgled/natjecanja.css'
import NavigacijskaTraka from './navigacijskatraka.jsx'
import natjecanjaData from '../data/natjecanjaData.json'
import DodajNatjecanje from "./suceljeDodajNatjecanje.jsx";
import {useState} from 'react'

export default function Natjecanja() {
    const [competitions, setCompetitions] = useState(natjecanjaData);
    const [pokaziSucelje, setPokaziSucelje] = useState(false);
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
                            <tr key={comp.id}>
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
                <button className="uredi">Uredi natjecanje</button>
                <button className="obrisi">Obriši natjecanje</button>
            </div>
        </section>
        {pokaziSucelje && (
            <DodajNatjecanje onClose={() => setPokaziSucelje(false)} />
        )}
        
    </>
    )
}