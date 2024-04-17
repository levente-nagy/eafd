import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import YouTube from 'react-youtube';
import "./Articles.css";

const Home = () => (

  
  <div className="featured">

    

<ListGroup>
      <ListGroup.Item>
        <b>Topics</b>
      </ListGroup.Item>
      <Link to="/cleaning">
        <ListGroup.Item action>Cleaning</ListGroup.Item>
      </Link>
      <Link to="/cooking">
        <ListGroup.Item action>Cooking</ListGroup.Item>
      </Link>
      <Link to="/finance">
        <ListGroup.Item action>Finance</ListGroup.Item>
      </Link>
      <Link to="/health">
        <ListGroup.Item action>Health</ListGroup.Item>
      </Link>
      <Link to="/technology">
        <ListGroup.Item action>Technology</ListGroup.Item>
      </Link>
      <Link to="/time">
        <ListGroup.Item action>Time</ListGroup.Item>
      </Link>
      <Link to="/travel">
        <ListGroup.Item action>Travel</ListGroup.Item>
      </Link>
    </ListGroup>
    
<br />
    <br />

    <div className="baner">
<h5>Fast lane if life goes weird and you need a hint that is manageable.</h5>
<br/>
<div className="video-container">
  <YouTube videoId="3U82Ao5eb8g" />
</div>
<br/>

          <Link to="/about-us" className="btn btn-outline-success more">
              Learn more...
            </Link>
          </div>
      
  </div>
);

export default Home;
