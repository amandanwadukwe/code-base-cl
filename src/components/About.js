// import { useEffect } from "react";

// export default function About({ isAboutRevealed, componentToReveal }) {

//     useEffect(() => {
//         componentToReveal('about');
//     }, [componentToReveal])

//     return <div className="container">
//         <p className={`primary-header reveal ${isAboutRevealed ? "active" : ""}`} >About Us</p>
//         <p className={`secondary-header reveal ${isAboutRevealed ? "active" : ""}`}>we’re not just building websites; we’re building bridges.</p>
//         <div className="value-details-container">
//             <div className="value-details">
//                 <p>Our love for code goes beyond the lines we write. It’s about creating software that is as beautiful inside as it is functional outside. We adhere to the highest standards of code quality, ensuring our work is clean, efficient, and maintainable.</p>

//                 <p>We believe in ethical coding practices and inclusive designs that respect user privacy and promote social good. Our process involves due diligence, thorough planning, and constant iteration to ensure each project is a success.</p>
//             </div>

//             {/* <div className="value-details">
//             <p className={`secondary-header reveal ${isAboutRevealed ? "active" : ""}`}>Code</p>
//             <p className={`reveal ${isAboutRevealed ? "active" : ""}`}>Our love for code goes beyond the lines we write. It’s about creating software that is as beautiful inside as it is functional outside. We adhere to the highest standards of code quality, ensuring our work is clean, efficient, and maintainable.</p>
//             {/* <p className={`reveal ${isAboutRevealed ? "active" : ""}`}>Example: We recently completed a project where we reduced a legacy codebase by 40%, improving efficiency and reducing load times by 60%. This not only optimized performance but also made future updates easier and faster, saving our client both time and money.</p> }
//             <p className={`reveal ${isAboutRevealed ? "active" : ""}`}>Ethical Coding: We’re also committed to ethical coding practices. Our developers follow strict guidelines to ensure that the software we build respects user privacy, avoids biases, and promotes inclusivity.</p>
//         </div>
//         <div className="value-details">

//             <p className={`secondary-header reveal ${isAboutRevealed ? "active" : ""}`}>Process</p>
//             <p className={`reveal ${isAboutRevealed ? "active" : ""}`}>Great code is only possible with a great process. Our approach to software development is thorough and methodical, from initial planning through to final deployment.</p>
//             {/* <p className={`reveal ${isAboutRevealed ? "active" : ""}`}>Due Diligence: Every project begins with an in-depth discovery phase where we immerse ourselves in your business needs. We don’t just listen; we ask the tough questions to ensure we understand the full scope of your requirements.
//             Testing: We follow a rigorous testing protocol at every stage of development. Our automated and manual testing processes ensure that our software is robust, reliable, and ready for any challenge.</p> }
//             <p className={`reveal ${isAboutRevealed ? "active" : ""}`}>Planning: We believe that proper planning is the key to success. Our agile project management ensures that your project stays on track, on time, and within budget, with regular updates and transparent communication throughout the journey.</p>
//         </div>

//         <div className="value-details"> }
//             <p className={`secondary-header reveal ${isAboutRevealed ? "active" : ""}`}>Value</p>
//             <p className={`reveal ${isAboutRevealed ? "active" : ""}`}> At the end of the day, it’s all about value. We’re not just developers; we’re partners in your success. We focus on creating solutions that deliver real, measurable impact for your business.</p>

// {/* <p className={`reveal ${isAboutRevealed ? "active" : ""}`}>Example: For a recent client, we developed a custom CRM system that streamlined their customer management process, resulting in a 30% increase in sales and a 25% reduction in customer service response times. This tangible improvement in performance directly contributed to their bottom line.</p> }

// <p className={`reveal ${isAboutRevealed ? "active" : ""}`}>Long-Term Value: We don’t just aim for quick wins. Our solutions are designed to provide long-term value, with scalable architectures that can grow with your business and adaptable systems that can evolve with the market.</p>
//         </div>
//     </div>
// */}

//         </div>
//     </div>}


import { useEffect } from "react";

