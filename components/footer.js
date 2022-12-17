import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'
import styles from '../styles/footer.module.css'


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contenuto}>
      <nav className={styles.navigation}>

               <div className={styles.interni}>
               <h3 >Scopri</h3>
               <div>
                <p>Abbigliamenti</p>
                <p>Arredamenti</p>
                <p>Arredamenti</p>
                <p>Arredamenti</p>
                </div>
              </div>
              <div className={styles.interni}>
               <h3 >cetegorie</h3>
               <div>
                <p>Abbigliamenti</p>
                <p>Arredamenti</p>
                <p>Arredamenti</p>
                <p>Arredamenti</p>
                </div>
                </div>

              <div className={styles.interni}>
              <h3>Contattaci</h3>
              <div>
                <p>Via Isonzo 14, Milano</p>
                <p>Tel: 3756932833</p>
              </div>
              <h3 className={styles.seguici}>Seguici</h3>
              <Image src="/iconfacebook.png" width={25} height={25} alt="Logo"/>
              <Image src="/iconwhatsapp.png" width={25} height={25} alt="Logo whatsapp"/>
              </div>
            </nav>
          </div>
          <div>
            <p className={styles.diritti}>©Mercatino di Buccinasco - Via Isonzo - 20090 Buccinasco(MI) Tel. 02.454400779 - Codice fiscale e partita i.v.a. 02706280183 {new Date().getFullYear()}</p>
          </div>
    </footer>
  )
}
