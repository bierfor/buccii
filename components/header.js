import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import styles from '../styles/header.module.css'

export default function Header() {
        const router = useRouter()


  return (
    <header className={styles.header}>
        <div className={`contenitore ${styles.barra}`}>
            <Link className={styles.titolo} href="/">
            <h1 >Mercatino di Buccinasco</h1>
            </Link>
            <nav className={styles.navigation}>
                <Link legacyBehavior href="/">
                    <a className={router.pathname === '/' ? styles.active : ''}>
                        HOME
                    </a>
                </Link>
                <Link legacyBehavior href="/chisiamo">
                <a className={router.pathname === '/chisiamo' ? styles.active : ''}>
                CHI SIAMO
                    </a>
                </Link>
                <Link legacyBehavior href="/contatti">
                <a className={router.pathname === '/contatti' ? styles.active : ''}>
              Contatti
                    </a>
                </Link>
                <Link legacyBehavior href="/blog">
                <a className={router.pathname === '/blog' ? styles.active : ''}>
                BLOG
                    </a>
                </Link>
                <Link legacyBehavior href="/prodotti">
                <a className={router.pathname === '/prodotti' ? styles.active : ''}>
                PRODOTTI
                    </a>
                </Link>
            </nav>
        </div>
    </header>
  )
}
