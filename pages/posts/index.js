import Link from "next/link";
export default function PostList({ posts }){
  return(
     <>
       <h1>List of post</h1>
       <br/>
       {
        posts.map((post)=>{
           return(
               <div key={post.id}>
                  <Link href={`posts/${post.id}`}>
                  <h2>
                    {post.id} {post.title}
                  </h2>
                  </Link>
                  <hr />
               </div>
           )
        })}
     </>
  )
}
export async  function getStaticProps(){
     const responsive = await fetch('https://jsonplaceholder.typicode.com/posts');
     const data = await responsive.json();
     return{
         props: {
            posts:data.slice(0,4)
         }
     }
}; 