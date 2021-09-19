import './App.css';
import img1 from './img/apple.svg';
import img2 from './img/fb.svg';
import img3 from './img/google.svg';
import img4 from './img/rect.png';
import img5 from './img/vector.svg';

function Login() {
  return (
    <div className="login">
     <link rel="stylesheet" type="text/css" href="./css/desktop-8.css" />
  <link rel="stylesheet" type="text/css" href="./css/styleguide.css" />
  <link rel="stylesheet" type="text/css" href="./css/globals.css" />
  <meta name="author" content="AnimaApp.com - Design to code, Automated." />
  <input type="hidden" id="anPageName" name="page" defaultValue="desktop-8" />
  <div className="container-center-horizontal">
    <div className="desktop-8 screen">
      <div className="rectangle-2-ub0vYN" />
      <div className="learn-words-bat-friend-have-fun-ub0vYN">
        Learn Words.
        <br />
        Battle a Friend.
        <br />
        Have fun.
      </div>
      <h1 className="title-ub0vYN">Sign In</h1>
      <div className="lingo-battles-ub0vYN">
        Lingo
        <br />
        Battles
      </div>
      <img className="rectangle-1-ub0vYN" src={img4} alt="" />
      
      <div className="continue-with-f-ok-centre-fixed-ub0vYN">
        <div className="frame-6-Wx9IKP">
          <img
            className="facebook-logo-Tcl25j"
            src={img2}
            alt=""/>
          <div className="continue-with-f-ok-i26212722836-Tcl25j">
            Continue with Facebook
          </div>
        </div>
      </div>
      <div className="continue-with-g-le-centre-fixed-ub0vYN">
        <div className="frame-6-CmtREq">
          <img className="google-logo-qWhPlO" src={img3} alt=""/>
          <div className="continue-with-g-le-i26212822846-qWhPlO">
            Continue with Google
          </div>
        </div>
      </div>
      <div className="continue-with-a-le-centre-fixed-ub0vYN">
        <div className="frame-6-1jV5rD">
          <img className="apple-logo-JPtpLv" src={img1} alt=""/>
          <div className="continue-with-a-le-i26212922851-JPtpLv">
            Continue with Apple
          </div>
        </div>
      </div>
      <img className="vector-ub0vYN" src={img5} alt=""/>
    </div>
  </div>


    </div>
  );
}

export default Login;