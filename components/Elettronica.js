import Image from 'next/image'
import Link from 'next/link'
import style from '../styles/elettronica.module.css'

export default function Elettronica({elettronica}) {


  const{ descrizione,imagen, prezzo, url ,nome, prodotti , data} = elettronica

  return (
    <div className={style.elettronica}>
      <Image src={imagen.data.attributes.formats.medium.url} width ={600} height={400} alt={`imagine prodotti ${nome}`} />
      <div className={style.contenuto}>
        <h3>{nome}</h3>
        <p className={style.descrizione}>{descrizione}</p>
        <p className={style.prezzo}>${prezzo}</p>
        <Link legacyBehavior href={`/elettronica/${url}`}>
          <a className={style.collegamento}>Scopri di piu</a>
        </Link>

      </div>
    </div>

    
  )
}
