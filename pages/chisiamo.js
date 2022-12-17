import Link from "next/link";
import Layout from "../components/layout";
import Image from "next/image";
import style from "../styles/chisiamo.module.css"
export default function Chisiamo() {
  return (
    <Layout
    title={"Chi siamo"}
    description="Scropi"
    >

      <main className="contenitore">
        <h2 className="heading">Chi Siamo</h2>
        
        <div className={style.contenuto}>
          <Image src="/nosotros.jpg" width={1000} height={800} alt="Chi siamo"/>
          <div>
            <p>
              Siamo un be
            </p>
<p>
ut egestas tellus auctor nec. Aenean congue. Donec orci nisi, consectetur sed egestas sit amet, ultricies at nibh. Mauris eu tellus quis risus sodales egestas ut sit amet nisi. Nullam imperdiet at tellus ac sollicitudin. Curabitur id felis vitae felis convallis tempus vel quis orci. Aenean nibh dui, commodo sit amet lorem vitae, posuere suscipit sapien. Cras maximus quam a fringilla dictum. Nunc sollicitudin a ex vitae tempus. Curabitur a felis ut lorem tempus fermentum eu eget tortor. Nulla blandit ante vitae nisl fringilla tempus. Maecenas at sagittis orci, mattis porta leo. Nulla facilisi. Vivamus libero est, ultricies id leo vitae, commodo commodo arcu. Nullam sodales, diam sit amet blandit mattis, purus sem iaculis orci, elementum feugiat ante est sit amet orci.</p>
          </div>
        </div>
      
      </main>

    </Layout>
  )
}
