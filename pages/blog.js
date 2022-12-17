import Layout from "../components/layout"
import Post from "../components/post"
import styles from '../styles/grid.module.css';

export default function Blog({posts}) {
  return (
    <Layout
    title={"Blog"}
    description="Scropi i nuovi arrivi"
    >

        <main className="contenitore">
          <h1 className="heading">blog</h1>
            <div className={styles.grid}>
                {posts?.map(post => (
                 <Post
                  key={post.id}
                  post={post.attributes}
                 />
                 
                 ))}
            </div>
        </main>

    </Layout>
  )
}

export async function getServerSideProps(){
  const risposta = await fetch(`${process.env.API_URL}/posts?populate=imagen`, { Authorization: `b417b9f7007799ee7bb0b70108d1dacbed88c2f234239c4fa050eabf6c54c9c2f6dbb516b0018f9b95a64ac07478e355883a573da7294086c7ffeacab766b4cd8b81ce04801c8b78ce7b3db1cc596897aa2e2759a223ca8ff17e435cdd9dc0796cfa18276dbff0928c0f590fe9183d9953188e9d80933a39efda417b2e7c0a46` })
  const {data: posts} = await risposta.json()

  
  return{
    props: {
      posts
    }
  }
}