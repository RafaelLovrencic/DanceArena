import '../izgled/prijava.css'
import NavigacijskaTraka from './navigacijskatraka.jsx';

export default function Prijava() {
    return (
        <>
            <nav>
              <NavigacijskaTraka />
            </nav>
            <div className="stranicaPrijava">
                <div className="prijavaOkvir">
                    <h1 className='Prijava'>Prijava</h1>
                    <h3 className='opisPrijave'>Odaberite račun kojim se želite prijaviti!</h3>
                    <div>
                        <button className='google' onClick={() => window.location.href = '/auth/google'}></button>
                        <button className='facebook' onClick={() => window.location.href = '/auth/facebook'}></button>
                    </div>
                </div>
            </div>
        </>
    )
}