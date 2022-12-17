import Layout from "../components/layout";
import Link  from "next/link";

export default function Page404() {
  return (
    <Layout 
        title="Pagina non trovata"
    >
        <p className='error'>Pagina non trovata</p>
        <Link legacyBehavior  href='/'>        
        <a className="error-collegamento">Ritorna</a>
        </Link>

    </Layout>
  )
}
