'use client';
import React, { useState } from 'react'
import Image from 'next/image';
import myPix from '../../../public/profile.jpg'
import Link from 'next/link';
import '../globals.css'
import './style.css'
import {FaHamburger} from 'react-icons/fa'

const Header = () => {
    const [isOpen,setIsopen] = useState(false);
    function toggleMenu(){
        setIsopen(!isOpen)
    }
    // const links = document.querySelectorAll('nav a')
    // co
    // function scrollIn () {

    // }
    
  return (
    <header className='h-24'>
        <nav className='my-navigation'>
            <div className='logo flex px-2 py-2 mt-4'>
                <Image className="rounded-full h-10 w-10 mt-1" src={myPix} alt='' />
                <div className='intro h-9 px-2'>
                    <h6 className='name'>Ebelechukwu Doris Okolo</h6>
                    <p className='designation'>Software Engineer</p>
                </div>
            </div>
            <div className='links mt-3'>
                <a className='link' href='#home'>Home</a>
                <a className='link' href='#project'>Projects</a>
                <a className='link' href='#experience'>Experience</a>
                
            </div>
            <div className='hidden-menu px-2' >
            
                <FaHamburger className='hamburger' onClick={toggleMenu}/>
            </div>
            
        </nav>
        <nav>
            {isOpen && (
                <div className='mobile-links py-3' id='mob'>
                        <a className='mob-route' href='#home'>Home</a>
                        <a className='mob-route' href='#project'>Projects</a>
                        <a className='mob-route' href='#experience'>Experience</a>
                    
                </div>
            )}
        </nav>
        
        
        
    </header>
  )
}

export default Header;