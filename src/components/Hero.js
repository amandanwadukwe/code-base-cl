import { useEffect } from "react";
import "../styleSheets/hero.css";
import heroImage from "../resources/hero.svg";
import RHJ from "../resources/rememberHerJourney.png";
import RHJWireframe from "../resources/rhj-wireframe.png";
import code from "../resources/code.svg";
import process from "../resources/process.svg";
import value from "../resources/value.svg";
import introVideo from "../resources/aada_intro.mp4";
import hero160125 from "../resources/hero_16_01_25.png";
import { Link } from "react-router-dom";
import aiIcon from "../resources/AI-icon.svg";
import websiteIcon from "../resources/website-icon.svg";
import voucherIcon from "../resources/voucher-icon.svg";
import supportTimeline from "../resources/support-timeline.png"

export default function Hero({ isHomeRevealed, componentToReveal }) {

    useEffect(() => {
        componentToReveal('home');
    }, [componentToReveal])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };



    return (
        <div className="home">
            {/* <video className="intro-video" autoPlay  muted style={{width: "100%", height: "100vh", position:"absolute",top:0,left:0,zIndex:1500}}>
      <source src={introVideo} type="video/mp4" />
    </video> */}
            <div className="hero">
                
                <div className={`left reveal ${isHomeRevealed ? "active" : ""}`}>
                    <p className="primary-header">Discover What Tech Can Do When It’s Built for You.</p>
                    <p className="secondary-text">Too often, the power of technology feels out of reach for those who deserve it most. We’re here to change that—designing AI-powered websites that prioritize your mission, amplify your voice, and meet your unique needs. Our goal is to empower you with tools that don’t just work for others, but are built to serve you. Together, let’s uncover the possibilities of what tech can do when it’s made with purpose.</p>
                </div>
                <div className={`right reveal ${isHomeRevealed ? "active" : ""}`}>
                    <img src={hero160125} alt="" />
                   
                </div>
            </div>

            <div className="service-list">
                        <div className="service-list-item"><img src={aiIcon} alt="" /><div><span><strong>Bespoke AI-Powered Website</strong></span><p>Cutting-edge tools that are tailor made specifically to server you and your clients.</p> </div></div>
                        <div className="service-list-item"><img src={websiteIcon} alt="" /><div><span><strong>Website Dev Classes</strong></span><p>Empowering the next generation of web developers with essential skills for building impactful digital products.</p></div></div>
                        <div className="service-list-item"><img src={voucherIcon} alt="" /><div><span><strong>Vouchers</strong></span><p>Empower local dreams by gifting a voucher to a charity, family member, friend, or community business.</p></div></div>
                    </div>

                    <div className="voucher-container">
                    <div className="voucher-progress-bar">
                        <p className="primary-header">We've raised £20!</p>
                        <div className="voucher-progress-bar-outer">
                            <div className="voucher-progress-bar-inner" ></div>

                        </div>
                        <img  src={supportTimeline} alt=""/>
                    </div>
                    <div className="voucher-highlight">

                        {/* <p className="tertiary-header">Your Voucher, Your Impact. Enjoy Flexibility and Support a Cause Today</p> */}
                        <p>Every time you redeem a voucher, you're not just unlocking benefits for yourself, you're fueling change. Half of the cost empowers charities with the tools they need to thrive in the digital space and the other half keeps our system running smoothly.</p>
                        <p>Get Your Voucher Now and Start Making an Impact!</p>
                        <div className="voucher-action-buttons"><button className="tertiary-btn">Contact Us</button><button className="secondary-btn">Get Voucher </button></div>
                        
                    </div>
                    </div>
                    <div className="values-container">
                <p>We believe that the best technology is built on three pillars: exceptional code, rigorous process, and a relentless focus on generating value. We don’t just write code; we craft it with passion, precision, and purpose. Our team is committed to delivering software that not only meets your needs today but is ready to adapt for tomorrow.</p>
                <div className="values">
                    <div className="value">
                        <img src={code} alt="" />
                        <p> <span>Code</span><br></br><span>Beautiful, Efficient, Ethical</span></p>
                    </div>
                    <div className="value">
                        <img src={process} alt="" />
                        <p> <span>Process</span><br></br><span>Due Diligence, Planning, Testing</span></p>
                    </div>
                    <div className="value">
                        <img src={value} alt="" />
                        <p> <span>Value</span><br></br><span>Creating Real, Measurable Impact</span></p>
                    </div>
                </div>

            </div>
            <p className="primary-header main-product-header">Learn more about our passion!</p>
            <div className="main-product-container">
                <img className={`main-product-image reveal ${isHomeRevealed ? "active" : ""}`} src={RHJ} alt="" />
                <div className={`left reveal ${isHomeRevealed ? "active" : ""}`}>
                    <p><strong>Remember Her Journey</strong></p>
                    <p>Remember Her Journey is our first product in our movement towards inclusivity, where technology and tradition meet to create something truly unique. By normalizing Indigenous designs, we aim to enrich digital spaces with cultural depth, ensuring the communities where these designs originate are fairly compensated. </p>

                </div>
                
            </div>
            {/* <div className="hero-images-container">
                <img class="hero-image-1" src={heroImage} alt="" />
                <img class="hero-image-2" src={heroImage} alt="" />
            </div> */}
            
            <div className="main-product-highlight-container">
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
                    {/* <a href='https://rememberjerjourney.com/' className={`primary-btn reveal ${isHomeRevealed ? "active" : ""}`} target='_blank'>Visit</a> */}
                </div>
                <img class={`product-wireframe reveal ${isHomeRevealed ? "active" : ""}`} src={RHJWireframe} alt="" />
               
            </div>
            

        </div>
    )
}