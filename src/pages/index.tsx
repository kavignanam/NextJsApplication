import Link from 'next/link'
 
function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/aboutPage/about">About Us</Link>
      </li>
      <li>
        <Link href="/contactusPage/contactus">Contact Us</Link>
      </li>
    </ul>
  )
}
 
export default Home