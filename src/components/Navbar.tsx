import  { useState} from 'react'
import {Link} from 'react-router-dom'

import {styles} from '../styles'
import {navLinks} from '../constants'
import {logo, menu, close} from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex py-5 fixed top-0 z-20 bg-primary`}>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link 
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
            setActive("");
            window.scrollTo(0, 0)
            }} 
          >
              <img src={logo} alt="logo" className="w-9 h-9 object-contain"></img>
              <p className='text-white text-[18px] font-bold cursor-pointer flex'>
                Christopher &nbsp;
                <span className='sm:block hidden'>| Holzweber</span>
              </p>
            </Link>
            <ul className='list-none hidden sm:flex flex-row gap-10'>
                {navLinks.map((link) => (
                <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium`} onClick={() => setActive(link.title)}>
                  <a href={`#${link.id}`}>
                  {link.title}
                  </a>
                </li>
                ))}
                <li className='text-secondary font-poppins font-medium cursor-pointer text-[16px]'>
                <button onClick={() => window.open('https://www.linkedin.com/in/christopher-holzweber/','_blank')} className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
          </svg>
        </button>
                </li>
            </ul>
            <div className='sm:hidden flex flex-1 justify-end items-center'> 
                  <img src={toggle ? close  : menu} alt="menu" className='w-[28px] h-[25px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)}></img>
                  <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
                  <ul className='list-none flex justify-end items-start flex-col gap-5'>
                {navLinks.map((link) => (
                <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`} 
                onClick={() => {
                  setActive(link.title);
                  setToggle(!toggle);
                }}>
                  <a href={`#${link.id}`}>
                  {link.title}
                  </a>
                </li>
                ))}
                
            </ul>
                  </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar