import React from "react";
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter as faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const contactInfo = [
        { icon: faPhone, text: '1-800-922-0444' },
        { icon: faEnvelope, text: 'waawtech@gmail.com' },
        { icon: faComment, text: 'Feedback' }
    ];

    const socialIcons = [
        { icon: faFacebook, color: '#3b5998' },
        { icon: faInstagram, color: '#C13584' },
        { icon: faXTwitter, color: '#1DA1F2' }
    ];

    return (
        <div className="bg-dark foot mt-3">
            <div className="container bg-dark text-white">
                <h5 className="text-white text-center clrr">Contact us</h5>
                <section className="text-white row">
                    {contactInfo.map((item, index) => (
                        <div key={index} className="col-lg-4 col-4">
                            <i><FontAwesomeIcon icon={item.icon} /></i>
                            <span>{item.text}</span>
                        </div>
                    ))}
                </section>
                <div className=" p-4 bg-dark col-12 text-center follow-us">
                    <h6 className="text-white followhead">Follow us on:
                        {socialIcons.map((item, index) => (
                            <span key={index} style={{ color: item.color, margin: '0 10px' }}>
                                <FontAwesomeIcon icon={item.icon} />
                            </span>
                        ))}
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default Footer;
