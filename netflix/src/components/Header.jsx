import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'
import {ImSearch} from 'react-icons/im'

const Header = () => {
  return (
    <nav className='Header'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix" />
        <div>
            <Link to='/tvshows'>Tvshows</Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/Recently added'>Recently added</Link>
            <Link to='/My list'>My list</Link>
        </div>
        <ImSearch/>
    </nav>
  )
}

export default Header