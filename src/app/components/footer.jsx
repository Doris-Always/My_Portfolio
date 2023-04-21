import Link from 'next/link';
import '../globals.css'
import './style.css'
import { FaGithub,FaEnvelope,FaLinkedinIn,FaMobileAlt,FaWhatsapp } from "react-icons/fa";
const Footer = () =>{
    return(
        <footer className='h-22'>
            <div className='footer'>
                <div className='text'>
                    <h6 className=''>Contact me</h6>
                </div>
                <div className='contact'>
                  <FaGithub/>
                  <FaLinkedinIn className='linkedn'/> 
                  <FaMobileAlt className='mobile'/>
                  <FaEnvelope/>
                  <FaWhatsapp className='mobile'/>
               
                </div>
            
                
            </div>
    </footer>
    )
}
export default Footer;