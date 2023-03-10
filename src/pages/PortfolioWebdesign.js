import "../styles/PortfolioWebdesign.css";
import oeuf from "../assets/portfolioWebdesign/oeuf_sans_le_coq-min.png";
import restaurants from "../assets/portfolioWebdesign/restaurants-min.png";
import macarons from "../assets/portfolioWebdesign/macarons-min.png";
import crypto from "../assets/portfolioWebdesign/crypto-min.png";
import prototype from "../assets/portfolioWebdesign/prototype-min.jpg";
import avion from "../assets/portfolioWebdesign/avion_comp.mp4";
import fleurs from "../assets/portfolioWebdesign/fleurs_comp.mp4";
import sapin from "../assets/portfolioWebdesign/sapin_comp.mp4";
import respiration from "../assets/portfolioWebdesign/respiration_comp.mp4";
import { useState } from "react";
import Title from "../components/Title";

const PortfolioWebdesign = () => {

    const [selected, setSelected] = useState(0);

    const wireframeList= [
        {
            video: avion,
            desc: "Illustrator - After Effects"
        },
        {
            video: fleurs,
            desc: "Illustrator - After Effects"
        },
        {
            video: respiration,
            desc: "After Effects (fortement inspiré de l'application Headspace)"
        },
        {
            video: sapin,
            desc: "After Effects"
        },
        {
            image: oeuf,
            desc: "Illustrator Abode XD"
        },
        {
            image: macarons,
            desc: "Illustrator Abode XD"
        },
        {
            image: restaurants,
            desc: "Abode XD"
        },
        {
            image:crypto,
            desc: "Abode XD"
        },
        {
            image:prototype,
            desc: " dessins & prototypage - Figma"
        }
       
    ]

    return (
        <div className="container portfolioDesign col-lg-6 text-center">
                        <Title value="Webdesign"/>
            <div className="medias">
                {wireframeList.map(({video,image,desc},index)=>(
                    <div className={`media ${selected === index ? "":"d-none"}`} key={index}>
                        <video muted= "true" autoplay="true" loop src={video} width={800}/>
                        <img src={image} width={800} />
                        <p>{desc}</p>
                    </div>
                ))}
            </div>
            <div className="buttons mt-3">
                <button className={`btn-caroussel ${selected === 0 ? "btn-active":""}`} onClick={()=>setSelected(0)}></button>
                <button className={`btn-caroussel ${selected === 1 ? "btn-active":""}`} onClick={()=>setSelected(1)}></button>
                <button className={`btn-caroussel ${selected === 2 ? "btn-active":""}`} onClick={()=>setSelected(2)}></button>
                <button className={`btn-caroussel ${selected === 3 ? "btn-active":""}`} onClick={()=>setSelected(3)}></button>
                <button className={`btn-caroussel ${selected === 4 ? "btn-active":""}`} onClick={()=>setSelected(4)}></button>
                <button className={`btn-caroussel ${selected === 5 ? "btn-active":""}`} onClick={()=>setSelected(5)}></button>
                <button className={`btn-caroussel ${selected === 6 ? "btn-active":""}`} onClick={()=>setSelected(6)}></button>
                <button className={`btn-caroussel ${selected === 7 ? "btn-active":""}`} onClick={()=>setSelected(7)}></button>
            </div>
        </div>
    );
};

export default PortfolioWebdesign;