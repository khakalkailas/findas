import React from 'react'

export default function Contact() {
  return (
    <>
        <section className="contactMainSec mainSection">
            
            <div className="section banner-page">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <div className="title-page">CONTACT</div>
                            <div className="breadcrumb-container">
                                <ol className="breadcrumb">
                                    <li><a href="index.html">Index</a></li>
                                    <li className="active">Contact Us</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="section contact">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-sm-12 col-md-12">
                            <div className="maps-wraper">
                                <div className="mapouter">
                                    <iframe src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=FINDAS%2C%20+(Title)&amp;ie=UTF8&amp;t=&amp;z=20&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                </div>
                            </div>
                            <div className="spacer-90"></div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-sm-12 col-md-6">
                            
                            <div className="row">
                                <div className="col-sm-12 col-md-10">
                                    <h2 className="section-heading">
                                        Contact Details
                                    </h2>
                                    <ul className="list-info">
                                        <li>
                                            <div className="info-icon">
                                                <span className="fa fa-map-marker"></span>
                                            </div>
                                            <div className="info-text">Flat no. C- 301, 3rd floor Ishwar Pratishta 3, <br/> Ravi Shankar Marg, Nashik, Pin code 422009</div> </li>
                                        <li>
                                            <div className="info-icon">
                                                <span className="fa fa-phone"></span>
                                            </div>
                                            <div className="info-text">91- 88888-30440</div>
                                        </li>
                                        <li>
                                            <div className="info-icon">
                                                <span className="fa fa-envelope"></span>
                                            </div>
                                            <div className="info-text">info@findas.in</div>
                                        </li>
                                        
                                    </ul>
                                    
                                </div>
                                
                                <div className="col-sm-12 col-md-10">
                                    <p className="pline">Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.
                                    <br/>
                                    <br/> We are open from 8am — 5pm week days.
                                </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="content">
                                <form action="#" className="form-contact" id="contactForm" data-toggle="validator" novalidate="true">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="p_name" placeholder="Full Name..." required=""/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="p_email" placeholder="Enter Address..." required=""/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" className="form-control" id="p_phone" placeholder="Enter Phone..." required=""/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="p_city" placeholder="Enter City..." required=""/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <textarea id="p_message" className="form-control" rows="6" placeholder="Write message"></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <div id="success"></div>
                                        <button type="submit" className="btn btn-primary">ASK A QUOTE</button>
                                    </div>
                                </form>
                                
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>	


        </section>
    </>
  )
}
