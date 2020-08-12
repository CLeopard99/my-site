import React, { Component } from "react";
import HeaderCollage from "../../assets/collageHeader.png";
import InterestCollage from "../../assets/interestCollage.png";

import CodingHover from "./CodingHover";
import SocietiesHover from "./SocietiesHover";
import PartTimeHover from "./PartTimeHover";
import VolunteerHover from "./VolunteerHover";
import ScrollAnimation from "react-animate-on-scroll";

class More extends Component {
  constructor() {
    super();
    this.state = {
      isHovered: false,
    };
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover() {
    this.setState((prevState) => ({
      isHovered: !prevState.isHovered,
    }));
  }

  render() {
    return (
      <div id="moreSection">
        <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
          <div id="collage">
            <img
              src={HeaderCollage}
              id="headerCollage"
              alt="Collage and header for more about me"
            />
            <div id="collageText">
              <h2>
                More About Me <br />
              </h2>
              <p>Experience, Extracurricular, & Interests</p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <h2>In my spare time...</h2>
          <p className="sectionBlurb pastelBlue">
            Soft skills are just as important as programming ability and my
            activities in and outside of university have allowed me to
            strengthen my interpersonal skills by communicating with people from
            diverse backgrounds from around the world and gain valuable
            experience within teams and leadership positions.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
          <div id="hoverBoxes">
            <CodingHover />
            <SocietiesHover />
            <PartTimeHover />
            <VolunteerHover />
          </div>
        </ScrollAnimation>

        <div id="interests">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <div id="interestsList">
              <h3>Some of my interests include</h3>
              <p> HCI & ubiquitous technologies</p>
              <p>Succulents/house plants</p>
              <p>Video games</p>
              <p>Craft beer & cocktails</p>
              <p>Space exploration</p>
              <p>Travelling</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
            <img
              src={InterestCollage}
              id="interestCollage"
              alt="Icons representing some of my interests"
            />
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}

export default More;
