import React from 'react'

function Footer() {
  return (
  <>
     {/* <-----------------Footer------------> */}
     <footer className='footer bg-dark py-5 '>
    <div className='container  grid-three'>
        <div>
            <h1>Loruki</h1>
            <p>copyright &copy;2023</p>
        </div>
        <nav>
            <ul>
                <li>
                    <a href='index.html'>Home</a>
                </li>
                <li>
                    <a href='features.html'>Features</a>
                </li>
                <li>
                    <a href='docs.html'>Docs</a>
                </li>
            </ul>
        </nav>
        <div className='social'>
            <a href='#' > <li className='fab fa-github fa-2x'></li></a>
            <a href='#' > <li className='fab fa-twitter fa-2x'></li></a>
            <a href='#' > <li className='fab fa-facebook fa-2x'></li></a>
            <a href='#' > <li className='fab fa-instagram fa-2x'></li></a>
        </div>
    </div>
    
    </footer>
  
  </>
  )
}

export default Footer