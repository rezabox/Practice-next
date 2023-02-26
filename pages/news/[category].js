export default function ArticleListByCategory({ articles , category }){
   return (
      <>
      <h1>Show category <i>{category}</i></h1>
      {articles.map(article=>{
           return(
               <div key={article.id}>
                   <h2>{article.id} | {articles.title}</h2>
                   <p>{article.description}</p>
               </div>
           )
      })}
      </>
   )
}

export async function getServerSideProps(context) {
    const { params, req, res } = context;
    console.log(req.headers.cookie);
    res.setHeader('Set-Cookie', ['name=YektaCookie']);
    const { category } = params
    const responsive = await fetch(`http://localhost:4000/news?category=${category}`);
    const data = await responsive.json();
    return{
      props:{
        articles: data,
        category,
      },
    }
} 