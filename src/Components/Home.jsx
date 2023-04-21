import React from 'react';
export default function Home() {
  return (
    <>
        <section className="indexSec mainSection">
            <div className="Slider">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="item active">
                            <img loading="lazy" className="slide" src="https://cdn.pixabay.com/photo/2017/04/11/15/55/animals-2222007_960_720.jpg" alt="Los Angeles"/>
                        </div>

                        <div className="item">
                            <img loading="lazy" className="slide" src="https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396_960_720.jpg" alt="Chicago"/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="section feature bg-why">
                <div className="container">

                    <div className="row">

                        <div className="col-sm-12 col-md-12">
                            <div className="row col-0 overlap">
                                <div className="col-sm-12 col-md-4 border-right">
                                    
                                    <div className="feature-box-8 style-2">
                                        <div className="icon"><i className="fa fa-lock" aria-hidden="true"></i></div>
                                        <div className="body">
                                            <a href="services-detail.html" className="title">Protect Your Money</a>
                                            <p>We identify all risks that could put drain on your hard earned money. And we ensure that you are adequately protected against these risks.</p>
                                            <a href="services-detail.html" className="more"><i className="fa fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 border-right">
                                    
                                    <div className="feature-box-8 style-2">
                                        <div className="icon"><i className="fa fa-signal" aria-hidden="true"></i></div>
                                        <div className="body">
                                            <a href="services-detail.html" className="title">Make Your Money Work</a>
                                            <p>We identify assets that will make your money hard for you. Eventually the money will give you the financial freedom and time freedom.</p>
                                            <a href="services-detail.html" className="more"><i className="fa fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    
                                    <div className="feature-box-8 style-2">
                                        <div className="icon"><i className="fa fa-eye" aria-hidden="true"></i></div>
                                        <div className="body">
                                            <a href="services-detail.html" className="title">Get Educated Financially</a>
                                            <p>We help you increase your FINANCIAL LITERACY through our online and offline interactions.</p>
                                            <a href="services-detail.html" className="more"><i className="fa fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            <div className="section section-border bg-grey aboutSec">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <h2 className="section-heading center">
                                ABOUT US
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <img loading="lazy" loading="lazy" src="img/600x400.jpg" alt=""/>
                            <div className="margin-bottom-30"></div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="margin-bottom-30 jumbolead reset-section-heading"></div>
                            <h3>Experience financial freedom and time freedom!</h3>
                            <div className="margin-bottom-30 jumbolead reset-section-heading"></div>
                            <p>At Findas, we help clients achieve financial goals with customized investment strategies based on their unique needs and risk tolerance. Education is important, so we offer regular updates and resources to help clients become more informed investors. Our commitment to transparency and exceptional service builds trust and long-lasting relationships with our clients. Contact us to start achieving your financial dreams.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <div className="section chooseSec">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <h2 className="section-heading center">
                                WHY CHOOSE US
                            </h2>
                        </div>
                        <div className="col-sm-12 col-md-12">
                            <div className="row">
                                
                                <div className="col-sm-12 col-md-4">
                                    <div className="box-icon-1 layout-2">
                                        <div className="body-content">
                                            <h4 className="title">Expertise and Experience</h4>
                                            <div className="text">Our firm has a team of experienced and knowledgeable financial advisors who have years of experience in wealth creation. We stay up-to-date with the latest industry trends and market conditions to provide you with the most effective and efficient financial solutions.</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-sm-12 col-md-4">
                                    <div className="box-icon-1 layout-2">
                                        <div className="body-content">
                                            <h4 className="title">Personalized Approach</h4>
                                            <div className="text">We understand that every client's financial situation is unique. We take the time to get to know our clients and their financial goals, then create a customized plan to help them achieve those goals. We believe that a personalized approach is key to financial success.</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-sm-12 col-md-4">
                                    <div className="box-icon-1 layout-2">
                                        <div className="body-content">
                                            <h4 className="title">Transparency and Trust</h4>
                                            <div className="text">At our firm, we believe in transparency and building trust with our clients. We are committed to providing honest and straightforward advice, and we always have our client's best interests in mind. We strive to build long-lasting relationships with our clients, based on mutual trust and respect.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>

            
            <div className="section why bg-grey servicesSec">
                <div className="container">
                    <div className="row serviceTop">
                        <div className="col-sm-12 col-md-12">
                            <h2 className="section-heading center">
                                OUR SERVICES
                            </h2>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <img loading="lazy" loading="lazy" src="img/600x400.jpg" alt=""/>
                            <div className="margin-bottom-30"></div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <p>Our main focus is to understand our clients' financial needs and circumstances and suggest appropriate insurance and investment products. We offer a wide range of insurance products such as health and accident insurance, as well as investment products including fixed deposits, mutual funds, and more. We provide online and offline support, with mobile and desktop access to monitor and manage investments. Our full-time service staff is always available to assist clients with any questions or concerns. We regularly review investments and insurance and make changes as needed. In addition to our products and services, we also prioritize client education through various means such as one-on-one meetings, webinars, seminars, blog articles, and social media initiatives. Visit our YouTube channel for regular videos on financial education.</p>
                        </div>
                        
                    </div>
                </div>
                <div className="section pad ">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <div className="box-icon-1 layout-2">
                                    <div className="icon">
                                        <i className="fa ri-bank-line"></i>
                                    </div>
                                    <div className="body-content">
                                        <h4 className="title">Investment Planning</h4>
                                        <a href="#" className="readmore">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <div className="box-icon-1 layout-2">
                                    <div className="icon">
                                        <i className="fa fa-pie-chart"></i>
                                    </div>
                                    <div className="body-content">
                                        <h4 className="title">Corporate Solution</h4>
                                        <a href="#" className="readmore">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <div className="box-icon-1 layout-2">
                                    <div className="icon">
                                        <i className="fa bx bx-shield-quarter"></i>
                                    </div>
                                
                                    <div className="body-content">
                                        <h4 className="title">Insurance Planning</h4>
                                        <a href="#" className="readmore">Read more</a>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-sm-12 col-md-4">
                                <div className="box-icon-1 layout-2">
                                    <div className="icon">
                                        <i className="fa ri-slideshow-line"></i>
                                    </div>
                                    <div className="body-content">
                                        <h4 className="title">Stock Investing & PMS</h4>
                                        <a href="#" className="readmore">Read more</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-4">
                                <div className="box-icon-1 layout-2">
                                    <div className="icon">
                                        <i className="fa ri-pencil-ruler-2-fill"></i>
                                    </div>
                                    <div className="body-content">
                                        <h4 className="title">Will Writing</h4>
                                        <a href="#" className="readmore">Read more</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="section why section-border workSec">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <h2 className="section-heading center">
                                HOW IT WORKS
                            </h2>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <img loading="lazy" loading="lazy" src="img/600x600.jpg" alt=""/>
                            <div className="margin-bottom-10"></div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="margin-bottom-70"></div>
                            <h3>Understanding The Client</h3>
                            <p>We make an effort to understand the clients requirements fully!</p>
                            
                            <h3>Protection</h3>
                            <p>None of us is paid because we were born on this planet. We have to expend our mental & physical energy to generate our income. Thus, first and the foremost thing is to PROTECT this hard earned money!</p>
                            
                            <h3>Growth</h3>
                            <p>Once the protection is in place, the next step is to grow your money above the inflation rate. We offer multiple investment assets so that your money grows adequately.</p>
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>

            
            <div className="section section-border uniqueSec">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <h2 className="section-heading center">
                                OUR UNIQUENESS
                            </h2>
                        </div>
                        <div className="col-md-3 col-sm-12 color-bg">
                            <a href="#" className="media line-height">Personalized Service</a>
                        </div>
                        <div className="col-md-3 col-sm-12 color-bg">
                            <a href="#" className="media">Multiple Investments Offered</a>
                        </div>
                        <div className="col-md-3 col-sm-12 color-bg">
                            <a href="#" className="media line-height">Multi City Presence</a>
                        </div>
                        <div className="col-md-3 col-sm-12 color-bg">
                            <a href="#" className="media line-height">Data Confidentiality</a>
                        </div>
                        <div className="col-md-3 col-sm-12 color-bg">
                            <a href="#" className="media line-height">Data Based Decisions</a>
                        </div>
                        <div className="col-md-3 col-sm-12 color-bg">
                            <a href="#" className="media line-height">Long Term Thinking</a>
                        </div>
                        <div className="col-md-3 col-sm-12 color-bg">
                            <a href="#" className="media">Ongoing Knowledge Sharing</a>
                        </div>
                        <div className="col-md-3 col-sm-12 color-bg">
                            <a href="#" className="media">Technology & Back Office Support</a>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="section section-border testimonialSec">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <h2 className="section-heading center">
                                CLIENT TESTIMONIAL
                            </h2>
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="col-sm-12 col-md-8">
                            <div id="carousel-example" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carousel-example" data-slide-to="0" class="active"></li>
                                    <li data-target="#carousel-example" data-slide-to="1"></li>
                                </ol>

                                
                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <img loading="lazy" src="images/600x600.jpg" alt="" className="img-circle"/>
                                        <div class="carousel-caption">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been. Mauris ornare tortor in eleifend blanditullam ut ligula et neque. Nulla interdum dapibus erat nec elementum. Simply dummy text of the printing and typesetting industry orem Ipsum has been. Mauris ornare tortor.</p>
                                            <div className="title">Gael story</div>
                                            <div className="subtitle">Designer @ Buka Kreasi & co.</div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <img loading="lazy" src="images/600x600.jpg" alt="" className="img-circle"/>
                                        <div class="carousel-caption">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been. Mauris ornare tortor in eleifend blanditullam ut ligula et neque. Nulla interdum dapibus erat nec elementum. Simply dummy text of the printing and typesetting industry orem Ipsum has been. Mauris ornare tortor.</p>
                                            <div className="title">Dedo</div>
                                            <div className="subtitle">Designer @ Buka Kreasi & co.</div>
                                        </div>
                                    </div>
                                    
                                </div>

                                
                                <a class="left carousel-control" href="#carousel-example" role="button" data-slide="prev">
                                    <span class="fa fa-chevron-left" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="right carousel-control" href="#carousel-example" role="button" data-slide="next">
                                    <span class="fa fa-chevron-right" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                            {/* <div id="owl-testimony">
                                <div className="item">
                                    <div className="testimonial-1">
                                        <div className="media">
                                        <img loading="lazy" src="images/600x600.jpg" alt="" className="img-circle"/>
                                        </div>
                                        <div className="body">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been. Mauris ornare tortor in eleifend blanditullam ut ligula et neque. Nulla interdum dapibus erat nec elementum. Simply dummy text of the printing and typesetting industry orem Ipsum has been. Mauris ornare tortor.</p>
                                        <div className="title">Gael story</div>
                                        <div className="subtitle">Designer @ Buka Kreasi & co.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-1">
                                        <div className="media">
                                        <img loading="lazy" src="images/600x600.jpg" alt="" className="img-circle"/>
                                        </div>
                                        <div className="body">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been. Mauris ornare tortor in eleifend blanditullam ut ligula et neque. Nulla interdum dapibus erat nec elementum. Simply dummy text of the printing and typesetting industry orem Ipsum has been. Mauris ornare tortor.</p>
                                        <div className="title">Dedo</div>
                                        <div className="subtitle">Designer @ Buka Kreasi & co.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-1">
                                        <div className="media">
                                        <img loading="lazy" src="images/600x600.jpg" alt="" className="img-circle"/>
                                        </div>
                                        <div className="body">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been. Mauris ornare tortor in eleifend blanditullam ut ligula et neque. Nulla interdum dapibus erat nec elementum. Simply dummy text of the printing and typesetting industry orem Ipsum has been. Mauris ornare tortor.</p>
                                        <div className="title">Maggy</div>
                                        <div className="subtitle">Designer @ Buka Kreasi & co.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-1">
                                        <div className="media">
                                        <img loading="lazy" src="images/600x600.jpg" alt="" className="img-circle"/>
                                        </div>
                                        <div className="body">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been. Mauris ornare tortor in eleifend blanditullam ut ligula et neque. Nulla interdum dapibus erat nec elementum. Simply dummy text of the printing and typesetting industry orem Ipsum has been. Mauris ornare tortor.</p>
                                        <div className="company">Gaspol ltd</div>
                                        <div className="title">Robert Lav</div>
                                        <div className="subtitle">Designer @ Buka Kreasi & co.</div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="section bg-grey appointmentImg">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <h2 className="section-heading center">
                                APPOINTMENT
                            </h2>
                            <div className="margin-bottom-30"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 appointmentLeft">
                            <img loading="lazy" loading="lazy" src="img/appointmentImg.jpg" alt=""/>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="wrap-form">
                                <h2 className="reset-section-heading">Request a call</h2>
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
