import Link from "next/link";
export default function ProductList({ products }){
  return(
     <>
       <h1>List of post</h1>
       <br/>
       {
        products.map((product)=>{
           return(
               <div key={product.id}>
                  <Link href={`products/${product.id}`}>
                  <h2>
                    {product.price} {product.title}
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
     console.log('Generation / Regenerating ProductList');
     const responsive = await fetch('http://localhost:4000/products');
     const data = await responsive.json();
     return{
         props: {
            products:data
         },
         revalidate: 10,
     }
}; 