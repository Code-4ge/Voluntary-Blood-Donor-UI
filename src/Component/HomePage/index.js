import { useEffect } from 'react';
import { useState, useRef } from 'react';
import Faq from '../Faq';
import { ShowRequestPost } from '../PostBloodRequest/ShowRequestPost';
import './Home.css'

export const Header = () => {

	const header_height = useRef(null);
	const [Height, setHeight] = useState({});
	useEffect(() => {
		const height = header_height.current.offsetHeight + 300;
		setHeight({
			height: height + "px"
		})
	}, [header_height]);

	return (
		<>
		<svg style={Height} id='header_bg' className='homebg' viewBox="0 0 500 80" preserveAspectRatio="none">
			<defs>
				<radialGradient id="Gradient"
						cx="0.5" cy="0.5" r="0.5" fx="0.75" fy="0.25">
					<stop offset="0%" stopColor="#07365d"/>
					<stop offset="100%" stopColor="#000717"/>
				</radialGradient>
			</defs>
  			<path d="M0,0 L0,55 Q250,65 500,55 L500,0 Z" fill="url(#Gradient)"/>{/*fill="#e2fafa"*/}
		</svg>
		<div ref={header_height} id='header' className="header">
			<div className='title'>
				<h1 style={{fontSize:"45px"}}>EVERY BLOOD DONOR <br/>IS A LIFE SAVER</h1>
				<p>
					<span>"Your greatness is <br/>not what you have. <br />it's what you give"<br/></span>
				</p>
				<section className='serviceBtn'>
					<button onClick={(e) => {window.open('/search-for-blood', '_self');}}>Find A Blood Donor &nbsp; &#10095;</button><br/>
					<button>Post Blood Request &nbsp; &#10095;</button><br/>
					{/* <button>Service Organisation (Comming Soon)</button><br/> */}
				</section>
			</div>
			<div className='head_Img'>
				<img className='bldrop' src={process.env.PUBLIC_URL + '/assets/bldrop.png'} alt=""/>
				<img src={process.env.PUBLIC_URL + '/assets/hand.png'} alt=""/>
			</div>
		</div>
		</>
	);
};

export const Info = () => {
	return (
		<>
			<div className="info">
				<div>
					<div className="infotag">
						<p>Good To Know</p>
						<hr />
						<p>Helpful Information</p>
					</div>

					<div className='infoContainer'>
						<section className='infoDetails'>
							<div>
								<img src={process.env.PUBLIC_URL + '/assets/fact1.png'} alt="Fact" />
							</div>
							<p>
								1 unit of blood can <br/>save up to 3 lives.
							</p>
						</section>
						<section className='infoDetails'>
							<div>
								<img src={process.env.PUBLIC_URL + '/assets/fact2.png'} alt="Fact" />
							</div>
							<p>
								Blood cannot be manufactured; it can only come from volunteer donors.
							</p>
						</section>
						<section className='infoDetails'>
							<div>
								<img src={process.env.PUBLIC_URL + '/assets/fact3.png'} alt="Fact" />
							</div>
							<p>
								Adults have around 10 units of blood in their body. 1 unit is given during a donation.
							</p>
						</section>
						<section className='infoDetails'>
							<div>
								<img src={process.env.PUBLIC_URL + '/assets/fact4.png'} alt="Fact" />
							</div>
							<p>
								Globally arround 85 million blood components are transfused in a given year. 
							</p>
						</section>
					</div>
					<div style={{textAlign: 'center'}}>
						<button id='readMore'>READ MORE</button>
					</div>

					{/* Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
					odit. */}
				</div>
				<div>
					<ShowRequestPost />
				</div>
			</div>
			<Faq />
			<div id='contact'>{Contact()}</div>
		</>
	);
};

export const Contact = () => {
	return (
		<>
			<div className="contact" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/contact_bg.png'})`}}>
				<p>
					<span>Join Us</span><br/>
					Together We Can Make World More Health & Better
				</p>
				<a href='mailto: blood.donor@mail.com' rel="noopener noreferrer">Contact Us</a>
			</div>
		</>
	);
};