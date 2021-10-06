import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import './assets/styles/App.css';
import './assets/styles/bootstrap.min.css';
import './assets/styles/font-awesome.min.css';


const App = () => {
  return (
    <div>
      <Home />
    </div>
    // <div className="container">
    //   <p>The one who remains</p>
    //   <code>'ello Guvnor</code> <i class="fa fa-codepen" aria-hidden="true"></i>
    // </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root') )