import React from "react";
import Header from "../header/header";
import './offer.css'
import offone from '../../images/off/offone.jpg';
import offtwo from '../../images/off/offtwo.jpg';
import offthree from '../../images/off/offthree.jpg';
import offfour from '../../images/off/offfour.jpg';
import offfive from '../../images/off/offfive.jpg';
import offsix from '../../images/off/offsix.jpg';
import { Link } from "react-router-dom";



function Offer(){
    return(
        <>
            <div className="offmain  mb-4 " >
                <img src = {offone}/>
            </div>
            <div className="container">
                <div className="text-center">
                    <h3 className="offhead">OFFERS</h3>
                </div>
                <div className="row positon-relative text-center packma  ">
                    <div className="col-12 col-md-12 col-lg-4  ">
                       <Link to = '/packagepurchase'><img src={offone} className="offsubimg text-center" /></Link> 
                        <div className="text-center pppp"><Link to = '/packagepurchase'><h5 className="h51 ">Stay for 2 night and pay for only one
                        .Offer applicable only on packages</h5></Link></div>
            
                    </div>
                    <div className="col-12 col-md-12 col-lg-4">
                    <Link to = '/packagepurchase'> <img src={offtwo} className="offsubimg text-center" /></Link> 
                        <div className="text-center pppp"><Link to = '/packagepurchase'><h5 className="h52">Stay for 2 night and pay for only one.Offer applicable only on packages</h5></Link> </div>
                    </div>
            
                    <div className="col-12 col-md-12 col-lg-4">
                    <Link to = '/packagepurchase'> <img src={offthree} className="offsubimg text-center" /></Link> 
                        <div className="text-center pppp"><Link to = '/packagepurchase'><h5 className="h53">Stay for 2 night and pay for only one.Offer applicable only on packages</h5></Link> </div>
                    </div>
                </div>
                <div className="row positon-relative text-center rowdiv">
                    <div className="col-12 col-md-12 col-lg-4">
                    <Link to = '/packagepurchase'><img src={offfour} className="offsubimg text-center" /></Link> 
                        <div className="text-center pppp"><Link to = '/packagepurchase'><h5 className="h54">Stay for 2 night and pay for only one.Offer applicable only on packages</h5></Link> </div>
            
                    </div>
                    <div className="col-12 col-md-12 col-lg-4">
                    <Link to = '/packagepurchase'> <img src={offfive} className="offsubimg text-center" /></Link> 
                        <div className="text-center pppp"><Link to = '/packagepurchase'><h5 className="h55">Stay for 2 night and pay for only one.Offer applicable only on packages</h5></Link> </div>
                    </div>
            
                    <div className="col-12 col-md-12 col-lg-4">
                    <Link to = '/packagepurchase'><img src={offsix} className="offsubimg text-center" /></Link> 
                        <div className="text-center pppp"><Link to = '/packagepurchase'><h5 className="h56">Stay for 2 night and pay for only one.Offer applicable only on packages</h5></Link> </div>
                    </div>
                </div>


                
                
            </div>
        </>
    )
}

export default Offer