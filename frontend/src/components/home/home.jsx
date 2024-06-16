import React from "react";
import './home.css';
import { Link } from "react-router-dom";
import homemain1 from '../../images/homemain1.jpg';
import homemain2 from '../../images/homemain2.jpg';
import homemain3 from '../../images/homemain3.jpg';
import homeexp1 from '../../images/homeexp1.jpg';
import homeexp2 from '../../images/homeexp2.jpg';
import homeimgfour from '../../images/homeimgfour.jpg';





function Home(){
    return(
        <>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active coroit">
                        <img src={homemain3} className="d-block homemainimg  w-100 caroimg" alt="Dehradun Banner" />
                    </div>
                    <div className="carousel-item">
                        <img src={homemain2}className="d-block w-100 homemainimg" alt="holiday Packages" />
                    </div>
                    <div className="carousel-item">
                        <img src={homemain1} className="d-block w-100 homemainimg" alt="North East Packages" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12 text-center loopingpara train">
                        <p>"Top-Rated Indian Tourist Spots"</p>
                    </div>
                </div>

                <div>
                    <h1 className="text-center mt-2 mb-4 clr">Our  Experience</h1>
                    <div className="row mt-2">
                        <div className="col-lg-6 col-md-12">
                            <img src={homeexp1} alt="Pet Friendly Resort" className="img-fluid" />
                        </div>
                        <div className="col-lg-6 col-md-12 text-center">
                            <h3 className="clr">The aim of our brand to make multiple tourist spots  pet friendly!</h3>
                            <p>At WaaawTech, we are dedicated to transforming the travel experience for pet lovers across India. Our mission is to identify and collaborate with a multitude of tourist spots, ensuring they become welcoming and comfortable for pets and their owners. We believe that a memorable holiday should include every member of the family, including our furry friends. Through our extensive network and expertise, we strive to promote and enhance pet-friendly facilities, making it easier for travelers to find the perfect getaway where pets are not only allowed but celebrated. Join us in our journey to make travel more inclusive and enjoyable for all.Sign up to enjoy our privileges every time you holiday with us.</p>
                            <Link to ='/booking'><button className="btnhome ">Book Now</button></Link>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-6 col-md-12 text-center">
                            <h3 className="clr">We find hidden tourist spots and ensure they are safe for our travelers.</h3>
                            <p>
                            At WaaawTech, our passion lies in discovering the unexplored and hidden tourist spots across India. We take great pride in offering unique travel experiences that go beyond the usual destinations. Our dedicated team meticulously assesses each location to ensure it meets our stringent safety standards, providing peace of mind for our travelers. By prioritizing safety and comfort, we aim to create unforgettable journeys that are both adventurous and secure. Whether it's a secluded beach, a serene hill station, or a quaint village, we guarantee that every destination we recommend has been thoroughly vetted for your enjoyment and safety..</p>
                            <Link  to = '/booking'><button className="btnhome">Book Now</button></Link>
                        </div>
                        <div className="col-lg-6 col-md-12 mt-2">
                            <img src={homeexp2} className="img-fluid se" />
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-center mt-5 clr">MEETINGS AND EVENTS</h2>
                    <div className="row mt-5">
                        <div className="col-lg-6 col-md-12">
                            <img src={homeimgfour} alt="Meetings and Events" className="img-fluid se home4" />
                        </div>
                        <div className="col-lg-6 col-md-12 text-center">
                            <h5 className="clr">Every moment, a holiday moment</h5>
                            <p>Many moments in life deserve a special space. Like reunions, offsite conferences, and of course your 'big day'. Our spaces provide banqueting facilities of different capacities at picturesque locations, with customized itineraries. With us, moments become cherished memories.</p>
                        </div>
                    </div>
                </div>


            </div>
            
        </>
    )

}

export default Home;
