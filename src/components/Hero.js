import { useEffect } from "react";
import "../styleSheets/hero.css";
import heroImage from "../resources/hero.svg";
import RHJ from "../resources/rememberHerJourney.png";
import RHJWireframe from "../resources/rhj-wireframe.png";
import code from "../resources/code.svg";
import process from "../resources/process.svg";
import value from "../resources/value.svg";

export default function Hero({ isHomeRevealed, componentToReveal }) {

    useEffect(()=>  {
        componentToReveal('home');
    },[componentToReveal])
    
  

return(
        <div className="home">
            <div className="main-product-container">
                <img className={`main-product-image reveal ${isHomeRevealed ? "active" : ""}`} src={RHJ} alt="" />
                <div className={`left reveal ${isHomeRevealed ? "active" : ""}`}>
                    <p><strong>Remember Her Journey</strong></p>
                    <p>A movement towards inclusivity, where technology and tradition meet to create something truly unique. By aiming normalizing indeginous designs, </p>
                </div>
                <div className={`right reveal ${isHomeRevealed ? "active" : ""}`}>
                    <button className="primary-btn" type="button">About</button>
                </div>
            </div>
            {/* <div className="hero-images-container">
                <img class="hero-image-1" src={heroImage} alt="" />
                <img class="hero-image-2" src={heroImage} alt="" />
            </div> */}
            <div className="main-product-highlight-container">
            <img class={`product-wireframe reveal ${isHomeRevealed ? "active" : ""}`} src={RHJWireframe} alt="" />
            <div className="product-features-container">
                <div className={`product-feature reveal ${isHomeRevealed ? "active" : ""}`}>
                    <p><strong>Culturally-Inclusive Design System</strong></p>
                    <p>Indigenous patterns as foundational elements in a modern, responsive UI framework. This has inspired us to create a comprehensive digital archive of these designs, complete with contextual information, downloadable resources and ethical licensing. </p>
                </div>
                <div className={`product-feature reveal ${isHomeRevealed ? "active" : ""}`}>
                    <p><strong>Parallax Pattern Scrolling</strong></p>
                    <p>Parallax effects that seamlessly blend the pattern with modern web elements as users scroll.</p>
                </div>
                <div className={`product-feature reveal ${isHomeRevealed ? "active" : ""}`}>
                    <p><strong>Live Chat Integration</strong></p>
                    <p>Custom real-time, AI-powered chatbots for instant customer support and enhanced user interactions. </p>
                </div>
                <button className={`primary-btn reveal ${isHomeRevealed ? "active" : ""}`} type="button">Visit</button>
                </div>
            </div>
            <div className="values-container">
                <p>We believe that the best technology is built on three pillars: exceptional code, rigorous process, and a relentless focus on generating value. We don’t just write code; we craft it with passion, precision, and purpose. Our team is committed to delivering software that not only meets your needs today but is ready to adapt for tomorrow.</p>
                <div className="values">
                    <div className="value">
                        <img src={code} alt=""/>
                        <p> <span>Code</span><br></br><span>Beautiful, Efficient, Ethical</span></p>
                    </div>
                    <div className="value">
                        <img src={process} alt=""/>
                        <p> <span>Process</span><br></br><span>Due Diligence, Planning, Testing</span></p>
                    </div>
                    <div className="value">
                        <img src={value} alt=""/>
                        <p> <span>Value</span><br></br><span>Creating Real, Measurable Impact</span></p>
                    </div>
                </div>
            
            </div>

        </div>
    )
}