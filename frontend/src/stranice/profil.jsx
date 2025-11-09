import { PORT } from '../config.js';
import NavigacijskaTraka from "./navigacijskatraka.jsx";
import { useState, useEffect } from 'react';
import { useAuth } from "../kontekst/AuthContext";

export default function Profil(){
    const { korisnik, odjava } = useAuth();
    return (
        <>
        <nav>
            <NavigacijskaTraka />
        </nav>
        <div className="korisnikPodaci">
        <p>Ime i prezime: {korisnik.ime}</p>
        <p>Email: {korisnik.email}</p>
        <p>Uloga: {korisnik.role || "Nije odabrana"}</p>
        <button onClick={odjava}>Odjavi se</button>
        </div>
        </>
    )
}

