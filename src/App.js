import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop'
import Homescreen from './components/Homescreen';
import Poster from './components/Poster'
import Footer from './components/Footer';


function App() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
        section.scrollIntoView({behavior: 'smooth'})
        console.log('running the function')
    } else {
      console.log('uh oh')
    }
}

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

        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;

