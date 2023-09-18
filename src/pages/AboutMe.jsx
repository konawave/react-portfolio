import profile from '../assets/headshot.jpg'
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <div className="container pt-4">
      <div className="row aboutMeSection">
        <div className="col-4-sm imageDiv imageDivBackground">
          <img src={profile} className="profileImage" alt="Profile Image"/>
        </div>
        <div className="col aboutMeText">
          <h2 className="aboutMeTitle">About Me</h2>
          <p>
            Hello! My name is Nick Kealoha Jeffs. I was born and raised in Oahu, Hawaii, where I spent time studying at the University of Hawaii Manoa, before moving to New York City to study art at Pace University. Since leaving college, I have discovered my passion for problem solving, coding, and web development. I'm primarily self-taught and have honed my skills further at Columbia University's Fullstack Web Developer Bootcamp. If you'd like to collaborate on something together, please reach out to me at nickkjeffs@gmail.com. Mahalo!
          </p>
           
          <p className='text-center'><Link to="/portfolio">
            See my projects
          </Link></p>
          
          </div>
      </div>
      <br/>
      <br />
      <br />
    </div>
  );
}