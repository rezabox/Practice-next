import { useRouter } from 'next/router';

function Product({ product }){
  const router = useRouter();
  if(router.isFallback){
    return <div>Loading...</div>
  }
  return(
      <>
          <h1>details of product</h1>
          <br/>
          <h2>
            {product.id} {product.title}
          </h2>
          <p>{product.description}</p>
          <hr/>
       </>
  )
}
export default Product;

export async function getStaticPaths(){
//  const responsive = await fetch('http://localhost:4000/products/${params.productId}');
//  const data = await responsive.json();
//  const paths = data.map(product=>{
//     return {
//        params :{
//          productId: `${product.id}`
//        }
//     }
//  })
  return {
      paths: [
         {
           params: { productId : '1' }
         },
         {
           params: { productId : '2' }
         },
         {
           params: { productId : '3' }
         },
         {
           params: { productId : '4' }
         },
       ],
      //  paths,
       fallback: false,
  }
}

export async  function getStaticProps(context) {
 const { params } = context;
 const responsive = await fetch(`http://localhost:4000/products/${params.productId}`);
 const data = await responsive.json();
 if(!data.id){
   return {
     notFound: true,
   }
 }
 return{
     props: {
        product:data,
     },
 }
}; 