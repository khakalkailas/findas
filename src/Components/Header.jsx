import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header header-1">
    	{/* <!-- TOPBAR --> */}
		<div className="topbar">
			<div className="container">
				<div className="row">
					<div className="col-sm-7 col-md-7 topLeft">
						<div className="info">
							<div className="info-item">
								<Link target="_blank" to="https://www.youtube.com/channel/UC0M5VOABd5OBUX7NoZn00yQ?view_as=subscriber">
									<i className="fa fa-youtube" aria-hidden="true"></i>
								</Link>
							</div>
							<div className="info-item">
								<Link target="_blank" to="https://www.facebook.com/Financiallybindaas">
									<i className="fa fa-facebook"></i>
								</Link>
							</div>
							<div className="info-item">
								<Link target="_blank" to="https://twitter.com/findas_india">
									<i className="fa fa-twitter" aria-hidden="true"></i>
								</Link>
							</div>
							<div className="info-item">
								<Link target="_blank" to="https://www.instagram.com/findasindia/">
									<i className="fa fa-instagram" aria-hidden="true"></i>
								</Link>
							</div>
							<div className="info-item">
								<Link target="_blank" to="https://www.linkedin.com/company/findas-consulting/?viewAsMember=true">
									<i className="fa fa-linkedin"></i>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-sm-5 col-md-5">
						<div className="request-quote pull-right">
							<Link to="#" title="">GET A QUOTE</Link>
						</div>
					</div>
					
				</div>
			</div>
		</div>

		{/* <!-- NAVBAR SECTION --> */}
		<div className="navbar navbar-main">
		
			<div className="container container-nav">
				<div className="row">
						
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" to="/">
							<img src="img/logo.jpg" alt="" />
						</a>
					</div>

					<nav className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" data-hover="dropdown" data-animations="fadeInDown fadeInRight fadeInUp fadeInLeft">
						<ul className="nav navbar-nav navbar-right">
                            <li>
								<Link to="/">Home</Link>
							</li>
                            <li>
								<Link to="/About">About Us</Link>
							</li>
                            <li>
								<Link to="/Contact">Contact Us</Link>
							</li>
						</ul>
						

					</nav>
						
				</div>
			</div>
	    </div>

    </div>
  )
}
