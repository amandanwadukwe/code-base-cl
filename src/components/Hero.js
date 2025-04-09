// import { useEffect } from "react";
// import "../styleSheets/hero.css";
// import heroImage from "../resources/hero.svg";
// import RHJ from "../resources/rememberHerJourney.png";
// import RHJWireframe from "../resources/rhj-wireframe.png";
// import code from "../resources/code.svg";
// import process from "../resources/process.svg";
// import value from "../resources/value.svg";
// import introVideo from "../resources/aada_intro.mp4";
// import hero160125 from "../resources/hero_16_01_25.png";
// import { Link } from "react-router-dom";
// import aiIcon from "../resources/AI-icon.svg";
// import websiteIcon from "../resources/website-icon.svg";
// import voucherIcon from "../resources/voucher-icon.svg";
// import supportTimeline from "../resources/support-timeline.png";
// import { useNavigate } from 'react-router-dom';


// export default function Hero({ isHomeRevealed, componentToReveal }) {

//     useEffect(() => {
//         componentToReveal('home');
//     }, [componentToReveal])

//     const scrollToTop = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     };

//     const navigate = useNavigate();

//     function goToContactUsPage(){
//         navigate('/contact');
//     };

//     function goToVoucherPage(){
//         navigate('/voucher');
//     };



//     return (
//         <div className="home">
//             {/* <video className="intro-video" autoPlay  muted style={{width: "100%", height: "100vh", position:"absolute",top:0,left:0,zIndex:1500}}>
//       <source src={introVideo} type="video/mp4" />
//     </video> */}
//             <div className="hero">

//                 <div className={`left reveal ${isHomeRevealed ? "active" : ""}`}>
//                     <p className="primary-header">Discover What Tech Can Do When It’s Built for You.</p>
//                     <p className="secondary-text">Too often, the power of technology feels out of reach for those who deserve it most. We’re here to change that, designing AI-powered websites that prioritize your mission, amplify your voice, and meet your unique needs. Our goal is to empower you with tools that don’t just work for others, but are built to serve you. Together, let’s uncover the possibilities of what tech can do when it’s made with purpose.</p>
//                 </div>
//                 <div className={`right reveal ${isHomeRevealed ? "active" : ""}`}>
//                     <img src={hero160125} alt="" />

//                 </div>
//             </div>

//             <div className="service-list">
//                         <div className="service-list-item"><img src={aiIcon} alt="" /><div><span><strong>Bespoke AI-Powered Website</strong></span><p>Cutting-edge tools that are tailor made specifically to server you and your clients.</p> </div></div>
//                         <div className="service-list-item"><img src={websiteIcon} alt="" /><div><span><strong>Website Dev Classes</strong></span><p>Empowering the next generation of web developers with essential skills for building impactful digital products.</p></div></div>
//                         <div className="service-list-item"><img src={voucherIcon} alt="" /><div><span><strong>Vouchers</strong></span><p>Empower local dreams by gifting a voucher to a charity, family member, friend, or community business.</p></div></div>
//                     </div>
//                     <div className="call-to-action">
//                     <p className="secondary-header">We’d love to hear all about what you do!</p>
//                     <p>Contact us today to explore how we can create solutions designed for you, your goals, and the people you serve. Let’s turn possibilities into impact together.</p>
//                     <button className="tertiary-btn" onClick={goToContactUsPage}>Contact Us</button>
//                 </div>

//                     <div className="voucher-container">
//                     <div className="voucher-progress-bar">
//                         <p className="primary-header">Support a Charity</p>
//                         <p className="secondary-header">We've raised £20!</p>
//                         <div className="voucher-progress-bar-outer">
//                             <div className="voucher-progress-bar-inner" ></div>

//                         </div>
//                         <img  src={supportTimeline} alt=""/>
//                     </div>
//                     <div className="voucher-highlight">

//                         {/* <p className="tertiary-header">Your Voucher, Your Impact. Enjoy Flexibility and Support a Cause Today</p> */}
//                         <p>Every time you redeem a voucher, you're not just unlocking benefits for yourself, you're fueling change. Half of the cost empowers charities with the tools they need to thrive in the digital space and the other half keeps our system running smoothly.</p>
//                         <p>Get Your Voucher Now and Start Making an Impact!</p>

//                             <div className="button-container"> <button className="tertiary-btn" onClick={goToContactUsPage}>Contact Us</button><button className="secondary-btn" onClick={goToVoucherPage}>Get Voucher </button></div>


