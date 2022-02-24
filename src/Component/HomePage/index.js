import { useEffect } from 'react';
import { useState, useRef } from 'react';
import Faq from '../Faq';
import { PostReqList } from '../PostReq';
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
  			<path d="M0,0 L0,55 Q250,65 500,55 L500,0 Z" fill="#e2fafa" />
		</svg>
		<div ref={header_height} id='header' className="header">
			<div className='title'>
				<h1>EVERY BLOOD DONOR <br/>IS A LIFE SAVER</h1>
				<p>
					<span>"Your greatness is <br/>not what you have. <br />it's what you give"<br/></span>
				</p>
				<section className='serviceBtn'>
					<button>Find A Blood Donor &nbsp; &#10095;</button><br/>
					<button>Post Blood Request &nbsp; &#10095;</button><br/>
					{/* <button>Service Organisation (Comming Soon)</button><br/> */}
				</section>
			</div>
			<img src={process.env.PUBLIC_URL + '/assets/header.jpg'} alt="donate now" />
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
								Adults have around 10 units of blood in their body. 1 unit is given during during a donation.
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
					<PostReqList />
				</div>
			</div>
			<Faq />
			<div>{Contact()}</div>
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
				<button>Contact Us</button>
			</div>
		</>
	);
};