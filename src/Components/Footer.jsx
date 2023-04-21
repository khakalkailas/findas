import React from 'react'

export default function Footer() {
  return (
    
    <>
        <div className="footer">
		
            <div className="f-info">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <div className="box-info">
                                <div className="box-info-icon">
                                    <span className="fa fa-phone"></span>
                                </div>
                                <div className="box-info-body">
                                    <p>Have a question? call us now</p>
                                    <h4>+91- 88888-30440</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="box-info">
                                <div className="box-info-icon">
                                    <span className="fa fa-clock-o"></span>
                                </div>
                                <div className="box-info-body">
                                    <p>We are open on</p>
                                    <h4>Mon - Fri 08:00 - 20:00</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="box-info">
                                <div className="box-info-icon">
                                    <span className="fa fa-phone"></span>
                                </div>
                                <div className="box-info-body">
                                    <p>Need support? Drop us an email</p>
                                    <h4><a href="mailto:info@findas.in" title="">info@findas.in</a></h4>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="container">

                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="footer-item">
                            <img src="img/footerLogo.png" alt="logo bottom" className="logo-bottom"/>
                            <div className="spacer-30"></div>
                            <p> At FINDAS we have been working in this area of investing and insurance since the year 1999. We value clarity and transparency, thereby maintaining an ethical business model. We believe in knowledge sharing with our clients which helps them to become FINANCIALLY LITERATE INVESTORS thereby having better control on their finances.</p>
                            
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="footer-item">
                            <div className="footer-title">
                                Office
                            </div>
                            <ul className="recent-post">
                                <li>
                                    <i className="fa fa-map-marker" aria-hidden="true" style={{marginRight:"10px"}}></i>
                                    Flat no. C- 301, 3rd floor Ishwar Pratishta 3, Ravi Shankar Marg, Nashik, Pin code 422009
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-sm-12 col-md-4">
                        <div className="footer-item">
                            <div className="footer-title">
                                Subscribe
                            </div>
                            <p>Lit sed The Best in dolor sit amet consectetur adipisicing elit sedconsectetur adipisicing</p>
                            <form action="#" className="footer-subscribe">
                                <input type="email" name="EMAIL" className="form-control" placeholder="enter your email"/>
                                <input id="p_submit" type="submit" value="send"/>
                                <label for="p_submit"><i className="fa fa-envelope"></i></label>
                                <p>Get latest updates and offers.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="fcopy">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <p className="ftex">&copy; All rights reserved. <a href="https://www.findas.in/">FINDAS</a> Consulting</p> 
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    </>
        
            
  )
}
