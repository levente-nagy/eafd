import { Carousel, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Articles.css'


function Home() {


  return (

    <>
    <div className="featured">
      
      <ListGroup >
      <ListGroup.Item><b>Topics</b></ListGroup.Item>
      <Link to="/Article1">
        <ListGroup.Item action>General rules for cleaning the house</ListGroup.Item>
        </Link>
      <Link to="/Article2">
      <ListGroup.Item action>Basic financial rules</ListGroup.Item>
     </Link>
    </ListGroup>
    <br/>
    <br/>
      <Carousel data-bs-theme="dark" slide={false}>
    <Carousel.Item>
    <img className="article_banner" src="src\assets\Articol1.jpg" alt="Card image cap"/>
      
    </Carousel.Item>
    <Carousel.Item>
    <img className="article_banner" src="src\assets\Articol2.jpg" alt="Card image cap"/>
      
    </Carousel.Item>
   
  </Carousel>


 
    </div>

   </>
  );
}

export default Home;