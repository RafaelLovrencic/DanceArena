import '../izgled/naslovnica.css'
import NavigacijskaTraka from './navigacijskatraka.jsx';

export default function Naslovnica() {
  return (
  <>
    <nav>
      <NavigacijskaTraka />
    </nav>
    <section className='brziStart'>
      <h1 className='dobrodoslica'>Dobrodošli u DanceArenu!</h1>
      <div className='precaci'>
        <button className='svaNatjecanja'>Sva natjecanja</button>
        <button className='noviDogadaj'>Stvori novi događaj</button>
      </div>
    </section>
    <div className='obavijesti'>
      <h1 className='obavijestiTekst'>Obavijesti i nova događanja</h1>
    </div>
  </>
  )
}
