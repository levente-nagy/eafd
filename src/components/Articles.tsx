import { Link } from "react-router-dom";

function Articles() {
  return (
    <div className="all_arts">
      <div className="art">
        <div className="card ca">
          <img
            className="card-img-top"
            src="/Cleaning.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Cleaning</h5>
            <p className="card-text">
              Consistency is key to keeping your home clean effortlessly. Tackle
              small tasks regularly to prevent clutter buildup and make cleaning
              easier in the long run.
              <br />
              <br />
            </p>
            <Link to="/cleaning" className="btn btn-outline-success">
              Read more
            </Link>
          </div>
        </div>
      </div>
      <div className="art">
        <div className="card ca">
          <img
            className="card-img-top"
            src="/Cooking.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Cooking</h5>
            <p className="card-text">
            Tired of sandwiches and takeouts? Start cooking simple meals before tackling complex recipes online. It's a survival skill that boosts kitchen confidence.
              <br />
              <br />
            </p>
            <Link to="/cooking" className="btn btn-outline-success">
              Read more
            </Link>
          </div>
        </div>
      </div>
      <div className="art">
        <div className="card ca">
          <img
            className="card-img-top"
            src="/Finance.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Finance</h5>
            <p className="card-text">
              Transitioning from financial security to uncertainty can be
              daunting, affecting various aspects of life. To avoid frustration
              and panic, it's crucial to grasp simple concepts for managing
              finances effectively, enabling focus on other life aspects.
            </p>
            <Link to="/finance" className="btn btn-outline-success">
              Read more
            </Link>
          </div>
        </div>
      </div>
      <div className="art">
        <div className="card ca">
          <img
            className="card-img-top"
            src="/Health.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Health</h5>
            <p className="card-text">
            Taking control of your health is crucial for a better life. It means the difference between prevention and treatment. Despite past excuses, small steps today can lead to big changes. Here are five tips to start now.
            </p>
            <Link to="/health" className="btn btn-outline-success">
              Read more
            </Link>
          </div>
        </div>
      </div>
      <div className="art">
        <div className="card ca">
          <img
            className="card-img-top"
            src="/Tech.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Technology</h5>
            <p className="card-text">
            Technology offers vast potential for positive change but can be overwhelming for newcomers. With some simple tips, anyone can quickly get up to speed and start enjoying the benefits of their devices.
            </p>
            <Link to="/technology" className="btn btn-outline-success">
              Read more
            </Link>
          </div>
        </div>
      </div>
      <div className="art">
        <div className="card ca">
          <img
            className="card-img-top"
            src="/Time.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Time</h5>
            <p className="card-text">
            
Life's uncertainties abound, but time is within your grasp. Ever felt 24 hours weren't enough? That's the crux of it – impact. Let's delve into seizing control of your time.<br/><br/>
            </p>
            <Link to="/time" className="btn btn-outline-success">
              Read more
            </Link>
          </div>
        </div>
      </div>
      <div className="art">
        <div className="card ca">
          <img
            className="card-img-top"
            src="/Travel.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Travel</h5>
            <p className="card-text">
            Learn valuable travel insights from seasoned explorers: master stress-free packing, navigate airports efficiently, find budget-friendly accommodations, stay healthy, and maximize your travel experiences.
            </p>
            <Link to="/travel" className="btn btn-outline-success">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
