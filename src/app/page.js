import myPix from '..//../public/doris-photo1.png';
import country from "../../public/projectCountry.jpg";
import hotel from "../../public/projectHotel.jpg";
import watchApp from "../../public/projectEmergency1.jpg";
import pie from "../../public/projectPie.jpg"

import Image from 'next/image';
import {FaHtml5,FaCss3,FaJava,FaReact,FaPython} from 'react-icons/fa';
import {DiJavascript,DiDjango} from 'react-icons/di'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiSpringboot} from 'react-icons/si'
 const HomePage = () => {
  return (
    <main className="mt-7">
      <section id='home'>
         <div className='home-grid'>
            <div className="picture-side">
               <Image className='my-pix w-100' src={myPix} alt='A picture of Doris,Smiling with a headset on her neck'/>
            </div>
            <div className="text-side mx-2">
               
               <h2 className='hello'>Hello, I am Ebelechukwu Doris</h2>
               <p>A Software Engineer</p>
               <p className='about'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
               <button type='submit' className='button text-white'>Download CV</button>
            
         </div>

         </div>
      </section>
      <section id='experience'>
            <h1 className=' text-center'>MY SKILLLS</h1>
            <div className='card-container'>
               <div className='card'>
                  <FaJava className='icon-size'/>
                  <p>java</p>
               </div>
               <div className='card'>
               <FaPython className='icon-size'/>
               <p>python</p>
               </div>
               <div className='card'>
               <DiJavascript className='icon-size'/>
               <p>javaScript</p>
               </div>
               <div className='card'>
               <FaHtml5 className='icon-size'/>
               <p>Html</p>
               </div>
               <div className='card'>
               <FaCss3 className='icon-size'/>
               <p>CSS</p>
               </div>
               <div className='card'>
               <FaReact className='icon-size'/>
               <p>React</p>
               </div>
               <div className='card'>
               <TbBrandNextjs className='icon-size'/>
               <p>Next.js</p>
               </div>
               <div className='card'>
               <DiDjango className='icon-size'/>
               </div>
               <div className='card'>
               <SiSpringboot className='icon-size'/>
               <p>Springboot</p>
               </div>
               <div className='card'>
               <SiSpringboot className='icon-size'/>
               <p>Springboot</p>
               </div>
               
               
            </div>
           
      </section>
      <section id='project'>
            <h1 className='text-center my-text'>SOME OF MY WORKS</h1>

            <div className='project-list'>
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
              
               
            </div>
      </section>
     
      
    </main>
  )
}
export default HomePage;
