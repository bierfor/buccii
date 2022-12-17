import Layout from "../../components/layout"
import { useRouter } from "next/router"
import Image from "next/image"
import {formatgiorno} from '../../utils/helpers'
import styles from '../../styles/blog.module.css'


export default function Post(post) {
    const{titolo,contenuto,imagen,publisheAt} = post[0].attributes
  return (
    <Layout> 
      <div>
        <h1>{titolo}</h1>
        <h2>{contenuto}</h2>
      </div>

    </Layout>
  )
}

export async function getServerSideProps({query:{url}}){

  const risposta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`, { Authorization: `b417b9f7007799ee7bb0b70108d1dacbed88c2f234239c4fa050eabf6c54c9c2f6dbb516b0018f9b95a64ac07478e355883a573da7294086c7ffeacab766b4cd8b81ce04801c8b78ce7b3db1cc596897aa2e2759a223ca8ff17e435cdd9dc0796cfa18276dbff0928c0f590fe9183d9953188e9d80933a39efda417b2e7c0a46` })
      const {data:post}= await risposta.json()
    
      return{
          
      props:{
       post

     }
  
} 

}
