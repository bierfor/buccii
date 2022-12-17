import Link from "next/link";
import Layout from "../components/layout";
import Elettronica from "../components/Elettronica.js";
import styles from '../styles/grid.module.css'

export default function Prodotti({elettronicas}) {

  return (
    <Layout
    title={"Prodotti"}
    description="Scropi i nuovi arrivi"
    >

      <main className="contenitore">
        <h2 className="heading"> I Nostri Prodotti</h2>
<div className={styles.grid}>
      {elettronicas?.map(elettronica => (
        <Elettronica
          key={elettronica.id}
          elettronica={elettronica.attributes}
        />
      ))}
</div>
      </main>
    </Layout>
  )
}
export async function getServerSideProps(){
  const risposta = await fetch(`${process.env.API_URL}/elettronicas?populate=imagen`, { Authorization: `b417b9f7007799ee7bb0b70108d1dacbed88c2f234239c4fa050eabf6c54c9c2f6dbb516b0018f9b95a64ac07478e355883a573da7294086c7ffeacab766b4cd8b81ce04801c8b78ce7b3db1cc596897aa2e2759a223ca8ff17e435cdd9dc0796cfa18276dbff0928c0f590fe9183d9953188e9d80933a39efda417b2e7c0a46` })
  const {data: elettronicas} = await risposta.json()

  
  return{
    props: {
      elettronicas
    }
  }
}