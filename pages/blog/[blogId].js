import Head from 'next/head';

export default function Blog({ title, description }) {
   return(
       <>
         <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
         </Head>
         <h1 className='content'>Artical</h1>
       </>
   )
}
export async function getStaticPaths() {
  return {
      paths: [{ params: { blogId: '1' }}],
      falback: false,
  }
}

export async function getStaticProps() {
    return {
        props: {
            title: 'Article Title',
            description: 'Article description'
        },
    }
}