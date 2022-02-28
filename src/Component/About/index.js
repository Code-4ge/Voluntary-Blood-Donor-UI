import React from 'react'
import { Contact } from '../HomePage'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import './About.css';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


export default function About() {
  return (
      <>
        <div className='aboutImg'>
			    <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/about.png'})`}}></div>
		    </div>
        <div className='about'>
          <div>
            <span id='aboutTag'>Who Are We?</span>
            <section id='subTag'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.</section>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Card sx={{ width: 275, backgroundColor:'#c6414c', marginTop:'50px'}}>
                <CardContent>
                  <img className='WAWimg' src={process.env.PUBLIC_URL + '/assets/mission.png'} alt='mission'/>
                  <h2>MISSION</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                </CardContent>
              </Card>
              <Card sx={{ width: 275, backgroundColor:'#c6414c', marginTop:'50px'}}>
                <CardContent>
                  <img className='WAWimg' src={process.env.PUBLIC_URL + '/assets/vision.png'} alt='mission'/>
                  <h2>VISION</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                </CardContent>
              </Card>
            </Grid>
          </div>

          <hr/>

          <div>
            <span id='aboutTag'>Why We?</span>
            <div className="cardholder">
              <div className="card">
                <img
                  id="search"
                  src={process.env.PUBLIC_URL + '/assets/WYW4.png'}
                  alt="Geo-Location"
                />
                <section>
                  <h4>Geo-Location Search</h4>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porro quisquam est.
                </section>
              </div>

              <div className="card">
                <img
                  id="search"
                  src={process.env.PUBLIC_URL + '/assets/WYW2.png'}
                  alt="Geo-Location"
                />
                <section>
                  <h4>Real Time Connect</h4>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porro quisquam est.
                </section>
              </div>

              <div className="card">
                <img
                  id="search"
                  src={process.env.PUBLIC_URL + '/assets/WYW1.png'}
                  alt="Geo-Location"
                />
                <section>
                  <h4>Notification</h4>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porro quisquam est.
                </section>
              </div>
              <div className="card">
                <img
                  id="search"
                  src={process.env.PUBLIC_URL + '/assets/WYW3.png'}
                  alt="Geo-Location"
                />
                <section>
                  <h4>User Friendly</h4>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porro quisquam est.
                </section>
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </>
  )
}





// <div className="about">
//         <p>Why We?</p>
        // <div className="cardholder">
        //   <div className="card">
        //     <section>
        //       <img
        //         id="search"
        //         src="https://www.ublood.com/assets/images/home-images/search.png"
        //         alt="Geo-Location"
        //       />
        //       Geo-Location Search
        //     </section>
        //     <section>
        //       Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
        //       aut fugit, sed quia consequuntur magni dolores eos qui ratione
        //       voluptatem sequi nesciunt. Neque porro quisquam est.
        //     </section>
        //   </div>
        //   <div className="card">
        //     <section>
        //       <img
        //         src="https://www.ublood.com/assets/images/home-images/hands.png"
        //         alt="Geo-Location"
        //       />
        //       Real Time Connect
        //     </section>
        //     <section>
        //       Amet, consectetur adipiscing elit, sed do eiusmod tempor
        //       incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        //       veniam, quis nostrud exercitation ullamco laboris nisi.
        //     </section>
        //   </div>
        //   <div className="card">
        //     <section>
        //       <img
        //         src="https://www.ublood.com/assets/images/home-images/bell.png"
        //         alt="Geo-Location"
        //       />
        //       Notification
        //     </section>
        //     <section>
        //       Consequuntur magni dolores eos qui ratione voluptatem sequi
        //       nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
        //       sit amet, consectetur, adipisci velit, sed quia non numquam.
        //     </section>
        //   </div>
        //   <div className="card">
        //     <section>
        //       <img
        //         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMz3p1RTfOWclaWp3uIyg4NiOjgP64hZ9vvu3mH-xQWHavzKYksd_huYxwGMVONwtEIU&usqp=CAU"
        //         alt="Geo-Location"
        //       />
        //       User Friendly
        //     </section>
        //     <section>
        //       Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
        //       est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
        //       velit, sed quia non numquam eius modi tempora.
        //     </section>
        //   </div>
        // </div>
//       </div>
