'use client';
import React, { useState } from 'react'
import Image from 'next/image';
import myPix from '../../../public/profile.jpg'
import Link from 'next/link';
import '../globals.css'
import './style.css'
// import {FaHamburger} from 'react-icons/fa'
import {FcMenu} from 'react-icons/fc'

const Header = () => {
    const [isOpen,setIsopen] = useState(false);
    function toggleMenu(){
        setIsopen(!isOpen)
    }
    
    const off = {
        width: "100%",
        height: "0px",
        overflow: "hidden",
        padding: "0",
        transition: "3s"
    }

    const on = {
        height: "auto",
        overflow: "visible",
        transition:  "1s"
    }
    
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
                <a className='link' href='#home'> 
                    <svg className='my-svg'> 
                        <rect></rect>
                    </svg>
                    Home
                </a>
                <a className='link' href='#about'>
                    <svg className='my-svg'> 
                        <rect></rect>
                    </svg>
                    About
                </a>
                <a className='link' href='#service'>
                    <svg className='my-svg'> 
                        <rect></rect>
                    </svg>
                    Services
                </a>
                <a className='link' href='#project'>
                    <svg className='my-svg'> 
                        <rect></rect>
                    </svg>
                    Projects
                </a>
                
            </div>
            <div className='hidden-menu px-2' >
            
                <FcMenu className='hamburger' onClick={toggleMenu}/>
            </div>
            
        </nav>
        <nav>

            {
                <div className='mobile-links py-3' id='mob' style={isOpen ? on : off}>
                        <a className='mob-route' href='#home'>Home</a>
                        <a className='mob-route' href='#about'>About</a>
                        <a className='mob-route' href='#service'>Services</a>
                        <a className='mob-route' href='#project'>Projects</a>
                        
                    
                </div>
            }
            {/* {isOpen && (
                <div className='mobile-links py-3' id='mob'>
                        <a className='mob-route' href='#home'>Home</a>
                        <a className='mob-route' href='#about'>About</a>
                        <a className='mob-route' href='#service'>Services</a>
                        <a className='mob-route' href='#experience'>Projects</a>
                        
                    
                </div>
            )} */}
        </nav>
        
        
        
    </header>
  )
}

export default Header;