import { useEffect, useState } from 'react';
import '../izgled/naslovnica.css'
import NavigacijskaTraka from './navigacijskatraka.jsx';

export default function Naslovnica() {
  const [korisnik, setKorisnik] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const provjeriKorisnika = async () => {
      try {
        const response = await fetch('http://localhost:5000/auth/provjera-autentifikacije', {
          credentials: 'include',
        });

        if (!response.ok) {
          setKorisnik(null);
          setLoading(false);
          return;
        }

        const podaci = await response.json();
        if (podaci.korisnik) {
          //console.log("Podaci o korisniku:", podaci.korisnik);
          setKorisnik(podaci.korisnik);
        }
        setLoading(false);
      } catch (err) {
        setKorisnik(null);
        setLoading(false);
      }
    };

    provjeriKorisnika();
  }, []);

  const odjava = async () => {
    try {
      await fetch("http://localhost:5000/auth/logout", {
        method: "POST",
        credentials: "include",
      });

    window.location.replace("/"); 
    } catch (err) {
      console.error("Greška pri odjavi:", err);
    }
  };

  return (
  <>
    <nav>
        <NavigacijskaTraka korisnik={korisnik}/>
    </nav>
    <section className='brziStart'>
      <h1 className='dobrodoslica'>Dobrodošli u DanceArenu!</h1>

        {!loading && (
          korisnik ? (
            <div className="korisnikPodaci">
              <p>Ime: {korisnik.ime}</p>
              <p>Email: {korisnik.email}</p>
              <p>Uloga: {korisnik.uloga || "Nije odabrana"}</p>
              <button onClick={odjava}>Odjavi se</button>
            </div>
          ) : (
            <p className="nijePrijavljen">Niste prijavljeni.</p>
          )
        )}
    </section>
    <div className='obavijesti'>
      <h1 className='obavijestiTekst'>Obavijesti i nova događanja</h1>
    </div>
  </>
  );
}
