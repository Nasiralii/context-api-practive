import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <div> <ul style={{listStyle:"none",display:"flex" ,gap:"20px"}}>
    <li>
      <Link href="/Home">Home</Link>
    </li>
    <li>
      <Link href="/About">About Us</Link>
    </li>
  </ul></div>
  )
}

export default Navbar