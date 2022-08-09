import React from 'react'
import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            {/* <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
