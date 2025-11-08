import '../izgled/natjecanja.css'
import NavigacijskaTraka from './navigacijskatraka.jsx'
import DodajNatjecanje from "./suceljeDodajNatjecanje.jsx";
import {useState, useEffect} from 'react'

export default function Natjecanja() {
    const [loading, setLoading] = useState(true);
    const [competitions, setCompetitions] = useState([]);
    const [pokaziSucelje, setPokaziSucelje] = useState(false);
    const [odabranoNatjecanje, setOdabranoNatjecanje] = useState(null);
    const [podaciZaUredi, setPodaciZaUredi] = useState(null);
    const dohvatiPodatkeONatjecanju = async () => {
        if (!odabranoNatjecanje) return;
        const response = await fetch(`http://localhost:5001/natjecanja/${odabranoNatjecanje._id}`);
        const data = await response.json();
        console.log(data);
        setPodaciZaUredi(data);
        setPokaziSucelje(true);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5001/natjecanja');
                const data = await response.json();
                setCompetitions(data);
            } catch (err) {
                console.error('Greška kod dohvaćanja natjecanja:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    /*const test = async () => 
    { try 
        { const response = await fetch("http://localhost:5001/natjecanja/690e668b652282d76a7b68fa"); 
            const data = await response.json(); 
            console.log(data); 
        } catch (err) 
        { 
            console.error("Greška:", err); 
        } 
    }*/
   const obrisiNatjecanje = async () => {
        try {
            const response = await fetch (`http://localhost:5001/natjecanja/${odabranoNatjecanje._id}`, {
                method: "DELETE",
            });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.poruka || "Greška pri brisanju natjecanja");
        };
        setCompetitions((prev) => 
            prev.filter((comp) => comp._id !== odabranoNatjecanje._id));
        setOdabranoNatjecanje(null);
        alert("Natjecanje uspješno obrisano");
    } catch (err){
        console.error("Greška", err);
        alert("Došlo je do greške pri brisanju natjecanja");
    };
    };
    const osvjeziNatjecanja = async () => {
        try {
            const response = await fetch('http://localhost:5001/natjecanja');
            const data = await response.json();
            setCompetitions(data);
        } catch (err) {
            console.error('Greška kod dohvaćanja natjecanja:', err);
        }
    };
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
                {loading ? (
                    <p className="loader">Učitavanje...</p>
                ) : competitions.length > 0 ? (
                    <table className="tablica">
                    <thead>
                        <tr>
                            <th>Naziv</th>
                            <th>Datum</th>
                            <th>Mjesto</th>
                            <th>Stil plesa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {competitions.map((comp) => (
                            <tr key={comp._id} onClick={() => {
                            if (odabranoNatjecanje?._id === comp._id) {
                            setOdabranoNatjecanje(null); 
                            } else {
                            setOdabranoNatjecanje(comp); 
                            }}} className={odabranoNatjecanje?._id === comp._id ? 'selected' : ''}>
                                <td>{comp.ime}</td>
                                <td>{new Date(comp.datum).toLocaleDateString('hr-HR')}</td>
                                <td>{comp.lokacija}</td>
                                <td>{comp.kategorije?.[0]?.stil || '-'}</td>
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
                <button className="obrisi" onClick={obrisiNatjecanje} style={{backgroundColor: odabranoNatjecanje ? '#2CDE32' : 'rgba(23, 101, 25, 1)', cursor: odabranoNatjecanje ? 'pointer' : 'not-allowed'}}>Obriši natjecanje</button>
            </div>
        </section>
        {pokaziSucelje && (
            <DodajNatjecanje onClose={() => {
                    setPokaziSucelje(false);
                    setPodaciZaUredi(null);
                    setOdabranoNatjecanje(null);
                    osvjeziNatjecanja();
                }}
                natjecanjeZaUredi={podaciZaUredi}
            />
        )}
        
    </>
    )
}