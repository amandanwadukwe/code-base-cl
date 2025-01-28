import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { useState, useEffect } from "react";
import RHJ from "../resources/rememberHerJourney.png";
import RHJWireframe from "../resources/rhj-wireframe.png";




export default function Products({ isProductRevealed, componentToReveal }) {

    useEffect(()=>  {
        componentToReveal('product');
    },[componentToReveal])


    const [showProductDetails, setShowProductDetails] = useState(false);
    const [activeProductIndex, setActiveProductIndex] = useState(0);
    const products = [{
        "name": "Remember Her Journey",
        "description": ["Remember Her Journey honors Black female heroes by celebrating both their celebrated and unsung achievements and acts of heroism, ensuring their legacy is remembered and shared. It is our first product in our movement towards inclusivity, where technology and tradition meet to create something truly unique.  The project has inspired us to create a comprehensive digital archive of these designs, complete with contextual information, downloadable resources and ethical licensing.  By normalizing Indigenous designs, we aim to enrich digital spaces with cultural depth whilst ensuring the communities where these designs originate are duly recognised."],
        "highlightedResource": {
            "name": "ethical licensing document",
            "link": ""
        },
        "link": "https://rememberjerjourney.com/",
        "type":"product",
        "mainImage": RHJ,
        "wireframeImage": RHJWireframe,
        "feautures": [{ "title": "Culturally-Inclusive Design System", "description": "Indigenous patterns as foundational elements in a modern, responsive UI framework." }, { "title": "Parallax Pattern Scrolling", "description": "Parallax effects that seamlessly blend the pattern with modern web elements as users scroll." }, { "title": "Live Chat Integration", "description": "Custom real-time, AI-powered chatbots for instant customer support and enhanced user interactions." }]
    }]
    return (
        <div className=" container">
            <p className={`primary-header reveal ${isProductRevealed ? "active" : ""}`}>Products</p>
            <div className="products">
            {products.map((product,index) => {
                return <div className="product-container">
                    <div className={`product ${showProductDetails ? 'hide':'show'}`} onClick={()=>{setShowProductDetails(true);setActiveProductIndex(index)}}>
                        <img className={`reveal ${isProductRevealed ? "active" : ""}`} src={product.mainImage} alt={product.name} />
                        <p className={`tertiary-header reveal ${isProductRevealed ? "active" : ""}`} style={{ color: "black" }}>{product.name}</p>
                    </div>
                    <div className={`product-details ${showProductDetails && index==activeProductIndex  ? 'show':'hide'}`}>
                            <p className="breadcrumb"><span onClick={()=>setShowProductDetails(false)}>Products</span> <FontAwesomeIcon icon={faChevronRight} /> {product.name}</p><br></br>
                        <p className="primary-header">{product.name}</p>
                        <div className="product-overview">
                            <div className="left">
                                <img src={product.mainImage} alt={product.name} />
                                <a href={product.link} className="primary-btn">Visit</a>
                            </div>
                            <div className="right">
                                {product.description.map(paragraph => <p>{paragraph}</p>)}
                            </div>
                        </div>
                        <div className="product-wireframe wireframe-in-product">
                        <img class="product-wireframe wireframe-in-product" src={product.wireframeImage} alt="" />
            <div className="product-features-container feature-in-product-page" style={{backgroundColor:"transparent"}}>
                {product.feautures.map(feature => {
                    return <div className="product-feature">
                    <p className="tertiary-header">{feature.title}</p>
                    <p>{feature.description}</p>
                </div>
                })}
                
                </div>
                <ul className="product-features-container-2" style={{backgroundColor:"transparent"}}>
                {product.feautures.map(feature => {
                    return <li >
                       
                            <div>
                    <p className="tertiary-header">{feature.title}</p>
                    <p>{feature.description}</p>
                    </div>
                    </li>
                })}
                
                </ul>
                        </div>
                    </div>
                </div>
            })}</div>
        </div>
    )
}