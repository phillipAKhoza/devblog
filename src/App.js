import React from 'react'
import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CreateBlog from './components/CreateBlog';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/create" element={<CreateBlog/>} />
            <Route exact path="/login" element={<Login/>} />
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
