import { useEffect, useState } from "react";
import { useAuth } from "../kontekst/AuthContext";
import "../izgled/naslovnica.css";
import NavigacijskaTraka from "./navigacijskatraka.jsx";
import { PORT } from '../config.js';

export default function Naslovnica() {
  const { korisnik, loading } = useAuth();

  return (
    <>
      <nav>
          {!loading && <NavigacijskaTraka />}
      </nav>
      <section className="brziStart">
        <h1 className="dobrodoslica">Dobrodošli u DanceArenu!</h1>
      </section>
      <div className="obavijesti">
        <h1 className="obavijestiTekst">Obavijesti i nova događanja</h1>
      </div>
    </>
  );
}
