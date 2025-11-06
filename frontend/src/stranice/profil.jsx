import { PORT } from '../config.js';
import NavigacijskaTraka from "./navigacijskatraka.jsx";
import { useState, useEffect } from 'react';

export default function Profil(){
    const [korisnik, setKorisnik] =  useState(() => {
        const spremljen = sessionStorage.getItem("korisnik");
        return spremljen ? JSON.parse(spremljen) : null;
    });
    useEffect(() => {
        if (!korisnik) {
            (async () => {
            const response = await fetch(`http://localhost:${PORT}/auth/provjera-autentifikacije`, {
                credentials: 'include'
            });
            if (response.ok) {
                const podaci = await response.json();
                sessionStorage.setItem('korisnik', JSON.stringify(podaci.korisnik));
                setKorisnik(podaci.korisnik);
            }
            })();
        }
    }, [korisnik]);
    const odjava = async () => {
        try {
        await fetch(`http://localhost:${PORT}/auth/logout`, {
            method: "POST",
            credentials: "include",
            cache: "no-store",
        });
        sessionStorage.removeItem('korisnik');
        window.location.replace("/");
        } catch (err) {
        console.error("Greška pri odjavi:", err);
        }
        };
    if (!korisnik) {
        return ;
    }
    return (
        <>
        <nav>
            <NavigacijskaTraka korisnik={korisnik}/>
        </nav>
        <div className="korisnikPodaci">
        <p>Ime i prezime: {korisnik.ime}</p>
        <p>Email: {korisnik.email}</p>
        <p>Uloga: {korisnik.uloga || "Nije odabrana"}</p>
        <button onClick={odjava}>Odjavi se</button>
        </div>
        </>
    )
}

