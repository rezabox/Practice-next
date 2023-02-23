import Link from 'next/link';
import Styles from '../styles/Home.module.css'
function Home(){
  return(
  <>
  <h1 className={Styles.h1}>Reza Asareh</h1>
   <ul>
    <Link href='/users'>btn Link</Link>
    <br />
    <Link href='/userId'>btn Link</Link>
    <br />
    <Link href='/posts'>Go To Post</Link>
    <br />
    <Link href='/products'>Go To products</Link>
   </ul>
  </> 
  )
}
export default Home;