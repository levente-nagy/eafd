import { Link } from "react-router-dom";

function Articles() {
  return (
    <div className="all_arts">
      <div className="art">
        <div className="card ca">
          <img
            className="card-img-top"
            src="/Articol1.jpg"
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
              <br />
            </p>
            <Link to="/article1" className="btn btn-outline-success">
              Go to article
            </Link>
          </div>
        </div>
      </div>
      <div className="art">
        <div className="card ca">
          <img
            className="card-img-top"
            src="/Articol2.jpg"
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
            <Link to="/article2" className="btn btn-outline-success">
              Go to article
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
