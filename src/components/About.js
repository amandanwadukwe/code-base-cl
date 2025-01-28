import { useEffect } from "react";

export default function About({ isAboutRevealed, componentToReveal }) {

    useEffect(() => {
        componentToReveal('about');
    }, [componentToReveal])

    return <div className="container">
        <p className={`primary-header reveal ${isAboutRevealed ? "active" : ""}`} >About Us</p>
        <p className={`secondary-header reveal ${isAboutRevealed ? "active" : ""}`}>we’re not just building websites; we’re building bridges.</p>
        <div className="value-details-container">
            <div className="value-details">
                <p>Our love for code goes beyond the lines we write. It’s about creating software that is as beautiful inside as it is functional outside. We adhere to the highest standards of code quality, ensuring our work is clean, efficient, and maintainable.</p>

                <p>We believe in ethical coding practices and inclusive designs that respect user privacy and promote social good. Our process involves due diligence, thorough planning, and constant iteration to ensure each project is a success.</p>
            </div>

            {/* <div className="value-details">
            <p className={`secondary-header reveal ${isAboutRevealed ? "active" : ""}`}>Code</p>
            <p className={`reveal ${isAboutRevealed ? "active" : ""}`}>Our love for code goes beyond the lines we write. It’s about creating software that is as beautiful inside as it is functional outside. We adhere to the highest standards of code quality, ensuring our work is clean, efficient, and maintainable.</p>
            {/* <p className={`reveal ${isAboutRevealed ? "active" : ""}`}>Example: We recently completed a project where we reduced a legacy codebase by 40%, improving efficiency and reducing load times by 60%. This not only optimized performance but also made future updates easier and faster, saving our client both time and money.</p> }
            <p className={`reveal ${isAboutRevealed ? "active" : ""}`}>Ethical Coding: We’re also committed to ethical coding practices. Our developers follow strict guidelines to ensure that the software we build respects user privacy, avoids biases, and promotes inclusivity.</p>
        </div>
        <div className="value-details">

            <p className={`secondary-header reveal ${isAboutRevealed ? "active" : ""}`}>Process</p>
            <p className={`reveal ${isAboutRevealed ? "active" : ""}`}>Great code is only possible with a great process. Our approach to software development is thorough and methodical, from initial planning through to final deployment.</p>
            {/* <p className={`reveal ${isAboutRevealed ? "active" : ""}`}>Due Diligence: Every project begins with an in-depth discovery phase where we immerse ourselves in your business needs. We don’t just listen; we ask the tough questions to ensure we understand the full scope of your requirements.
            Testing: We follow a rigorous testing protocol at every stage of development. Our automated and manual testing processes ensure that our software is robust, reliable, and ready for any challenge.</p> }
            <p className={`reveal ${isAboutRevealed ? "active" : ""}`}>Planning: We believe that proper planning is the key to success. Our agile project management ensures that your project stays on track, on time, and within budget, with regular updates and transparent communication throughout the journey.</p>
        </div>

        <div className="value-details"> }
            <p className={`secondary-header reveal ${isAboutRevealed ? "active" : ""}`}>Value</p>
            <p className={`reveal ${isAboutRevealed ? "active" : ""}`}> At the end of the day, it’s all about value. We’re not just developers; we’re partners in your success. We focus on creating solutions that deliver real, measurable impact for your business.</p>

{/* <p className={`reveal ${isAboutRevealed ? "active" : ""}`}>Example: For a recent client, we developed a custom CRM system that streamlined their customer management process, resulting in a 30% increase in sales and a 25% reduction in customer service response times. This tangible improvement in performance directly contributed to their bottom line.</p> }

<p className={`reveal ${isAboutRevealed ? "active" : ""}`}>Long-Term Value: We don’t just aim for quick wins. Our solutions are designed to provide long-term value, with scalable architectures that can grow with your business and adaptable systems that can evolve with the market.</p>
        </div>
    </div>
*/}

        </div>
    </div>}