//                     </div>
//                     </div>
//                     <div className="values-container">
//                         <p className="primary-header">Our Mission</p>
//                 <p>We believe that the best technology is built on three pillars: exceptional code, rigorous process, and a relentless focus on generating value. We don’t just write code; we craft it with passion, precision, and purpose. Our team is committed to delivering software that not only meets your needs today but is ready to adapt for tomorrow.</p>
//                 <div className="values">
//                     <div className="value">
//                         <img src={code} alt="" />
//                         <p> <span>Code</span><br></br><span>Beautiful, Efficient, Ethical</span></p>
//                     </div>
//                     <div className="value">
//                         <img src={process} alt="" />
//                         <p> <span>Process</span><br></br><span>Due Diligence, Planning, Testing</span></p>
//                     </div>
//                     <div className="value">
//                         <img src={value} alt="" />
//                         <p> <span>Value</span><br></br><span>Creating Real, Measurable Impact</span></p>
//                     </div>
//                 </div>

//             </div>
//             <p className="primary-header main-product-header">Learn more about our passion!</p>
//             <div className="main-product-container">
//                 <img className={`main-product-image reveal ${isHomeRevealed ? "active" : ""}`} src={RHJ} alt="" />
//                 <div className={`left reveal ${isHomeRevealed ? "active" : ""}`}>
//                     <p><strong>Remember Her Journey</strong></p>
//                     <p>Remember Her Journey is our first product in our movement towards inclusivity, where technology and tradition meet to create something truly unique. By normalizing Indigenous designs, we aim to enrich digital spaces with cultural depth, ensuring the communities where these designs originate are fairly compensated. </p>

//                 </div>

//             </div>
//             {/* <div className="hero-images-container">
//                 <img class="hero-image-1" src={heroImage} alt="" />
//                 <img class="hero-image-2" src={heroImage} alt="" />
//             </div> */}

//             <div className="main-product-highlight-container">
//             <div className="product-features-container">
//                     <div className={`product-feature reveal ${isHomeRevealed ? "active" : ""}`}>
//                         <p><strong>Culturally-Inclusive Design System</strong></p>
//                         <p>Indigenous patterns as foundational elements in a modern, responsive UI framework. This has inspired us to create a comprehensive digital archive of these designs, complete with contextual information, downloadable resources and ethical licensing. </p>
//                     </div>
//                     <div className={`product-feature reveal ${isHomeRevealed ? "active" : ""}`}>
//                         <p><strong>Parallax Pattern Scrolling</strong></p>
//                         <p>Parallax effects that seamlessly blend the pattern with modern web elements as users scroll.</p>
//                     </div>
//                     <div className={`product-feature reveal ${isHomeRevealed ? "active" : ""}`}>
//                         <p><strong>Live Chat Integration</strong></p>
//                         <p>Custom real-time, AI-powered chatbots for instant customer support and enhanced user interactions. </p>
//                     </div>
//                     {/* <a href='https://rememberjerjourney.com/' className={`primary-btn reveal ${isHomeRevealed ? "active" : ""}`} target='_blank'>Visit</a> */}
//                 </div>
//                 <img class={`product-wireframe reveal ${isHomeRevealed ? "active" : ""}`} src={RHJWireframe} alt="" />

//             </div>


//         </div>
//     )
// }

import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import hero160125 from "../resources/hero_16_01_25.png";
import RHJ from "../resources/rememberHerJourney.png";
import RHJWireframe from "../resources/rhj-wireframe.png";
import code from "../resources/CodeUpdated.svg";
import process from "../resources/ProcessUpdated.svg";
import value from "../resources/ValueUpdated.svg";
import aiIcon from "../resources/AIUpdated.svg";
import websiteIcon from "../resources/ClassUpdated.svg";
import voucherIcon from "../resources/VoucherUpdated.svg";
import supportTimeline from "../resources/support-timeline.png";

