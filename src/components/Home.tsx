import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Articles.css";

const Home = () => (

  <div className="featured">
<div className="baner">
<img
          className="banner_home"
          src="/banner_home.jpg"
         
        />
          <Link to="/about-us" className="btn btn-outline-success more">
              Learn more...
            </Link>
          </div>
    

<br />
    <br />

<ListGroup>
      <ListGroup.Item>
        <b>Topics</b>
      </ListGroup.Item>
      <Link to="/cleaning">
        <ListGroup.Item action>Cleaning</ListGroup.Item>
      </Link>
      <Link to="/finance">
        <ListGroup.Item action>Finance</ListGroup.Item>
      </Link>
      <Link to="/technology">
        <ListGroup.Item action>Technology</ListGroup.Item>
      </Link>
    </ListGroup>
      
  </div>
);

export default Home;
