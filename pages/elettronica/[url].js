import { useRouter } from "next/router"
import Image from 'next/image'
import style from '../../styles/elettronica.module.css'
import Layout from '../../components/layout'
import Link from "next/link"


export default function  Elettronica({elettronica}) {
   const {nome,descrizione,imagen,prezzo} = elettronica[0].attributes
    return (
      <Layout  title={nome}> 
      <div className={style.elettronica}>
      <Image src={imagen.data.attributes.formats.medium.url} width ={600} height={400} alt={`imagine prodotti ${nome}`} />
      <div className={style.contenuto}>
        <h3>{nome}</h3>
        <p className={style.descrizione}>{descrizione}</p>
        <p className={style.prezzo}>${prezzo}</p>
        <Link legacyBehavior href={`https://wa.me/3515552988`}>
          <a className={style.collegamento}>Whatsapp</a>
        </Link>
        <Link legacyBehavior href={`https://Facebook.com/`}>
          <a className={style.collegamento}>Facebook</a>
        </Link>
      </div>
      </div>

      </Layout>
  )
}
export async function getServerSideProps({query:{url}}){

    const risposta = await fetch(`${process.env.API_URL}/elettronicas?filters[url]=${url}&populate=imagen`, { Authorization: `b417b9f7007799ee7bb0b70108d1dacbed88c2f234239c4fa050eabf6c54c9c2f6dbb516b0018f9b95a64ac07478e355883a573da7294086c7ffeacab766b4cd8b81ce04801c8b78ce7b3db1cc596897aa2e2759a223ca8ff17e435cdd9dc0796cfa18276dbff0928c0f590fe9183d9953188e9d80933a39efda417b2e7c0a46` })
        const {data:elettronica}= await risposta.json()
      
        return{
            
        props:{
          elettronica

       }
    
}
}  