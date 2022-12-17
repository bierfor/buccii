import Link from "next/link"
import Image from "next/image"
import styles from "../styles/blog.module.css"
import { formatgiorno } from "../utils/helpers"
import Layout from "./layout"

export default function Post({post}){

    const {contenuto,imagen,titolo,url,publishedAt} = post
    return(
        <article className={styles.post}>
            <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={ `imagen blog ${titolo}`}/>

            <div className={styles.contenuto}>
                <h3>
                    {titolo}
                </h3>
                <p className={styles.giorno}>
                   {formatgiorno(publishedAt)}
                </p>
                <p className={styles.resume}>
                    {contenuto}
                </p>
                <Link legacyBehavior href={ `/blog/${url}`}>
                    <a className={styles.collegamento}>
                        leer post
                    </a>
                </Link>
            </div>

        </article>
    )
}