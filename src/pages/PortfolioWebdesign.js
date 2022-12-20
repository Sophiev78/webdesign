import "../styles/PortfolioWebdesign.css";
import oeuf from "../assets/portfolioWebdesign/oeuf_sans_le_coq-min.png";
import restaurants from "../assets/portfolioWebdesign/restaurants-min.png";
import macarons from "../assets/portfolioWebdesign/macarons-min.png";
import crypto from "../assets/portfolioWebdesign/crypto-min.png";
import fleurs from "../assets/portfolioWebdesign/fleurs_comp.mp4";
import sapin from "../assets/portfolioWebdesign/sapin_comp.mp4";
import { useState } from "react";
import Title from "../components/Title";

const PortfolioWebdesign = () => {

    const [selected, setSelected] = useState(0);

    const wireframeList= [
        {
            video: fleurs,
            desc: "Illustrator - After Effects"
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
        }
       
    ]
    return (
        <div className="container portfolioDesign col-lg-6 text-center">
                        <Title value="Webdesign"/>
            <div className="medias">
                {wireframeList.map(({video,image,desc},index)=>(
                    <div className={`media ${selected === index ? "":"d-none"}`} key={index}>
                        <video muted= "true" autoplay="true" loop src={video} width={800}/>
                        <img src={image} width={800}/>
                        <p>{desc}</p>
                    </div>
                ))}
            <a href="https://sophievh-cv.go.yj.fr/webdesign.php" target="blank" id="voir">Voir plus</a>
            </div>
            <div className="buttons mt-3">
                <button className={`btn-caroussel ${selected === 0 ? "btn-active":""}`} onClick={()=>setSelected(0)}></button>
                <button className={`btn-caroussel ${selected === 1 ? "btn-active":""}`} onClick={()=>setSelected(1)}></button>
                <button className={`btn-caroussel ${selected === 2 ? "btn-active":""}`} onClick={()=>setSelected(2)}></button>
                <button className={`btn-caroussel ${selected === 3 ? "btn-active":""}`} onClick={()=>setSelected(3)}></button>
                <button className={`btn-caroussel ${selected === 4 ? "btn-active":""}`} onClick={()=>setSelected(4)}></button>
                <button className={`btn-caroussel ${selected === 5 ? "btn-active":""}`} onClick={()=>setSelected(5)}></button>
            </div>
        </div>
    );
};

export default PortfolioWebdesign;