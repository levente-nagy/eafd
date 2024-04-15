import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";


function AboutUs() {

  const iconLI = <FontAwesomeIcon icon={faLinkedin} />;
  const iconGH = <FontAwesomeIcon icon={faGithub} />;
  return (
    <div className="about">
      <div className="about_summary">
        <h2>Our mission</h2>
        At Everyday Advice for Dummies, we believe that knowledge should be accessible to everyone, especially when it comes to navigating life's everyday challenges. As a school project with a mission to help others, we've created this platform to provide simple, practical tips and advice on a variety of topics, from cleaning and finance to health and relationships.
<br/><br/>
Our goal is to empower individuals, whether they're beginners or just looking for a refresher, with the tools they need to tackle life's obstacles with confidence. With easy-to-follow articles and guides, we aim to make complex concepts easy to understand and implement in everyday life.
<br/><br/>
Join us on this journey of learning and growth as we strive to make the world a little bit easier to navigate, one piece of advice at a time.
      </div>
      <div className="profiles">
        <div className="card profile1">
          <img className="avatar" src="/logo96.png" alt="Card image cap" />
          <div className="card-body">
            <h2>Monica Mila</h2>
            <p className="title">Content Manager</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <div className="social-links-about">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div className="icon">{iconLI}</div>
          
          </a>
             <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon">{iconGH}</div>
          </a>
        </div>
          </div>
        </div>

        <div className="card profile2">
          <img className="avatar" src="/avatar_Cosmin.jpg" alt="Card image cap" />
          <div className="card-body">
            <h2>Cosmin Crăciun</h2>
            <p className="title">Designer</p>
            <p>Sorcerer from the school of "What if...?". I will cast "Reveal bugs" on any application.</p>
            <div className="social-links-about">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div className="icon">{iconLI}</div>
          
          </a>
             <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon">{iconGH}</div>
          </a>
        </div>
          </div>
        </div>

        <div className="card profile3">
          <img className="avatar" src="/avatar_Levi.jpg" alt="Card image cap" />
          <div className="card-body">
            <h2>Levente Nagy</h2>
            <p className="title">Web Developer</p>
            <p>I love cooking! My favorite ingrediens are: React, Typescript and Bootsrap.</p>
            <div className="social-links-about">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div className="icon">{iconLI}</div>
          
          </a>
             <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon">{iconGH}</div>
          </a>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
