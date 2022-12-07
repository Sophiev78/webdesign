import "../styles/PortfolioWebdesign.css";
import oeuf from "../assets/portfolioWebdesign/oeuf_sans_le_coq-min.png";
import restaurants from "../assets/portfolioWebdesign/restaurants-min.png";
import macarons from "../assets/portfolioWebdesign/macarons-min.png";
import crypto from "../assets/portfolioWebdesign/crypto-min.png";
import { useState } from "react";
import Title from "../components/Title";

const PortfolioWebdesign = () => {

    const [selected, setSelected] = useState(0);

    const wireframeList= [
        {
            image: oeuf,
        },
        {
            image: macarons,
        },
       
        {
            image: restaurants,
        },
        {
            image:crypto 
        }
       
    ]
    return (
        <div className="container portfolioDesign col-lg-6 text-center">
                        <Title value="Webdesign creation"/>
            <div className="images">
                {wireframeList.map(({image},index)=>(
                    <div className={`image ${selected === index ? "":"d-none"}`} key={index}>
                        <img src={image} alt="projects_webdesign" width={800}/>
                    </div>
                ))}
            <a href="https://sophievh-cv.go.yj.fr/webdesign.php" target="blank" id="voir">Voir plus</a>
            </div>
            <div className="buttons mt-3">
                <button className={`btn-caroussel ${selected === 0 ? "btn-active":""}`} onClick={()=>setSelected(0)}></button>
                <button className={`btn-caroussel ${selected === 1 ? "btn-active":""}`} onClick={()=>setSelected(1)}></button>
                <button className={`btn-caroussel ${selected === 2 ? "btn-active":""}`} onClick={()=>setSelected(2)}></button>
                <button className={`btn-caroussel ${selected === 3 ? "btn-active":""}`} onClick={()=>setSelected(3)}></button>
            </div>
        </div>
    );
};

export default PortfolioWebdesign;