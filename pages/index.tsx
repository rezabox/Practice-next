import Link from 'next/link';
import Styles from '../styles/Home.module.css'
function Home(){
  return(
  <>
  <h1 className={Styles.h1}>Reza Asareh</h1>
  <button type="button" className="btn btn-success">Success</button>
   <ul className={Styles.ul}>
    <Link href='/users'>btn Link</Link>
    <br />
    <Link href='/userId'>btn Link</Link>
    <br />
    <Link href='/posts'>Go To Post</Link>
    <br />
    <Link href='/products'>Go To products</Link>
    <br />
    <Link href='/news'>go to news</Link>

   </ul>
  </> 
  )
}
export default Home;