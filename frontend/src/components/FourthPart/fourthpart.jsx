import React from 'react';
import './fourthpath.css';
import eastimg from '../../images/picnics-goa.jpg';
import goa from '../../images/picnics-goa.jpg';
import lonavala from '../../images/picnics-lonavala.jpg';
import mountabu from '../../images/picnics-mount-abu.jpg';
import wayanad from '../../images/picnics-wayanad.jpg';
import gpdavari from '../../images/picnics-godavari.jpg';
import anaikatti from '../../images/picnics-anaikatti.jpg';
import ooty from '../../images/picnics-ooty.jpg';
import alleppey from '../../images/picnics-alleppey.jpg';
import sajan from '../../images/picnics-sajan.jpg';
import durshet from '../../images/picnics-durshet.jpg';
import kundalika from '../../images/picnics-kundalika.jpg';
import { Link, useNavigate } from 'react-router-dom';

function Fourthpart() {
    const navigate = useNavigate();

    const handleImageClick = (heading) => {
        navigate('/booking', { state: { city: heading } });
    };

    return (
        <>
            <div className='fourtheast text-center mt-5'>
                <h1 className='textcenter clr'>East</h1>
                <div className='foutheastimg'>
                    <div className="container d-flex justify-content-center align-items-center mt-2">
                        <div className="image-container " onClick={() => handleImageClick('Puri')}>
                            <img src={eastimg} alt="Image" className="image" />
                            <div className="overlay">
                                <h2 className="heading">Waawtech Puri</h2>
                                <p className="contentp">Easy drive to from Bhubaneshwar • Enjoy in-resort activities* • Relaxing swimming pool • Access to a beautiful beach • Opt in* for luxurious spa treatments at the Subuthi spa (*not included in picnic package. Can be availed at additional cost.)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fourthwestmt-5'>
                <h1 className='text-center clr'>West</h1>
                <div className='d-flex justify-content-center row'>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Goa')}>
                                <img src={goa} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Waawtech Goa</h2>
                                    <p className="contentp">• Easy drive to from Panjim, Belgavi, Karwar, Ratnagiri, Sindhurg and other cities • Enjoy in-resort activities like Aqua Zorbing, E-Bike etc* • Relaxing swimming pool • Access to a gorgeous beach • Opt in* for luxurious spa treatments at the Subuthi spa (*not included in picnic package. Can be availed at additional cost.)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Lonavala')}>
                                <img src={lonavala} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Waawtech Lonavala</h2>
                                    <p className="contentp">• Easy drive to from Mumbai, Pune, Ahmednagar, Satara and other cities • Enjoy treks, bird watching and other activities* • Beautiful swimming pool with lovely lawn for exclusive family time • Multi-Cuisine Restaurant (*not included in picnic package. Can be availed at additional cost.)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Mount Abu')}>
                                <img src={mountabu} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Waawtech Mount Abu</h2>
                                    <p className="contentp">• Easy drive to from Udaipur, Jodhpur, and other cities • Enjoy an exclusive bird watching experience (subject to availability)* • Stunning rooftop swimming pool • Multi-Cuisine Restaurant • Picnic in a beautifully landscaped resort in idyllic surroundings (*not included in picnic package. Can be availed at additional cost.)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fourthwestmt-5'>
                <h1 className='text-center clr'>South</h1>
                <div className='d-flex justify-content-center row'>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Wayanad')}>
                                <img src={wayanad} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Waawtech Wayanad</h2>
                                    <p className="contentp">• Easy drive to from Coimbatore, Mysore, Kozhikode, Kannur and other cities • Enjoy activities like archery, paddle boats, zipline, and bird watching and other nature related activities* • Beautiful swimming pool • Multi-Cuisine Restaurant • Opt in* for luxurious spa treatments at the Subuthi spa (*not included in picnic package. Can be availed at additional cost.)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Godavari')}>
                                <img src={gpdavari} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Waawtech Godavari</h2>
                                    <p className="contentp">• Easy drive to from Vijaywada, Rajahmundry, Guntur, Kakinada and other cities • Enjoy a wide variety of activities within the resort* • Beautiful swimming pool • Enjoy your day out in a beautiful expansive resort by the River Godavari (*not included in picnic package. Can be availed at additional cost.)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Anaikatti')}>
                                <img src={anaikatti} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Waawtech Anaikatti</h2>
                                    <p className="contentp">• Easy drive to from Coimbatore, Kozhikode, Guruvayur, Thrissur and other cities • Enjoy activities like jeep safari, miniature golf, etc* • Beautiful swimming pool • Enjoy your picnic in an expansive resort amidst coconut groves on the banks of the Siruvani river • Opt in* for luxurious spa treatments at the Subuthi spa (*not included in picnic package. Can be availed at additional cost.)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex row justify-content-start'>
                    <div className='foutheastimg col-12 col-md-4 col-lg-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container " onClick={() => handleImageClick('Ooty')}>
                                <img src={ooty} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Waawtech Ooty</h2>
                                    <p className="contentp">Easy drive to from Coimbatore and other cities • Enjoy activities like Rope adventure activities , Archery, Paintball etc* • Enjoy curated cocktails at Waawtech LOCAL bar* • Enjoy your picnic in an expansive resort • Opt in* for luxurious spa treatment at the Subuthi spa (*not included in picnic package. Can be availed at additional cost.)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='foutheastimg col-12 col-md-4 col-lg-4'>
                            <div className="container d-flex justify-content-center align-items-center mt-2">
                                <div className="image-container " onClick={() => handleImageClick('Alleppey')}>
                                    <img src={alleppey} alt="Image" className="image" />
                                    <div className="overlay">
                                        <h2 className="heading">Waawtech Alleppey</h2>
                                        <p className="contentp">• Easy drive to from Thiruvananthapuram, Kochi, Kottayam, and other cities • Enjoy activities like Shikara Ride, water sports etc* • Incredible Island Swimming Pool • Enjoy your picnic in an expansive resort in a private lagoon on the banks of the Vembanad lake • Opt in* for luxurious spa treatment at the Subuthi spa (*not included in picnic package. Can be availed at additional cost.)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fifthpart text-center mt-5'>
                <Link to='/booking'><button className='btn btnbook text-center'>Book Now</button></Link>
                <h3 className='mt-3'>To Enjoy a picnic at sterling</h3>
                <hr></hr>
            </div>
            <div className='fourthwestmt-5'>
                <h1 className='text-center clr'>Check out adventure picnics at our Nature Trails Resorts!</h1>
                <div className='d-flex justify-content-center row'>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container" onClick={() => handleImageClick('Sajan')}>
                                <img src={sajan} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Waawtech Sajan</h2>
                                    <p className="contentp">• Easy drive to from multiple locations in Maharashtra • Resort is located away from the hustle and bustle of the city • Beautiful swimming pool • Try exquisite Maharashtrian Food! • Kayaking Adventure (seasonal) • Opt in* for Valley crossing, Burma Bridge, Tyre Bridge, Vertical Log, Horizontal net, swinging tyres (*not included in picnic package. Can be availed at additional cost.)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container" onClick={() => handleImageClick('Durshet')}>
                                <img src={durshet} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Waawtech Durshet</h2>
                                    <p className="contentp">• Easy drive to from multiple locations in Maharashtra • Resort is located away from the hustle and bustle of the city • Beautiful swimming pool • Try exquisite Maharashtrian Food! • Exciting Zipline • Opt in* for Burma Bridge, Tyre Bridge, Vertical log, Horizontal net, Archery, Swinging tires (*not included in picnic package. Can be availed at additional cost.)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='foutheastimg col-12 col-md-4'>
                        <div className="container d-flex justify-content-center align-items-center mt-2">
                            <div className="image-container" onClick={() => handleImageClick('Kundalika')}>
                                <img src={kundalika} alt="Image" className="image" />
                                <div className="overlay">
                                    <h2 className="heading">Waawtech Kundalika</h2>
                                    <p className="contentp">• Easy drive to from multiple locations in Maharashtra • Resort is located away from the hustle and bustle of the city • Try exquisite Maharashtrian Food! • Exciting Zipline • Opt in* for Burma Bridge, Kayaking (seasonal), Tarzan Swing & Archery (*not included in picnic package. Can be availed at additional cost.)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fifthpart text-center mt-5'>
                <Link to='/booking'><button className='btn btnbook text-center'>Book Now</button></Link>
                <h3 className='mt-3 clr'>To Enjoy a picnic at nature trails</h3>
                <hr></hr>
            </div>
        </>
    );
}

export default Fourthpart;
