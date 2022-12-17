import Link from 'next/link'
import Layout from '../components/layout'
import Pub from '../components/pub'
import { formatgiorno } from "../utils/helpers"
import Image from 'next/image'
export default function Home() {
  return (
    <Layout title={'Home'}

    description={'Prodotti di seconda mano'}
    >
        <span>Novità </span>
    <div>
    <Image src="/sfondo.png" width={450} height={350} alt="intro"/>      <div>
        <p>
        Uno dei migliori Mercatini per mantenere una economia circolare nel rispetto dell'ambiente per preservare e migliorare il futuro delle nuove generazioni

        </p>
        <div>
<h1>Quali servizi offriamo?</h1>
          <p>
           Effettuiamo sgomberi di appartamenti, cantine e soffitte in tempi rapidi, ritirando gli arredi in buono stato per la vendita.
Preventivi Gratuiti.
          </p>


<h1>Vuoi acquistare?</h1>
          <p>
            per acquistare degli oggetti usati che nuovi, dai una sbirciata nella sezione “Prodotti“
          </p>
        </div>
        <div>
            <h1>Seguici su Facebook</h1>
            <p> e scopri tutti altri prodotti</p>
            
     

        </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.2024604324515!2d9.102235915070493!3d45.42541994405203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c2f5a6b0c7c7%3A0x223d4732ce1ca1aa!2sVia%20Isonzo%2C%2014%2C%2020090%20Buccinasco%20MI!5e0!3m2!1sit!2sit!4v1671008024227!5m2!1sit!2sit" width="450" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    </Layout>


  )
}
