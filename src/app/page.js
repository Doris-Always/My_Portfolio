import myPix from '..//../public/avatar2resized.png';
import profile from '../../public/doris-photo1.png';
import Footer from './components/footer';
import country from "../../public/country.jpg";
import hotel from "../../public/hotel.jpg";
import emergency from "../../public/emergency.jpg";
import pie from "../../public/pie.jpg"

import Image from 'next/image';
// import {FaHtml5,FaCss3,FaJava,FaReact,FaPython} from 'react-icons/fa';
// import {DiJavascript,DiDjango} from 'react-icons/di'
// import {TbBrandNextjs} from 'react-icons/tb'
// import {SiSpringboot} from 'react-icons/si'
 const HomePage = () => {

  return (
    <main className="mt-7">
      <section id='home'>
         <div className='home-grid'>
         <div className="picture-side">
               <Image className='my-pix w-100' src={myPix} alt='A picture of Doris,Smiling with a headset on her neck'/>
            </div>
           
            <div className="text-side">
               
               <h2 className='hello'>Hello,<br/> <span className='my-name'>Ebelechukwu Doris</span></h2>
               <p className='role'>A Software Engineer</p>
               <p className='about'></p>
               <div className='btn-area'>
                  <button type='submit' className='button text-white'><a href='/EBELECHUKWU DORIS OKOLO.docx' download>Download CV</a></button>
                  <button type='submit' className='button text-white btn2'><a href='#contact'>Contact Me</a></button>
               </div>
               
            
         </div>
         

         </div>
      </section>
      <h1 className=' text-center my-about'>ABOUT ME</h1>
      <section id='about'>
         
            <div className='inner-div'>
                <div className='about-writeup'>
                   <p className='about-text'>As a software engineer, I possess extensive understanding of all phases of software development, as well as a commitment to clean coding practices and top-notch software architecture knowledge, problem solving, with a deep understanding of computer science concepts such as data structures, algorithms, complexity analysis. Through three years of experience working with software development teams at different levels both as an apprentice,student and self-learner, I have  my skills in software architecture and design, utilizing UML tools, SOLID principles, DRY principles, Test Driven Development Approach, and design patterns. </p>
                   <p className='about-text'><b>SKILLS: </b>java,javaScript,python,Springboot,Django,Next js,React,Html,CSS,Bootstrap,Material Ui</p>
               </div>
               <div className='my-pix'>
                  <Image className=' w-100' src={profile} alt='A picture of Doris,Smiling with a headset on her neck'/>
               </div>
            </div>
           
           
      </section>
     
      <section id='project'>
      <h1 className='text-center my-text'>SOME OF MY WORKS</h1>

            <div className='display-project'>
               <a href='https://capstonehotels.vercel.app'>
               
                  <div className='project idea-1'>
                     
                  <h2 className='card-title'>A Hotel Management System</h2>
                     
                  <p className='card-desc'>I built this with React and it is a collaborative work,with a team of 5,this project proves how i can collaborate with other software engineers,start a project from requirement gathering to hosting.</p>
                  </div>
               </a>
               <a href='https://doris-always.github.io/learning-react'>
                  <div className='project idea-2'>
                  <h2 className='card-title'>A Pie Shop</h2>
                  <p className='card-desc'>I built this with React,though at that time a lot of things were not clear to me,but right now i can say i have improved a lot.I hosted my pie shop on github pages. </p>
                  </div>
               </a>
               <a href='https://github.com/doris-always/watchApp.git'>
                  <div className='project idea-3'>
                     <h2 className='card-title'>An Emergency App</h2>
                     <p className='card-desc'>This was a collaborative work in my previous place of work.I remember finding this hard to do at the time,but it was this project that thought me about mobile first approach in designing a website.My former boss usually say, Doris,it must be responsive even for Nokia touch....</p>
                  </div>
               </a>
               <a href='https://Search-country-withme.netlify.app/'>
                  <div className='project idea-4'>
                     <h2 className='card-title'>Search Country App</h2>
                     <p className='card-desc'>This project was my first attempt using an API and I remember spending my time in an open workspace and ended up finishing it in days,those were the days when light and network was deficient.I recall the owners of the plays pleading with me and my friend to leave the space by 7pm.I hosted this on Netlify</p>
                  </div>
               </a>
            </div>


            {/* <div className='project-list'>
               <div className='my-card'>
                  <div className='pix'>
                     <Image className='imag' src={country} alt ='' />
                  </div>
                  <div className='desc'>
                     <p className='text-center pt-2'>
                        Search All Country App
                     </p>
                    
                  </div>
                  <div className='button-area'>
                      <a class="my-button text-center" type='button' href="#">visit site</a>
                  </div>
                
               </div>
               <div className='my-card'>
                  <div className='pix '>
                     <Image className='imag' src={hotel} alt ='' />
                  </div>
                  <div className='desc'>
                    <p className='text-center pt-2'>A Hotel Management System</p>
                  </div>
                  <div className='button-area'>
                      <a class="my-button text-center " type='button' href="#">visit site</a>
                  </div>
               </div>
              
              <div className='my-card'>
               <div className='pix'>
                     <Image className='imag' src={watchApp} alt ='' />
                  </div>
                  <div className='desc'>
                     <p className='text-center pt-2'>
                     Emergency Reporting App
                     </p>
                  </div>
                  <div className='button-area'>
                      <a class="my-button text-center" type='button' href="#">visit site</a>
                  </div>
              </div>
               <div className='my-card'>
                  <div className='pix'>
                     <Image className='imag' src={pie} alt ='' />
                  </div>
                  <div className='desc'>
                     <p className='text-center pt-2'>
                        A Pie Shop Landing Page 
                     </p>
                  </div>
                  <div className='button-area'>
                      <a class="my-button text-center " type='button' href="#">visit site</a>
                  </div>
               </div>
              
               
            </div> */}
      </section>
      <section id='contact'>
          <Footer />
      </section>
     
      
    </main>
  )
}
export default HomePage;
