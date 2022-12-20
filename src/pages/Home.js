import "../styles/Home.css";
import profil from "../assets/profil_comp.mp4";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillTelephoneFill,BsEnvelopeFill } from "react-icons/bs";
import {motion} from "framer-motion";

const Home = () => {
    return (
        <div className="container home col-lg-6 mx-auto">
            <div className="row">
                <motion.div className="col-md-10 mt-5"
                 initial={{ opacity: 0, x: -200 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay:0.3, duration:0.6, type: "tween" }}
                >
                    <motion.div className="circle"
                    initial={{ opacity: 0, y: -500 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay:0.3, duration:0.6, type: "tween" }}
                    >
                    </motion.div>
                    <h1>Sophie Van Hese</h1>
                    <p className="text-center mt-5">Développeur - Intégreur web & Webdesigner</p>
                </motion.div>
                <motion.div className="col-md-2"
                initial={{ opacity: 0, x: 800 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay:0.3, duration:0.6, type: "tween" }}
                >
                     <video muted="true" autoplay="true"src={profil} type="video/mp4" width={400}/>

                </motion.div>
            </div>
            <motion.div className="networks mt-5"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay:0.3, duration:0.6, type: "tween" }}
            >
               <a href="https://www.linkedin.com/in/sophie-van-hese/" target="blank"><FaLinkedinIn/></a>
               <a href="tel:+33659887373"><BsFillTelephoneFill/></a>
               <a href="mailto:sophievh78@gmail.com"><BsEnvelopeFill/></a>
            </motion.div>
        </div>
    );
};

export default Home;