export default function Hero({ isHomeRevealed, componentToReveal }) {
    useEffect(() => {
        componentToReveal('home');
    }, [componentToReveal]);

    const navigate = useNavigate();

    const goToContactUsPage = () => navigate('/contact');
    const goToVoucherPage = () => navigate('/voucher');

    return (
        <div style={{
            fontFamily: "'Inter', -apple-system, sans-serif",
            color: "#2d3748",
            maxWidth: "100%",
            overflowX: "hidden"
        }}>
            {/* Hero Section */}
            <section style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                padding: "2rem",
                background: "#ffffff",
                position: "relative"
            }}>
                <div style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    gap: "4rem"
                }}>
                    <div className={`reveal ${isHomeRevealed ? "active" : ""}`} style={{
                        flex: 1,
                        padding: "2rem"
                    }}>
                        <h1 style={{
                            fontSize: "3.5rem",
                            fontWeight: 800,
                            lineHeight: 1.2,
                            marginBottom: "2rem",
                            color: "#022350",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            // color: "transparent"
                        }}>
                            Discover What Tech Can Do When It's Built for You
                        </h1>
                        <p style={{
                            fontSize: "1.25rem",
                            lineHeight: 1.6,
                            marginBottom: "3rem",
                            color: "#4a5568",
                            maxWidth: "600px"
                        }}>
                            Too often, the power of technology feels out of reach for those who deserve it most.
                            We're here to change that, designing AI-powered websites that prioritize your mission,
                            amplify your voice, and meet your unique needs.
                        </p>
                        <div style={{ display: "flex", gap: "1rem", justifyContent:"center", alignItems:"center" }}>
                            <button onClick={goToContactUsPage} style={{
                                background: "#022350",
                                color: "white",
                                border: "none",
                                padding: "1rem 2rem",
                                borderRadius: "2rem",
                                fontWeight: 600,
                                cursor: "pointer",
                                transition: "all 0.3s",
                                fontSize: "1rem"
                            }}>
                                Contact Us
                            </button>
                            <button onClick={goToVoucherPage} style={{
                                background: "transparent",
                                color: "#022350",
                                border: "2px solid #022350",
                                padding: "1rem 2rem",
                                borderRadius: "2rem",
                                fontWeight: 600,
                                cursor: "pointer",
                                transition: "all 0.3s",
                                fontSize: "1rem"
                            }}>
                                Get Voucher
                            </button>
                        </div>
                    </div>
                    <div className={`reveal ${isHomeRevealed ? "active" : ""}`} style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <img src={hero160125} alt="Empowering Technology" style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "1rem",
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                        }} />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section style={{
                padding: "6rem 2rem",
                background: "#ffffff"
            }}>
                <div style={{
                    maxWidth: "1200px",
                    margin: "0 auto"
                }}>
                    <h2 style={{
                        fontSize: "2.5rem",
                        fontWeight: 700,
                        marginBottom: "3rem",
                        color: "#022350",
                        textAlign: "center"
                    }}>Our Services</h2>

                    <div style={{
                        display: "flex",
                        gap: "2rem",
                        justifyContent: "center",
                        flexWrap: "wrap"
                    }}>
                        <div style={{
                            flex: "1",
                            minWidth: "300px",
                            display: "flex",
                            gap: "1.5rem",
                            alignItems: "flex-start"
                        }}>
                            <img src={aiIcon} alt="AI" style={{ width: "60px" }} />
                            <div>
                                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Bespoke AI-Powered Website</h3>
                                <p style={{ color: "#4a5568", lineHeight: 1.6 }}>
                                    Cutting-edge tools that are tailor made specifically to serve you and your clients.
                                </p>
                            </div>
                        </div>

                        <div style={{
                            flex: "1",
                            minWidth: "300px",
                            display: "flex",
                            gap: "1.5rem",
                            alignItems: "flex-start"
                        }}>
                            <img src={websiteIcon} alt="Website" style={{ width: "60px" }} />
                            <div>
                                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Website Dev Classes</h3>
                                <p style={{ color: "#4a5568", lineHeight: 1.6 }}>
                                    Empowering the next generation of web developers with essential skills.
                                </p>
                            </div>
                        </div>

                        <div style={{
                            flex: "1",
                            minWidth: "300px",
                            display: "flex",
                            gap: "1.5rem",
                            alignItems: "flex-start"
                        }}>
                            <img src={voucherIcon} alt="Voucher" style={{ width: "60px" }} />
                            <div>
                                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Vouchers</h3>
                                <p style={{ color: "#4a5568", lineHeight: 1.6 }}>
                                    Empower local dreams by gifting a voucher to a charity, family member, or community business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section style={{
                padding: "6rem 2rem",
                background: "#ffffff",
                textAlign: "center"
            }}>
                <div style={{
                    maxWidth: "800px",
                    margin: "0 auto"
                }}>
                    <h2 style={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        marginBottom: "1.5rem",
                        color: "#022350"
                    }}>We'd love to hear all about what you do!</h2>
                    <p style={{
                        fontSize: "1.25rem",
                        lineHeight: 1.6,
                        marginBottom: "2rem",
                        color: "#4a5568"
                    }}>
                        Contact us today to explore how we can create solutions designed for you, your goals, and the people you serve. Let's turn possibilities into impact together.
                    </p>
                    <button onClick={goToContactUsPage} style={{
                        background: "#022350",
                        color: "white",
                        border: "none",
                        padding: "1rem 2rem",
                        borderRadius: "2rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.3s",
                        fontSize: "1rem"
                    }}>
                        Contact Us
                    </button>
                </div>
            </section>

            {/* Voucher Section */}
            {/* <section style={{
                padding: "6rem 2rem",
                background: "#ffffff"
            }}>
                <div style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    display: "flex",
                    gap: "4rem",
                    alignItems: "center"
                }}>
                    <div style={{ flex: 1 }}>
                        <h2 style={{
                            fontSize: "2.5rem",
                            fontWeight: 700,
                            marginBottom: "1rem",
                            color: "#022350"
                        }}>Support a Charity</h2>
                        <p style={{
                            fontSize: "1.25rem",
                            fontWeight: 600,
                            marginBottom: "2rem",
                            color: "#6A11CB"
                        }}>We've raised £20!</p>
                        <div style={{
                            height: "10px",
                            background: "#e2e8f0",
                            borderRadius: "5px",
                            marginBottom: "2rem"
                        }}>
                            <div style={{
                                width: "20%",
                                height: "100%",
                                background: "linear-gradient(90deg, #6A11CB, #11998E)",
                                borderRadius: "5px"
                            }}></div>
                        </div>
                        <img src={supportTimeline} alt="Support Timeline" style={{ maxWidth: "100%" }} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <p style={{
                            fontSize: "1.25rem",
                            lineHeight: 1.6,
                            marginBottom: "2rem",
                            color: "#4a5568"
                        }}>
                            Every time you redeem a voucher, you're not just unlocking benefits for yourself, you're fueling change. Half of the cost empowers charities with the tools they need to thrive in the digital space and the other half keeps our system running smoothly.
                        </p>
                        <p style={{
                            fontSize: "1.25rem",
                            lineHeight: 1.6,
                            marginBottom: "2rem",
                            color: "#4a5568"
                        }}>
                            Get Your Voucher Now and Start Making an Impact!
                        </p>
                        <div style={{ display: "flex", gap: "1rem", justifyContent:"center", alignItems:"center" }}>
                            <button onClick={goToContactUsPage} style={{
                                background: "#022350",
                                color: "white",
                                border: "none",
                                padding: "1rem 2rem",
                                borderRadius: "2rem",
                                fontWeight: 600,
                                cursor: "pointer",
                                transition: "all 0.3s",
                                fontSize: "1rem"
                            }}>
                                Contact Us
                            </button>
                            <button onClick={goToVoucherPage} style={{
                                background: "transparent",
                                color: "#022350",
                                border: "2px solid #022350",
                                padding: "1rem 2rem",
                                borderRadius: "2rem",
                                fontWeight: 600,
                                cursor: "pointer",
                                transition: "all 0.3s",
                                fontSize: "1rem"
                            }}>
                                Get Voucher
                            </button>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Values Section */}
            <section style={{
                padding: "6rem 2rem",
                background: "#ffffff"
            }}>
                <div style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    textAlign: "center"
                }}>
                    <h2 style={{
                        fontSize: "2.5rem",
                        fontWeight: 700,
                        marginBottom: "1.5rem",
                        color: "#022350"
                    }}>Our Mission</h2>
                    <p style={{
                        fontSize: "1.25rem",
                        lineHeight: 1.6,
                        marginBottom: "4rem",
                        color: "#4a5568",
                        maxWidth: "800px",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}>
                        We believe that the best technology is built on three pillars: exceptional code, rigorous process, and a relentless focus on generating value. We don't just write code; we craft it with passion, precision, and purpose. Our team is committed to delivering software that not only meets your needs today but is ready to adapt for tomorrow.
                    </p>

                    <div style={{
                        display: "flex",
                        gap: "2rem",
                        justifyContent: "center",
                        flexWrap: "wrap"
                    }}>
                        <div style={{
                            flex: "1",
                            minWidth: "300px",
                            padding: "2rem",
                            background: "white",
                            borderRadius: "1rem",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"
                        }}>
                            <img src={code} alt="Code" style={{ width: "80px", marginBottom: "1.5rem" }} />
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Code</h3>
                            <p style={{ color: "#4a5568", lineHeight: 1.6 }}>
                                Beautiful, Efficient, Ethical
                            </p>
                        </div>

                        <div style={{
                            flex: "1",
                            minWidth: "300px",
                            padding: "2rem",
                            background: "white",
                            borderRadius: "1rem",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"
                        }}>
                            <img src={process} alt="Process" style={{ width: "80px", marginBottom: "1.5rem" }} />
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Process</h3>
                            <p style={{ color: "#4a5568", lineHeight: 1.6 }}>
                                Due Diligence, Planning, Testing
                            </p>
                        </div>

                        <div style={{
                            flex: "1",
                            minWidth: "300px",
                            padding: "2rem",
                            background: "white",
                            borderRadius: "1rem",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"
                        }}>
                            <img src={value} alt="Value" style={{ width: "80px", marginBottom: "1.5rem" }} />
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Value</h3>
                            <p style={{ color: "#4a5568", lineHeight: 1.6 }}>
                                Creating Real, Measurable Impact
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Highlight */}
            <section style={{
                padding: "6rem 2rem",
                background: "#ffffff"
            }}>
                <div style={{
                    maxWidth: "1200px",
                    margin: "0 auto"
                }}>
                    <h2 style={{
                        fontSize: "2.5rem",
                        fontWeight: 700,
                        marginBottom: "3rem",
                        color: "#022350",
                        textAlign: "center"
                    }}>Learn more about our passion!</h2>

                    <div style={{
                        display: "flex",
                        gap: "4rem",
                        alignItems: "center",
                        marginBottom: "4rem"
                    }}>
                        <div className={`reveal ${isHomeRevealed ? "active" : ""}`} style={{ flex: 1 }}>
                            <img src={RHJ} alt="Remember Her Journey" style={{
                                maxWidth: "100%",
                                borderRadius: "1rem",
                                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                            }} />
                        </div>
                        <div className={`reveal ${isHomeRevealed ? "active" : ""}`} style={{ flex: 1 }}>
                            <h3 style={{
                                fontSize: "2rem",
                                fontWeight: 700,
                                marginBottom: "1.5rem",
                                color: "#022350"
                            }}>Remember Her Journey</h3>
                            <p style={{
                                fontSize: "1.25rem",
                                lineHeight: 1.6,
                                color: "#4a5568"
                            }}>
                                Remember Her Journey is our first product in our movement towards inclusivity, where technology and tradition meet to create something truly unique. By normalizing Indigenous designs, we aim to enrich digital spaces with cultural depth, ensuring the communities where these designs originate are fairly compensated.
                            </p>
                        </div>
                    </div>

                    <div style={{
                        display: "flex",
                        gap: "4rem",
                        alignItems: "center"
                    }}>
                        <div style={{ flex: 1 }}>
                            <div className={`reveal ${isHomeRevealed ? "active" : ""}`} style={{ marginBottom: "2rem" }}>
                                <h4 style={{
                                    fontSize: "1.5rem",
                                    fontWeight: 700,
                                    marginBottom: "1rem",
                                    color: "#022350"
                                }}>Culturally-Inclusive Design System</h4>
                                <p style={{
                                    fontSize: "1.1rem",
                                    lineHeight: 1.6,
                                    color: "#4a5568"
                                }}>
                                    Indigenous patterns as foundational elements in a modern, responsive UI framework. This has inspired us to create a comprehensive digital archive of these designs, complete with contextual information, downloadable resources and ethical licensing.
                                </p>
                            </div>

                            <div className={`reveal ${isHomeRevealed ? "active" : ""}`} style={{ marginBottom: "2rem" }}>
                                <h4 style={{
                                    fontSize: "1.5rem",
                                    fontWeight: 700,
                                    marginBottom: "1rem",
                                    color: "#022350"
                                }}>Parallax Pattern Scrolling</h4>
                                <p style={{
                                    fontSize: "1.1rem",
                                    lineHeight: 1.6,
                                    color: "#4a5568"
                                }}>
                                    Parallax effects that seamlessly blend the pattern with modern web elements as users scroll.
                                </p>
                            </div>

                            <div className={`reveal ${isHomeRevealed ? "active" : ""}`}>
                                <h4 style={{
                                    fontSize: "1.5rem",
                                    fontWeight: 700,
                                    marginBottom: "1rem",
                                    color: "#022350"
                                }}>Live Chat Integration</h4>
                                <p style={{
                                    fontSize: "1.1rem",
                                    lineHeight: 1.6,
                                    color: "#4a5568"
                                }}>
                                    Custom real-time, AI-powered chatbots for instant customer support and enhanced user interactions.
                                </p>
                            </div>
                        </div>

                        <div className={`reveal ${isHomeRevealed ? "active" : ""}`} style={{ flex: 1 }}>
                            <img src={RHJWireframe} alt="Product Wireframe" style={{
                                maxWidth: "100%",
                                borderRadius: "1rem",
                                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                            }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}