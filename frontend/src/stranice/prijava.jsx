import '../izgled/prijava.css'
import NavigacijskaTraka from './navigacijskatraka.jsx';

export default function Prijava() {
    return (
        <>
            <nav>
              <NavigacijskaTraka />
            </nav>
            <div className="stranicaPrijava">
                <div className="tekst">
                    <h1 className='Prijava'>Prijavi se!</h1>
                    <p className='opisPrijave'>Već imaš račun? Klikni ovdje.</p>
                </div>
            </div>
        </>
    )
}