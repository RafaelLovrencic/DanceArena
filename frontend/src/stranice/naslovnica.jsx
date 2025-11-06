import { useEffect, useState } from "react";
import "../izgled/naslovnica.css";
import NavigacijskaTraka from "./navigacijskatraka.jsx";
import { PORT } from '../config.js';

export default function Naslovnica() {
  const [korisnik, setKorisnik] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const provjeriKorisnika = async () => {
      try {
        const response = await fetch(
          `http://localhost:${PORT}/auth/provjera-autentifikacije`,
          {
            credentials: "include",
            cache: "no-store",
          }
        );

        if (!response.ok) {
          setKorisnik(null);
          setLoading(false);
          return;
        }

        const podaci = await response.json();
        if (podaci.korisnik) {
          setKorisnik(podaci.korisnik);
        } else {
          setKorisnik(null);
        }
        setLoading(false);
      } catch (err) {
        console.error("Greška pri provjeri korisnika:", err);
        setKorisnik(null);
        setLoading(false);
      }
    };

    provjeriKorisnika();

    const handlePopState = () => {
      window.location.reload();
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const odjava = async () => {
    try {
      await fetch(`http://localhost:${PORT}/auth/logout`, {
        method: "POST",
        credentials: "include",
        cache: "no-store",
      });

      window.location.replace("/");
    } catch (err) {
      console.error("Greška pri odjavi:", err);
    }
  };

  return (
    <>
      <nav>
        <NavigacijskaTraka korisnik={korisnik} />
      </nav>
      <section className="brziStart">
        <h1 className="dobrodoslica">Dobrodošli u DanceArenu!</h1>

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
      <div className="obavijesti">
        <h1 className="obavijestiTekst">Obavijesti i nova događanja</h1>
      </div>
    </>
  );
}