export default function About({ isAboutRevealed, componentToReveal }) {
    useEffect(() => {
        componentToReveal('about');
    }, [componentToReveal]);

    // Sample team data - replace with your actual team members
    const teamMembers = [
        {
            id: 1,
            name: "Alex Johnson",
            role: "Founder & Lead Developer",
            bio: "Passionate about ethical AI and inclusive design. Over 10 years of experience building scalable web applications.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
        },
        {
            id: 2,
            name: "Maria Garcia",
            role: "UX/UI Designer",
            bio: "Specializes in culturally-inclusive design systems. Believes technology should reflect the diversity of its users.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
        },
        {
            id: 3,
            name: "Jamal Williams",
            role: "Full Stack Developer",
            bio: "Focuses on building efficient, maintainable code. Loves solving complex problems with elegant solutions.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
        }
    ];

    return (
        <div style={{
            fontFamily: "'Inter', -apple-system, sans-serif",
            color: "#2d3748",
            maxWidth: "100%",
            overflowX: "hidden",
            padding: "0 2rem"
        }}>
            {/* About Us Section */}
            <section style={{
                padding: "6rem 0",
                maxWidth: "1200px",
                margin: "0 auto"
            }}>
                {/* <h1 className={`reveal ${isAboutRevealed ? "active" : ""}`} style={{
                    fontSize: "3rem",
                    fontWeight: 800,
                    marginBottom: "1.5rem",
                    background:"#022350",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent"
                }}>
                    About Us
                </h1> */}
                <h2 className={`reveal ${isAboutRevealed ? "active" : ""}`} style={{
                    fontSize: "2rem",
                    fontWeight: 600,
                    marginBottom: "3rem",
                    color: "#022350"
                }}>
                    We're not just building websites; we're building bridges.
                </h2>
                
                <div style={{
                    display: "flex",
                    gap: "4rem",
                    flexWrap: "wrap"
                }}>
                    <div className={`reveal ${isAboutRevealed ? "active" : ""}`} style={{
                        flex: 1,
                        minWidth: "300px"
                    }}>
                        <p style={{
                            fontSize: "1.25rem",
                            lineHeight: 1.6,
                            marginBottom: "2rem",
                            color: "#4a5568"
                        }}>
                            Our love for code goes beyond the lines we write. It's about creating software that is as beautiful inside as it is functional outside. We adhere to the highest standards of code quality, ensuring our work is clean, efficient, and maintainable.
                        </p>
                        <p style={{
                            fontSize: "1.25rem",
                            lineHeight: 1.6,
                            color: "#4a5568"
                        }}>
                            We believe in ethical coding practices and inclusive designs that respect user privacy and promote social good. Our process involves due diligence, thorough planning, and constant iteration to ensure each project is a success.
                        </p>
                    </div>
                    
                    <div className={`reveal ${isAboutRevealed ? "active" : ""}`} style={{
                        flex: 1,
                        minWidth: "300px",
                        background: "#f9f5ff",
                        borderRadius: "1rem",
                        padding: "2rem"
                    }}>
                        <h3 style={{
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            marginBottom: "1.5rem",
                            color: "#6A11CB"
                        }}>Our Core Values</h3>
                        <ul style={{
                            listStyle: "none",
                            padding: 0
                        }}>
                            <li style={{
                                marginBottom: "1.5rem",
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "1rem"
                            }}>
                                <div style={{
                                    background: "#6A11CB",
                                    color: "white",
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0
                                }}>1</div>
                                <div>
                                    <h4 style={{
                                        fontSize: "1.25rem",
                                        fontWeight: 600,
                                        marginBottom: "0.5rem",
                                        color: "#022350"
                                    }}>Beautiful Code</h4>
                                    <p style={{
                                        fontSize: "1rem",
                                        lineHeight: 1.6,
                                        color: "#4a5568"
                                    }}>Clean, efficient, and maintainable code that stands the test of time.</p>
                                </div>
                            </li>
                            <li style={{
                                marginBottom: "1.5rem",
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "1rem"
                            }}>
                                <div style={{
                                    background: "#6A11CB",
                                    color: "white",
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0
                                }}>2</div>
                                <div>
                                    <h4 style={{
                                        fontSize: "1.25rem",
                                        fontWeight: 600,
                                        marginBottom: "0.5rem",
                                        color: "#022350"
                                    }}>Rigorous Process</h4>
                                    <p style={{
                                        fontSize: "1rem",
                                        lineHeight: 1.6,
                                        color: "#4a5568"
                                    }}>Methodical approach from planning through deployment.</p>
                                </div>
                            </li>
                            <li style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "1rem"
                            }}>
                                <div style={{
                                    background: "#6A11CB",
                                    color: "white",
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0
                                }}>3</div>
                                <div>
                                    <h4 style={{
                                        fontSize: "1.25rem",
                                        fontWeight: 600,
                                        marginBottom: "0.5rem",
                                        color: "#022350"
                                    }}>Measurable Impact</h4>
                                    <p style={{
                                        fontSize: "1rem",
                                        lineHeight: 1.6,
                                        color: "#4a5568"
                                    }}>Solutions that deliver real value and drive business success.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Meet the Team Section */}
            {/* <section style={{
                padding: "6rem 0",
                background: "#ffffff",
                maxWidth: "1200px",
                margin: "0 auto"
            }}>
                <h2 className={`reveal ${isAboutRevealed ? "active" : ""}`} style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    marginBottom: "3rem",
                    color: "#022350",
                    textAlign: "center"
                }}>
                    Meet the Team
                </h2>
                
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "3rem"
                }}>
                    {teamMembers.map((member) => (
                        <div key={member.id} className={`reveal ${isAboutRevealed ? "active" : ""}`} style={{
                            background: "#f9f5ff",
                            borderRadius: "1rem",
                            overflow: "hidden",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                            transition: "all 0.3s"
                        }}>
                            <img src={member.image} alt={member.name} style={{
                                width: "100%",
                                height: "300px",
                                objectFit: "cover"
                            }} />
                            <div style={{
                                padding: "2rem"
                            }}>
                                <h3 style={{
                                    fontSize: "1.5rem",
                                    fontWeight: 700,
                                    marginBottom: "0.5rem",
                                    color: "#022350"
                                }}>{member.name}</h3>
                                <p style={{
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    marginBottom: "1rem",
                                    color: "#6A11CB"
                                }}>{member.role}</p>
                                <p style={{
                                    fontSize: "1rem",
                                    lineHeight: 1.6,
                                    color: "#4a5568"
                                }}>{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* Values in Detail Section */}
            <section style={{
                padding: "6rem 0",
                maxWidth: "1200px",
                margin: "0 auto"
            }}>
                <h2 className={`reveal ${isAboutRevealed ? "active" : ""}`} style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    marginBottom: "3rem",
                    color: "#022350",
                    textAlign: "center"
                }}>
                    Our Approach
                </h2>
                
                <div style={{
                    display: "flex",
                    gap: "4rem",
                    flexWrap: "wrap"
                }}>
                    <div className={`reveal ${isAboutRevealed ? "active" : ""}`} style={{
                        flex: 1,
                        minWidth: "300px",
                        padding: "2rem",
                        background: "#ffffff",
                        borderRadius: "1rem",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"
                    }}>
                        <h3 style={{
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            marginBottom: "1.5rem",
                            color: "#6A11CB"
                        }}>Code</h3>
                        <p style={{
                            fontSize: "1rem",
                            lineHeight: 1.6,
                            marginBottom: "1rem",
                            color: "#4a5568"
                        }}>
                            Our love for code goes beyond the lines we write. It's about creating software that is as beautiful inside as it is functional outside.
                        </p>
                        <p style={{
                            fontSize: "1rem",
                            lineHeight: 1.6,
                            color: "#4a5568"
                        }}>
                            We adhere to the highest standards of code quality, ensuring our work is clean, efficient, and maintainable. We're also committed to ethical coding practices that respect user privacy and promote inclusivity.
                        </p>
                    </div>
                    
                    <div className={`reveal ${isAboutRevealed ? "active" : ""}`} style={{
                        flex: 1,
                        minWidth: "300px",
                        padding: "2rem",
                        background: "#ffffff",
                        borderRadius: "1rem",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"
                    }}>
                        <h3 style={{
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            marginBottom: "1.5rem",
                            color: "#6A11CB"
                        }}>Process</h3>
                        <p style={{
                            fontSize: "1rem",
                            lineHeight: 1.6,
                            marginBottom: "1rem",
                            color: "#4a5568"
                        }}>
                            Great code is only possible with a great process. Our approach to software development is thorough and methodical.
                        </p>
                        <p style={{
                            fontSize: "1rem",
                            lineHeight: 1.6,
                            color: "#4a5568"
                        }}>
                            From initial planning through to final deployment, we follow rigorous testing protocols and maintain transparent communication to ensure your project stays on track, on time, and within budget.
                        </p>
                    </div>
                    
                    <div className={`reveal ${isAboutRevealed ? "active" : ""}`} style={{
                        flex: 1,
                        minWidth: "300px",
                        padding: "2rem",
                        background: "#ffffff",
                        borderRadius: "1rem",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"
                    }}>
                        <h3 style={{
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            marginBottom: "1.5rem",
                            color: "#6A11CB"
                        }}>Value</h3>
                        <p style={{
                            fontSize: "1rem",
                            lineHeight: 1.6,
                            marginBottom: "1rem",
                            color: "#4a5568"
                        }}>
                            At the end of the day, it's all about value. We're not just developers; we're partners in your success.
                        </p>
                        <p style={{
                            fontSize: "1rem",
                            lineHeight: 1.6,
                            color: "#4a5568"
                        }}>
                            We focus on creating solutions that deliver real, measurable impact for your business, with scalable architectures that can grow with your needs.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}