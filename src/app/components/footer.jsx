import Link from 'next/link';
import '../globals.css'
import './style.css'
import { FaGithub,FaEnvelope,FaLinkedinIn,FaMobileAlt,FaWhatsapp } from "react-icons/fa";
const Footer = () =>{
    return(
        <footer className='' >
            <div className='footer'>
                <div className='text'>
                    <h6 className='contact-area'>Contact me</h6>
                </div>
                <div className='contact'>
                  <FaGithub className='github'/>
                  <FaLinkedinIn className='linkedn'/> 
                  <FaMobileAlt className='mobile'/>
                  <FaEnvelope className='email'/>
                  <FaWhatsapp className='mobile'/>
               
                </div>
            
                
            </div>
    </footer>
    )
}
export default Footer;