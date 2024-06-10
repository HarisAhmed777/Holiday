import React from "react";
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter as faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="bg-dark foot">
            <div className="container bg-dark text-white">
                <h5 className="text-white text-center clrr">Contact us</h5>
                <section className="text-white row">
                    <div className="col-lg-4 col-12">
                        <i><FontAwesomeIcon icon={faPhone} /></i>
                        <span>1-800-922-0444</span>
                    </div>
                    <div className="col-lg-4 col-12">
                        <p>
                            <i><FontAwesomeIcon icon={faEnvelope} /></i>
                            <span>waawtech@gmail.com</span>
                        </p>
                    </div>
                    <div className="col-lg-4 col-12">
                        <i><FontAwesomeIcon icon={faComment} /></i>
                        <span>Feedback</span>
                    </div>
                </section>
                <div className="bg-dark col-12 text-center follow-us">
                    <h6 className="text-white">Follow us on:
                        <span style={{ color: '#3b5998', margin: '0 10px' }}><FontAwesomeIcon icon={faFacebook} /></span>
                        <span style={{ color: '#C13584', margin: '0 10px' }}><FontAwesomeIcon icon={faInstagram} /></span>
                        <span style={{ color: '#1DA1F2', margin: '0 10px' }}><FontAwesomeIcon icon={faXTwitter} /></span>
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default Footer;
