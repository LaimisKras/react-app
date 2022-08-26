import './App.css';
import Header from './components/Header/Header';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Calculator from './components/Calculator/Calculator';
import Choice from './components/Choice/Choice';
import PVM from './components/PVM/PVM';
import ToDo from './components/ToDo/ToDo';
import BlogPosts from './components/BlogPosts/BlogPosts';


function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
            <Route path='/calculator' element={<Calculator />} />
              <Route path='/choice' element={<Choice />} >
                <Route path='pvm' element={<PVM />} />
                <Route path='todo' element={<ToDo />} />
              </Route>
            <Route path='/blogpost' element={<BlogPosts />} ></Route>
            <Route path='/about' element={<About />} />
              <Route path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
};

export default App;
