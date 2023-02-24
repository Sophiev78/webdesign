import "../styles/PortfolioDev.css";
import blossom from "../assets/portfolioDev/blossom.png";
import sweety from "../assets/portfolioDev/sweety.png";
import music from "../assets/portfolioDev/music-store.png";
import mode from "../assets/portfolioDev/mode.png";
import macarons from "../assets/portfolioDev/macarons.png";
import neige from "../assets/portfolioDev/neige2.png";
import voyage from "../assets/portfolioDev/voyage.png";
import snake from "../assets/portfolioDev/snake.png";
import { useState } from "react";
import Title from "../components/Title";

const PortfolioDev = () => {

    const [selected,setSelected]=useState(0);

    const carousselDev = [

        {
            image:blossom,
            desc:"ReactJS",
            href:"https://sophiev78.github.io/react_motion/"
        },
        {
            image:sweety,
            desc:"jQuery",
            href:"https://sectorial-felt.000webhostapp.com/sweety/"
        },
        {
            image:music,
            desc:"PHP-SQL",
            href:""
        },
        {
            image:macarons,
            desc:"jQuery-LESS",
            href:"https://sectorial-felt.000webhostapp.com/macarons/"
        },
        {
            image:mode,
            desc:"jQuery-LESS",
            href:"https://sectorial-felt.000webhostapp.com/mode/"
        },
        {
            image:neige,
            desc:"Sass",
            href:"https://sectorial-felt.000webhostapp.com/neige/"
        },
        {
            image:voyage,
            desc:"HTML-CSS",
            href:"https://sectorial-felt.000webhostapp.com/voyage/"
        },
        {
            image:snake,
            desc:"Javascript",
            href:"https://sectorial-felt.000webhostapp.com/jeuduserpent/"
        }
        
    ]

    return (
        <div className="container portfolioDev text-center">
            <Title value="Websites"/>
            <div className="carousselDev">
                {carousselDev.map(({image,desc,href}, index)=>(
                    <div className={`oneElement ${selected === index ? "" : "d-none"}`}key={index}>
                        <a href={href} target="blank">
                            <img src={image} alt="développement_web_langages_informatiques" width={500}/>
                            </a>
                        <h3>{desc}</h3>
                    </div>
                ))}
            </div>
            <div className="mt-5">
                <button className={`btn-caroussel ${selected === 0 ? "selected" : ""}`} onClick={()=>setSelected(0)}></button>
                <button className={`btn-caroussel ${selected === 1 ? "selected" : ""}`} onClick={()=>setSelected(1)}></button>
                <button className={`btn-caroussel ${selected === 2 ? "selected" : ""}`} onClick={()=>setSelected(2)}></button>
                <button className={`btn-caroussel ${selected === 3 ? "selected" : ""}`} onClick={()=>setSelected(3)}></button>
                <button className={`btn-caroussel ${selected === 4 ? "selected" : ""}`} onClick={()=>setSelected(4)}></button>
                <button className={`btn-caroussel ${selected === 5 ? "selected" : ""}`} onClick={()=>setSelected(5)}></button>
                <button className={`btn-caroussel ${selected === 6 ? "selected" : ""}`} onClick={()=>setSelected(6)}></button>
                <button className={`btn-caroussel ${selected === 7 ? "selected" : ""}`} onClick={()=>setSelected(7)}></button>
            </div>
        </div>
    );
};

export default PortfolioDev;