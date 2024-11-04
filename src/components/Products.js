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
    const products = [{
        "name": "Remember Her Journey",
        "description": ["A movement towards inclusivity, where technology and tradition meet to create something truly unique. By aiming normalizing indeginous designs.", "We were able to leverage Indigenous patterns as foundational elements in a modern, responsive UI framework, inspiring us to create a comprehensive digital archive of these designs, complete with contextual information and downloadable resources. Additionally, we are currently developing and integrating an API that enables developers to embed authentic Indigenous designs across various digital platforms."],
        "highlightedResource": {
            "name": "ethical licensing document",
            "link": ""
        },
        "link": "",
        "mainImage": RHJ,
        "wireframeImage": RHJWireframe,
        "feautures": [{ "title": "Culturally-Inclusive Design System", "description": "Indigenous patterns as foundational elements in a modern, responsive UI framework. This has inspired us to create a comprehensive digital archive of these designs, complete with contextual information, downloadable resources and ethical licensing. " }, { "title": "Parallax Pattern Scrolling", "description": "Parallax effects that seamlessly blend the pattern with modern web elements as users scroll." }, { "title": "Live Chat Integration", "description": "Custom real-time, AI-powered chatbots for instant customer support and enhanced user interactions." }]
    }]
    return (
        <div className=" container">
            <p className={`primary-header reveal ${isProductRevealed ? "active" : ""}`}>Products</p>
            <div className="products">
            {products.map(product => {
                return <div className="product-container">
                    <div className={`product ${showProductDetails ? 'hide':'show'}`} onClick={()=>setShowProductDetails(true)}>
                        <img className={`reveal ${isProductRevealed ? "active" : ""}`} src={product.mainImage} alt={product.name} />
                        <p className={`tertiary-header reveal ${isProductRevealed ? "active" : ""}`} style={{ color: "black" }}>{product.name}</p>
                    </div>
                    <div className={`product-details ${showProductDetails ? 'show':'hide'}`}>
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