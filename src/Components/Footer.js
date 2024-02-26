// import React, { Component } from "react";
// import Fade from "react-reveal";

// class Footer extends Component {
//   render() {
//     // if (!this.props.data) return null;

//     const social=[{'url':'https://wa.me/+919653257899','img':'images/whatsapp.png'},
//     {'url':'https://wa.me/+919653257899','img':'images/instagram.png'},
//     {'url':'https://wa.me/+919653257899','img':'images/facebook.png'}
//   ]

//     const networks = social.map(function (network) {
//       return (
//         <li>
//           <a href={network.url}>
//           <img
//                style={{height:30,width:30, filter: 'grayscale(100%)',}}
//                 src={network.img}
//                 alt="Nordic Giant Profile Pic"
//               />
//             {/* <i className={network.className}></i> */}
//           </a>
//         </li>
//       );
//     });

//     return (
//       <footer>
//         <div className="row">
//           <Fade bottom>
//             <div className="twelve columns">
//               <ul className="social-links">{networks}</ul>

//               <ul className="copyright">
//                 <li>&copy; Copyright 2024 Zero waste</li>
//                 <li>
//                   Design and Developed by{" "}
//                   <a title="Styleshout" href="http://www.styleshout.com/">
//                    @abdullashaikh663@gmail.com
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </Fade>

//           <div id="go-top">
//             <a className="smoothscroll" title="Back to Top" href="#home">
//               <i className="icon-up-open"></i>
//             </a>
//           </div>
//         </div>
//       </footer>
//     );
//   }
// }

// export default Footer;

import React, { Component } from "react";
import Fade from "react-reveal";
import './Footer.css'; // Import a CSS file for styling

class Footer extends Component {
  render() {
    const social = [
    {'url':'https://wa.me/+919653257899','img':'images/whatsapp.png'},
    {'url':'https://wa.me/+919653257899','img':'images/instagram.png'},
    {'url':'https://wa.me/+919653257899','img':'images/facebook.png'}
  ]

    const networks = social.map(function (network, index) {
      return (
        <li key={index}>
          <a href={network.url}>
            <img
              className="colored-icon" // Add a class for styling
              src={network.img}
              alt={`Social Icon ${index}`}
            />
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>

              <ul className="copyright">
                <li>&copy; Copyright 2024 Zero waste</li>
                <li>
                  Design and Developed by{" "}
                  <a title="Styleshout" href="http://www.styleshout.com/">
                   @abdullashaikh663@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
