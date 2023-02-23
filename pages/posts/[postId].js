function Post({ post }){
   return(
       <>
           <h1>details of post</h1>
           <br/>
                  <h2>
                    {post.id} {post.title}
                  </h2>
                  <p>{post.body}</p>
                  <hr/>
        </>
   )
}
export default Post;

export async function getStaticPaths(){
  // const responsive = await fetch('https://jsonplaceholder.typicode.com/posts');
  // const data = await responsive.json();
  // const paths = data.map(post=>{
  //    return {
  //       params :{
  //         postId: `${post.id}`
  //       }
  //    }
  // })
   return {
       paths: [
          {
            params: { postId : '1' }
          },
          {
            params: { postId : '2' }
          },
          {
            params: { postId : '3' }
          },
          {
            params: { postId : '4' }
          },
        ],
        // paths,
        fallback: 'blocking',
   }
}

export async  function getStaticProps(context) {
  const { params } = context;
  const responsive = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  const data = await responsive.json();
  if(!data.id){
    return {
      notFound: true,
    }
  }
  return{
      props: {
         post:data,
      },
  }
}; 