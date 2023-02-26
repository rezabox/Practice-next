import useSWR from 'swr';

const fetcher = async () => {
  const responsive = await fetch('http://localhost:4000/dashboard');
  const data = await responsive.json();
  return data
}
export default function Dashboard_SWR(){
   const { data,error } = useSWR('dashboard',fetcher);

   if(error) return 'An error has occured'
   if(!data) return 'Loading'
   return(
    <div>
        <h2>Dashboard</h2>
        <h2>Posts -- {data.posts}</h2>
        <p>{data.likes}</p>
        <p>{data.following}</p>
    </div>
)
}