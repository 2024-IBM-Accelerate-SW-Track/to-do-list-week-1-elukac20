import React, { Component } from 'react';

import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";


export default class About extends Component {
  render() {
    return (
      <div>
        <p>
          
        <div>
          <div className="split left">
          <div className="centered">
          <img 
          className="profile_image"
          src={profile_pic}
          alt="Profile Pic"
          ></img>
          </div>
          </div>
          <div className="split right">
          <div className="centered">
          <div className="name_title">Elena Lukac</div>
          <div className="brief_description">
          I'm a junior at Barnard College pursuing a major in Computer Science
          and a minor in Anthropology.
          </div>
          </div>
          </div>
          </div>

</p> 
      </div>
    )
  }
}