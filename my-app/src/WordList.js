import './WordList.css';
import {Link} from 'react-router-dom';

function WordList() {
    return (
        <div className="container-center-horizontal">
        <div className="desktop-6 screen">
          <div className="rectangle-18-ZnKzSm" />
          <h1 className="title-ZnKzSm">Food &amp; Drinks</h1>
          <div className="une-pomme-une-f-ocoli-la-laitue-ZnKzSm">
            Une pomme
            <br />
            Une fraise
            <br />
            Une banane
            <br />
            Le repas
            <br />
            Une recette <br />
            Le petit déjeuner
            <br />
            Une carotte
            <br />
            Le brocoli
            <br />
            La laitue
          </div>
          <div className="rectangle-18-AEuVgt" />
          <div className="lingo-battles-ZnKzSm">LingoBattles</div>
          <Link to="/Main">
          <div className="recent-games-ZnKzSm montserrat-normal-white-30px">
            Recent Games
          </div>
          </Link>
          <Link to="/Main">
          <div className="leaderboards-ZnKzSm montserrat-normal-white-30px">
            Leaderboards
          </div>
          </Link>
          <Link to="/Main">
          <div className="categories-ZnKzSm montserrat-normal-white-30px">
            Categories
          </div>
          </Link>
          <div className="log-out-ZnKzSm">Log Out</div>
        </div>
      </div>
    );
  }
  
  export default WordList;
  