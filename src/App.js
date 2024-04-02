import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop'
import Homescreen from './components/Homescreen';
import FullScreenImage from './components/FullScreenImage'
import Poster from './components/Poster'
import ChewyBrew from './components/ChewyBrew';
import FlyingNickel from './components/FlyingNickel';
import DailyChecklist from './components/DailyChecklist';
import ThisWebsite from './components/ThisWebsite';
import ChoresApp from './components/ChoresApp';
import MoreWork from './components/MoreWork';
import Footer from './components/Footer';


function App() {

  const [allInsightCards, setAllInsightCards] = useState(null)
  const [selectedSection, setSelectedSection] = useState()
  const [activeNavItem, setActiveNavItem] = useState(null)

  const [activeFullScreenImg, setActiveFullScreenImg] = useState(false)
  const [fullScreenImgUrl, setFullScreenImgUrl] = useState(null)
  const [fullScreenVideoActive, setFullScreenVideoActive] = useState(false)
  const [lightBackground, setLightBackground] = useState(false)

  useEffect(() => {
    if (fullScreenImgUrl) {
      console.log('this url should be showing ', fullScreenImgUrl)
      setActiveFullScreenImg(true)
    }
  }, [fullScreenImgUrl])

  useEffect(() => {
    if (activeFullScreenImg) {
      document.body.classList.add('no-scroll-active')
    } else {
      document.body.classList.remove('no-scroll-active')
    }
  }, [activeFullScreenImg])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({behavior: 'smooth'})
      console.log(section)
    } else {
      console.log('that section isnt painted to screen')
    }
  }

  function useIntersectionObserver(allInsightCards) {
    useEffect(() => {
      if (allInsightCards) {
        const options = {
          threshold: .35,
        }

        const observer = new IntersectionObserver(function(entries, observer) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in_view_shift_insight")
            }
          })
        }, options)

        allInsightCards.forEach(card => {
          observer.observe(card)
        })

        return () => {
          observer.disconnect()
        }
      }
    }, [allInsightCards])
  }

  //add email address (in JS to avoid email scrapers) using setAttribute
  const emailEl = document.querySelectorAll('.email_el')
  const email = 'kev@kevrog.com'

  emailEl.forEach( element => element.setAttribute("href", `mailto:${email}`))

  const handleImgClick = (event) => {
    const src = event.target.src
    const parentClassList = event.target.parentNode.classList
    setFullScreenImgUrl(src)
    setActiveFullScreenImg(true)
    if (parentClassList.contains('zoom_background_light')) {
        setLightBackground(true)
    } else {
        setLightBackground(false)
    }
  }

  const handleVideoClick = (event) => {
    setFullScreenVideoActive(true)
    const src = event.target.childNodes[0].src
    setFullScreenImgUrl(src)
    setActiveFullScreenImg(true)
  }

  const handleSvgClick = (event) => {
    setActiveFullScreenImg(true)
    setFullScreenImgUrl('svg')
    console.log('runnning svg')
  }

  return (
    <div className='App'>
      <Router>
        <Header 
          scrollToSection={scrollToSection}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
          activeNavItem={activeNavItem}
          setActiveNavItem={setActiveNavItem}
          setActiveFullScreenImg={setActiveFullScreenImg}
        />
        <ScrollToTop />
        {activeFullScreenImg && fullScreenImgUrl && 
          <FullScreenImage 
            key={fullScreenImgUrl}
            imgUrl={fullScreenImgUrl} 
            setActiveFullScreenImg={setActiveFullScreenImg}
            fullScreenVideoActive={fullScreenVideoActive}
            setFullScreenVideoActive={setFullScreenVideoActive}
            lightBackground={lightBackground}
          />}
        
        <Routes>
          <Route exact path="/" element={
            <Homescreen 
              scrollToSection={scrollToSection}
              selectedSection={selectedSection}
              activeNavItem={activeNavItem}
              setActiveNavItem={setActiveNavItem}
          /> } />
          <Route exact path="/poster" element={
            <Poster 
              useIntersectionObserver={useIntersectionObserver}
              setAllInsightCards={setAllInsightCards}
              allInsightCards={allInsightCards}
              setActiveNavItem={setActiveNavItem}
              handleImgClick={handleImgClick}
            /> }
          />
          <Route exact path="/chewybrew" element={
            <ChewyBrew 
              useIntersectionObserver={useIntersectionObserver}
              setAllInsightCards={setAllInsightCards}
              allInsightCards={allInsightCards}
              setActiveNavItem={setActiveNavItem}
              handleImgClick={handleImgClick}
            /> }
          />
          <Route exact path="/flying-nickel" element={
            <FlyingNickel 
              useIntersectionObserver={useIntersectionObserver}
              setAllInsightCards={setAllInsightCards}
              allInsightCards={allInsightCards}
              setActiveNavItem={setActiveNavItem}
              handleImgClick={handleImgClick}
            /> }
          />
          <Route exact path="/daily-checklist" element={
            <DailyChecklist 
              useIntersectionObserver={useIntersectionObserver}
              setAllInsightCards={setAllInsightCards}
              allInsightCards={allInsightCards}
              setActiveNavItem={setActiveNavItem}
              handleImgClick={handleImgClick}
              handleSvgClick={handleSvgClick}
            /> }
          />
          <Route exact path="/this-website" element={
            <ThisWebsite 
              useIntersectionObserver={useIntersectionObserver}
              setAllInsightCards={setAllInsightCards}
              allInsightCards={allInsightCards}
              setActiveNavItem={setActiveNavItem}
              handleImgClick={handleImgClick}
              handleVideoClick={handleVideoClick}
            /> }
          />
          <Route exact path="/chores-app" element={
            <ChoresApp 
              useIntersectionObserver={useIntersectionObserver}
              setAllInsightCards={setAllInsightCards}
              allInsightCards={allInsightCards}
              setActiveNavItem={setActiveNavItem}
              handleImgClick={handleImgClick}
            /> }
          />
          <Route exact path="/more-work" element={
            <MoreWork 
              setActiveNavItem={setActiveNavItem}
              handleImgClick={handleImgClick}
            /> }
          />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;

