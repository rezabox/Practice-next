import Link from "next/link";

export default function NewArticleList({ articles }) {
  return(
    <>
      <h1>List of New Article</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
             {/* <Link href={`news/${category.id}`}> */}
              <h2>
                {article.description} {article.title}
              </h2>
            <hr />
          </div>
        );
      })}
    </>
  )
}

export async function getServerSideProps() {
  const responsive = await fetch("http://localhost:4000/news");
  const data = await responsive.json();
  return {
    props: {
      articles: data,
    },
  };
}
