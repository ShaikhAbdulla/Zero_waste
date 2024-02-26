import React, { Component } from "react";
import Fade from "react-reveal";


// import { FaWhatsappSquare,FaInstagramSquare,FaFacebookSquare } from "react-icons/fa"
// import "react-fa-icon";

class About extends Component {
  render() {
    // if (!this.props.data) return null;


    const profilepic = "images/logo.jpg";
    const bio = 'Welcome to our Waste Management Hub, your go-to platform for all things waste-related. Our services include scrap collection, fostering a zero-waste society, efficient waste management, and providing clear segregation guidelines with the assistance of our trained Safai Sathis. Additionally, we offer manpower solutions for proper waste management, as well as vehicle scrapping and dismantling services. Join us in creating a cleaner, greener, and more sustainable environment.';
   

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
            <Fade left duration={1000}>
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
              </Fade>
            </div>
            <div className="nine columns main-col">
              <h2>About us</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Contact Us now via</span>
                    <br />
                    {/* <span> */}
                    {/* <ReactWhatsapp number="919619985663" message="Hello World!!!" /> */}
                    {/* </div> */}

{/* <div className="widget widget_tweets">
  <h4 className="widget-title">Latest Tweets</h4>
  <ul id="twitter">
    <li>
      <span>
        This is Photoshop's version of Lorem Ipsum. Proin gravida
        nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
        quis bibendum auctor, nisi elit consequat ipsum
        <a href="./">http://t.co/CGIrdxIlI3</a>
      </span>
      <b>
        <a href="./">2 Days Ago</a>
      </b>
    </li>
    <li>
      <span>
        Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et
        quasi
        <a href="./">http://t.co/CGIrdxIlI3</a>
      </span>
      <b>
        <a href="./">3 Days Ago</a>
      </b>
    </li>
  </ul>
</div> */}

{/* WhatsApp icon */} 
<a href="https://wa.me/+919653257899" target="hello, i want to enquire about the services you provide!" rel="noopener noreferrer">
{/* <FaWhatsapp size={50}/> */}
<img
  style={{height:50,width:50,margin:10}}
  src={"images/whatsapp.png"}
  alt="Nordic Giant Profile Pic"
/>
</a> 

{/* Instagram icon */}
<a href="https://www.instagram.com/zerowastemanagement2" target="_blank" rel="noopener noreferrer">
<img
 style={{height:50,width:50,margin:10}}
  src={"images/instagram.png"}
  alt="Nordic Giant Profile Pic"
/>
</a>

{/* Facebook icon */}
<a href="https://www.facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer">
<img
style={{height:50,width:50,margin:10}}
  src={"images/facebook.png"}
  alt="Nordic Giant Profile Pic"
/>
</a>

      
     
                    {/* <WhatsAppWidget phoneNumber="9619985663" message="Hello, this is my message!" /> */}
                    {/* <ah>
                    WhatsApp Us Now */}
                    {/* </a> */}
                      {/* {street} */}
                      {/* <br /> */}

                      {/* {city} {state}, {zip} */}
                    {/* </span> */}
                    <br />
                    <span>+91 96532 57899</span>
                    <br />
                    <span>zerowaste470@gmail.com</span>
                  </p>
                </div>
                {/* <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
