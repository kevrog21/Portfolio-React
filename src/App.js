import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop'
import Homescreen from './components/Homescreen';
import Poster from './components/Poster'
import ChewyBrew from './components/ChewyBrew';
import FlyingNickel from './components/FlyingNickel';
import DailyChecklist from './components/DailyChecklist';
import ThisWebsite from './components/ThisWebsite';
import ChoresApp from './components/ChoresApp';
import Footer from './components/Footer';


function App() {

  // const [currentScrollTarget, setCurrentScrollTarget] = useState()

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
        section.scrollIntoView({behavior: 'smooth'})
        console.log(section)
    }
}

// useState((sectionId) => {
//   const section = document.getElementById(sectionId)

// }, [currentScrollTarget])

  return (
    <div className="App">
      <Router>
        <Header 
          scrollToSection={scrollToSection}
        />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={
            <Homescreen 
              scrollToSection={scrollToSection}
          /> } />
          <Route exact path="/poster" element={
            <Poster /> }
          />
          <Route exact path="/chewybrew" element={
            <ChewyBrew /> }
          />
          <Route exact path="/flying-nickel" element={
            <FlyingNickel /> }
          />
          <Route exact path="/daily-checklist" element={
            <DailyChecklist /> }
          />
          <Route exact path="/this-website" element={
            <ThisWebsite /> }
          />
          <Route exact path="/chores-app" element={
            <ChoresApp /> }
          />

        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;

