import {Route} from 'react-router-dom';
import Login from './login.js';
import Main from './Main.js';
import Categories from './Categories.js';
import WordList from './WordList.js';


import './App.css';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login}/>
      <Route exact path="/Main" component={Main}/>
      <Route exact path="/Categories" component={Categories}/>
      <Route exact path="/WordList" component={WordList}/>
      
    </div>
  );
}

export default App;
