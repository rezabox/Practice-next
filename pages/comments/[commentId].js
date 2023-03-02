import { comments } from "../../data/comments"


export default function Comment({ comment }){
  return(
    <div key={comment.id}>
        <h1>{comment.id} | {comment.text}</h1>
    </div>
  )
}

export async function getStaticPaths(){
  return {
    paths: [
       {
         params: { commentId : '1' }
       },
       {
         params: { commentId : '2' }
       },
       {
         params: { commentId : '3' }
       },
       {
         params: { commentId : '4' }
       },
     ],
    //  paths,
     fallback: false,
   }
}

export async function getStaticProps(context){
  const { params } = context
  const { commentId } = params
  
  const comment = comments.find((comment) => comment.id === parseInt(commentId))
  const response = await fetch(`http:localhost:3000/comments/${commentId}`);
  const data = await response.json();  
  console.log(data);
  return {
    props: {
      comment,
    },
  }

}