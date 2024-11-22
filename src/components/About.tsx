import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { Service, services, portrait } from '../constants'
import { fadeIn } from '../utils/motion'
import { SectionWrapper } from "../hoc";
import { useEffect, useState } from 'react'

interface ServiceCardComponent{
  index: number;
  service: Service;
}

const ServiceCard = ( {index, service}: ServiceCardComponent ) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img
              src={service.icon}
              alt='development'
              className='w-16 h-16 object-contain'
            />

            <h3 className='text-white text-[20px] font-bold text-center'>
              {service.title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
  )
}

const ServiceCardMobile = ( {service}: any ) => {

  return (
    <Tilt className='xs:w-[250px] w-full'>
        <div
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img
              src={service.icon}
              alt='development'
              className='w-16 h-16 object-contain'
            />

            <h3 className='text-white text-[20px] font-bold text-center'>
              {service.title}
            </h3>
          </div>
        </div>
      </Tilt>
  )
}

const About = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);


  return (
    <>
    <div>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </div>
    <div
    className='mt-4 flex flex-wrap gap-3 justify-center items-center'
    >
   <p className='text-white flex text-center text-[17px] max-w-[60%] leading-[30px]'>
   I'm Christopher Holzweber, a dedicated Computer Scientist holding a Master's degree in Computer Science.<br/>
   My professional journey has taken me through exciting realms, from software development to industrial digitalization.<br/>
   With my extensive expertise in software development and data science, I have the ability to craft innovative solutions that push the boundaries of what's possible.
   During my Master's studies, I delved deep into data analysis, machine learning, and deep learning, particularly in the context of quality assurance and process optimization.<br/>
   Another focal point of my work lies in industrial digitalization, where I collaborate closely with domain experts to create tailored digital tools that enhance efficiency 
   and informed decision-making.<br/>
   My primary interests and passions revolve around Full Stack Software Development and Deep Learning.
   </p>
   <img src={portrait} className='min-w-[250px] max-w-[30%] rounded-lg' alt='portrait'/>
   </div>


    <div className='mt-20 flex flex-wrap gap-10 justify-center'>
      {isMobile ?services.map((service: Service, index: number) => (<ServiceCardMobile key={service.title} index={index} service={service}/>)) : services.map((service: Service, index: number) => (<ServiceCard key={service.title} index={index} service={service}/>))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about");