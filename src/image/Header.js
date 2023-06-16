import React from 'react'
import {Link} from "react-router-dom"
function Header() {
  return (
  <>
    
    {/* <---------------Navbar------------> */}
    <div className='features-navbar navbar'>
            <div className='container flex'>
                <h1 className='logo'>Loruki.com</h1>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/features">Features</Link>
            </li>
            <li>
                <Link to="/docs">Docs</Link>
            </li>
        </ul>
    </nav>
            </div>
    
        </div>
  
  </>
  )
}

export default Header