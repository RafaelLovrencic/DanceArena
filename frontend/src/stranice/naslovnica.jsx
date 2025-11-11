import "../izgled/naslovnica.css";
import NavigacijskaTraka from "./navigacijskatraka.jsx";
import {Link} from 'react-router-dom';
import { useAuth } from "../kontekst/AuthContext";

export default function Naslovnica() {
  const { loading } = useAuth();
  return (
    <>
      <nav>
          {!loading && <NavigacijskaTraka />}
      </nav>
      <section className="brziStart">
        <h1 className="dobrodoslica">Dobrodošli u DanceArenu!</h1>
        <div className='precaci'>
        <Link to="/natjecanja" className="svaNatjecanja">Sva natjecanja</Link>
        {/* <button className='noviDogadaj'>Stvori novi događaj</button> */}
      </div>
    </section>
      <div className="obavijesti">
        <h1 className="obavijestiTekst">Obavijesti i nova događanja</h1>
      </div>
    </>
  );
}
