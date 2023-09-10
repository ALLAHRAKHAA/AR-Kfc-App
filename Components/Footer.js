import React from "react";


export default function Footer() {



    return (

        <>

            {/* <div>Footer</div> */}

            <footer className="section bg-footer footer-section">
                <div className="container">
                    <div className="row text-black" >
                    <div className="col-lg-3"><div className="">
                        <h5 className="footer-heading text-uppercase text-white">Information</h5>
                        <h6>Pages</h6>
                        <h6>Our Staff</h6>
                        <h6>Features</h6>
                        <h6>Suggestion</h6>
                        
                    </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="">
                            <h6 className="footer-heading text-uppercase text-white">Ressources</h6>
                                <h6>Monitoring</h6>
                                <h6>Video Tutorial</h6>
                                <h6>Term & Service</h6>
                                <h6>API's</h6>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="">
                            <h6 className="footer-heading text-uppercase text-white">Help</h6>
                                <h6>Sign Up</h6>
                                <h6>Login</h6>
                                <h6>Terms of Services</h6>
                                <h6>Privacy Poh6cy</h6>
                            </div></div>
                    <div className="col-lg-3">
                        <div className="">
                            <h5 className="footer-heading text-uppercase text-white">Contact Us</h5>
                            <h6 className="contact-info mt-4">Contact us if you need any help</h6>
                            <h6 className="contact-info">+92 123-456-7890</h6>
                            <div className="mt-5">
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="text-center mt-5" style={{backgroundColor:"#186870",color:"white"}}>
                    <h5 className="footer-alt mb-0 f-14">2023 © AR Rehman, All Rights Reserved</h5>
                </div>
                
            </footer>

        </>
    )

}