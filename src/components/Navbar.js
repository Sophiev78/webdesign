import '../styles/Navbar.css';
import {NavLink} from 'react-router-dom';
import {AiOutlineCloseCircle} from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi";
import {useEffect, useState} from 'react';
import {motion} from "framer-motion";
const Navbar = () => {

            //-------largeur window--------------

    const [largeur, setLargeur]= useState(window.innerWidth);
    const [navIsOpen, setNavIsOpen]= useState(false);

        const changeWidth = ()=>{
            setLargeur(window.innerWidth)
        }
    
        window.addEventListener('resize',changeWidth); 
    
        //-------curseur pointeur--------------

    const [mousePosition,setMousePosition]= useState({
        x:0,
        y:0
    })

    useEffect(()=>{
        const mouseMove = e =>{
            setMousePosition({
                x:e.clientX,
                y:e.clientY
            })
        }
        window.addEventListener('mousemove',mouseMove);

        return()=>{
            window.removeEventListener('mousemove',mouseMove);
        }
    },[])

    const variants = {
        default:{
            x:mousePosition.x,
            y:mousePosition.y,
        },
        text:{
            width: 60,
            height: 60,
            x:mousePosition.x-10,
            y:mousePosition.y-10,
            backgroundColor:"#fff",
            mixBlendMode:"difference"
        }
    }

            //-------curseur pointeur--------------

    const [cursorVariant, setCursorVariant]= useState("default");

    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");
    
    return (
      <motion.div className='container-fluid mx-auto'
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay:0.3, duration:0.6, type: "tween" }}
      >
        {(navIsOpen || largeur > 900) && (
         <div className='row'>
            <nav className='col-lg-3'>
                <div className='menu' onMouseEnter={textEnter} onMouseLeave={textLeave}>
                    <motion.div 
                    className='cursor'
                    variants={variants}
                    animate={cursorVariant}
                    >
                    </motion.div>
                    <NavLink to="/" className={(nav)=> nav.isActive? "active":""}>
                        Profil
                    </NavLink>
                </div>
                <div className='menu'onMouseEnter={textEnter} onMouseLeave={textLeave}>
                    <NavLink to="/websites" className={(nav)=> nav.isActive? "active":""}>
                    Porfolio Websites
                    </NavLink>
                </div>
                <div className='menu'>
                    <NavLink to="/webdesign" className={(nav)=> nav.isActive? "active":""} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                    Porfolio Webdesign
                    </NavLink>
                </div> 
            </nav>
        </div>
        )}
        <button id="btn-nav" onClick={()=>setNavIsOpen(!navIsOpen)}>{navIsOpen ? <AiOutlineCloseCircle/>:<GiHamburgerMenu/>}</button>
      </motion.div>
       
        
    );
};

export default Navbar;