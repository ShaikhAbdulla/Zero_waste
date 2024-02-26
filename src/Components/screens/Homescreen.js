import React, { Component } from "react";
// import ReactGA from "react-ga";
// import $ from "jquery";
import "../../App.css";
import Header from "../Header";
import Footer from "../Footer";
import About from "../About";
import Resume from "../Resume";
import Contact from "../Contact";
import Portfolio from "../Portfolio";
import VideoPlayer from "../tshirt";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

  
  }



  

  render() {
    console.log('loggggggg',this.state.resumeData.resume);
    return (
      <div className="App">
      
        <Header/>
        <Resume  />
        <Portfolio  />
        <About  />
        <VideoPlayer/>
        <Contact />
        <Footer  />
      </div>
    );
  }
}

export default HomeScreen;
