import { useEffect } from "react";



export default function Support({ isSupportRevealed, componentToReveal }){

    useEffect(()=>  {
        componentToReveal('support');
    },[componentToReveal])

    return (
        <div className="support-container container">
            {/* <p className={`primary-header reveal ${isSupportRevealed ? "active" : ""}`}>Support</p> */}
            <div>
                <div>
                <p className={`secondary-header reveal ${isSupportRevealed ? "active" : ""}`}>Join us on the journey to innovation</p>
                <p  className={`reveal ${isSupportRevealed ? "active" : ""}`}>Whether you're looking to enhance your existing systems or build something entirely new, Aad is here to help. Let's work together to create technology that is not only powerful and efficient but also ethical and impactful. </p>
                </div>
                <embed className={`reveal ${isSupportRevealed ? "active" : ""}`} src="https://www.gofundme.com/f/degsge-help-us-make-a-difference?utm_campaign=man_sharesheet_dash_ai&utm_content=amp9v2&utm_medium=customer&utm_source=copy_link"/>

            </div>
        </div>
    )
}