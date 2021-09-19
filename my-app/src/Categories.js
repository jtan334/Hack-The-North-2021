import './Categories.css';
import {Link} from 'react-router-dom';
import img1 from './img/hamburger.png';
import img2 from './img/dates.png';
import img3 from './img/sports.png';
import img4 from './img/nature.png';
import img5 from './img/vector.svg';

function Categories() {
  return (
    <div className="container-center-horizontal">
    <div className="desktop-3 screen">
      <div className="log-out-cusbr8">Log Out</div>
      <h1 className="title-cusbr8">Categories</h1>
      <div className="food-drinks-cusbr8">Food &amp; Drinks</div>
      <div className="rectangle-7-cusbr8" />
      <div className="log-out-yo9xbe">Log Out</div>
      <div className="rectangle-14-cusbr8" />
      <div className="rectangle-16-cusbr8" />
      <div className="rectangle-15-cusbr8" />
      <div className="rectangle-17-cusbr8" />
      <Link to="/WordList">

      <div className="food-drinks-yo9xbe montserrat-semi-bold-black-36px">
        Food 
      </div>
      </Link>
      <div className="times-dates-cusbr8 montserrat-semi-bold-black-36px">
         Dates
      </div>
      <div className="nature-animals-cusbr8 montserrat-semi-bold-black-36px">
         Animals
      </div>
      <div className="sports-recreation-cusbr8 montserrat-semi-bold-black-36px">
        Sports &amp; Recreation
      </div>
      <img
        className="undraw-hamburger8ge6-1-cusbr8"
        src={img1}
      />
      <img
        className="undraw-hamburger8ge6-2-cusbr8"
        src={img2}
      />
      <img
        className="undrawgamedayucx9-1-cusbr8"
        src={img3}
      />
      <img
        className="undrawnaturem5ll-1-cusbr8"
        src={img4}
      />
      <div className="lingo-battles-cusbr8">LingoBattles</div>
      <Link to="/Main">
      <div className="recent-games-cusbr8 montserrat-normal-white-30px">
        Recent Games
      </div>
      </Link>
      <Link to="/Main">
      <div className="leaderboards-cusbr8 montserrat-normal-white-30px">
        Leaderboards
      </div>
      </Link>
      <div className="categories-cusbr8 montserrat-normal-white-30px">
        Categories
      </div>
    </div>
    </div>
  );
}

export default Categories;
