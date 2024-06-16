import React from "react";
import './package.css';
import { Link } from 'react-router-dom';
import honey from '../../images/honey.jpg';
import adventure from '../../images/adventure.jpg';
import beach from '../../images/beach.jpg';
import cultural from '../../images/cultural.jpg';
import family from '../../images/family.jpg';
import luxury from '../../images/luxury.jpg';
import concert from '../../images/concert.jpg';



function Package() {
    const packages = [
        { name: "Honeymoon Package", price: "Rs:35000" ,img : honey},
        { name: "Adventure Package", price: "Rs:40000" ,img : adventure},
        { name: "Family Package", price: "Rs:30000" ,img : family},
        { name: "Luxury Package", price: "Rs:50000" ,img : luxury},
        { name: "Cultural Package", price: "Rs:20000" ,img : cultural},
        { name: "Beach Package", price: "Rs:45000" ,img : beach}
    ];

    return (
        <>
            
            <div className="offmain">
                <img src={concert} alt="" className="packmainimg" />
            </div>
            <div className="mt-4">
                <h5 className="text-center packh5 mb-3 clr">PACKAGES</h5>
            </div>
            <div className="container">
                <div className="row">
                    {packages.map((pkg, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4 mb-3 ">
                            <img src={pkg.img} alt="" className="packageimg" />
                            <div className="text-start packpack">
                            <h5 className="">{pkg.name}</h5>
                            <h6 className="">{pkg.price}</h6>
                            <div className="">
                                <Link to={{
                                    pathname: '/packagepurchase'
                                }}>
                                    <button className="packagebtn btn packbtn text-white text-center d-inline-block">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Package;
