import React from 'react'

const Navbar = () => {
  return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <a className='navbar-brand'>Logo</a>    
            <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li><a href="" className='nav-link'>Home</a></li>
                <li><a href="" className='nav-link'>About</a></li>
                <li><a href="" className='nav-link'>Services</a></li>
                <li><a href="" className='nav-link'>Contact</a></li>
            </ul>
            </div>
        </nav>
}

export default Navbar