import React, { Component } from "react";
import ReactGA from "react-ga";
// import $ from "jquery";
import "../../App.css";
// import Header from "../Header";
import Footer from "../Footer";
// import About from "../About";
// import Resume from "../Resume";
// import Contact from "../Contact";
import Portfolio from "../Portfolio";
import { Link } from "react-router-dom";
// import { Fade, Slide } from "react-reveal";

class PriceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

 

  componentDidMount() {
    // this.getResumeData();
  }

  render() {
    console.log('loggggggg',this.state.resumeData.resume);
    return (
      <div className="App">
       
       <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>
          {/* <a href="Home"> */}
          <Link to={'/Home'}>
          <img
          style={{height:45,width:80,position:"absolute",top:0,left:0,borderRadius:20,margin:1}}
                // className="profile-pic"
                src={'images/logo.jpg'}
                alt="Nordic Giant Profile Pic"
              />
              </Link>
              {/* </a> */}
          <ul id="nav" className="nav">
          {/* <li className="current">
          <img
          style={{height:100,width:100}}
                // className="profile-pic"
                src={'images/logo.jpg'}
                alt="Nordic Giant Profile Pic"
              />
              </li> */}
            <li >
            <Link to={'/Home'}>
              {/* <a className="smoothscroll" href="Home#home"> */}
                Home
              {/* </a> */}
              </Link>
            </li>

          

            <li>
            <Link to={'/Home#resume'}>
              {/* <a className="smoothscroll" href="Home#resume"> */}
                Services
              {/* </a> */}
              </Link>
            </li>

            <li>
            <Link to={'/Home#portfolio'}>
              {/* <a className="smoothscroll" href="Home#portfolio"> */}
                Works
              {/* </a> */}
              </Link>
            </li>
            <li>
             <Link to={'/Home#about'}>
              {/* <a className="smoothscroll" href="Home#about"> */}
                About
              {/* </a> */}
              </Link>
            </li>
            <li>
            {/* <Link to={'/Home'}> */}
              <a className="smoothscroll" href="Home#contact">
                Contact
              </a>
              {/* </Link> */}
            </li>
            <li>
            {/* Use the Link component to navigate to the Price page */}
            <Link style={{color:'green'}} to="/price">Price</Link>
          </li>
          </ul>
        </nav>
            
        <Portfolio data={'price'} />
       
        {/* <Resume data={this.state.resumeData.resume} />
        <About data={this.state.resumeData.main} />
        <Contact data={this.state.resumeData.main} /> */}
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default PriceScreen;
