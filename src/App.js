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
import MoreWork from './components/MoreWork';
import Footer from './components/Footer';


function App() {

  const [allInsightCards, setAllInsightCards] = useState(null)

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({behavior: 'smooth'})
      console.log(section)
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

  // const [allProjectImages, setAllProjectImages] = useState(null)

  // const bodyEl = document.querySelector("body")
  // const projectImg = document.querySelectorAll(".project_img")
  // const moreWorkHeroImgWrapper = document.querySelectorAll(".mw_hero_img_wrapper")
  // const moreWorkInsightImgWrapper = document.querySelectorAll(".mw_insight_img_wrapper")


  // projectImg.forEach(img => {
  //   img.addEventListener("click", () => {
  //     img.classList.toggle("zoom_active")
  //     // check if zoom is active or inactive
  //     if (!img.classList.value.includes("zoom_active")) {
  //       bodyEl.classList.remove("noscroll")
        
  //       if (img.nextElementSibling) {
  //         img.nextElementSibling.style.marginTop = "0"
  //       } else {
  //         img.previousElementSibling.style.marginBottom = "0"
  //       }
        
  //       // add padding to top or bottom to prevent other elements shifting
  // //			console.log("zoom actived")
  // //			if (img.nextElementSibling) {
  // //				img.nextElementSibling.style.marginTop = `${selectedImgHeight}px`
  // //			} else {img.previousElementSibling.style.marginBottom = `${selectedImgHeight}px`
  // //				}
  // //			projectContent.style.paddingTop = `${selectedImgHeight}px`
  // //		} else {
  // //			// remove project content padding
  // ////			console.log("zoom deactived")
  // //			if (img.nextElementSibling) {
  // //				img.nextElementSibling.style.marginTop = "0"
  // //			} else {img.previousElementSibling.style.marginBottom = "0"
  // //				
  // //			}
  //     } else {
  //       bodyEl.classList.add("noscroll")
        
  //     }
  //   })
  // })


  // //maybe add mw_zoom_actie styles


  // moreWorkHeroImgWrapper.forEach(img => {
  //   img.addEventListener("click", () => {
  //     img.classList.toggle("zoom_active")
  //     // check if zoom is active or inactive
  //     if (!img.classList.value.includes("zoom_active")) {
  // //			bodyEl.classList.remove("noscroll")
        
  //       if (img.nextElementSibling) {
  //         img.nextElementSibling.style.marginTop = "0"
  //       } else {
  //         img.previousElementSibling.style.marginBottom = "0"
  //       }
        
  //     } else {
        
        
  //     }
  //   })
  // })

  // moreWorkInsightImgWrapper.forEach(img => {
  //   img.addEventListener("click", () => {
  //     img.classList.toggle("zoom_active")
  //     // check if zoom is active or inactive
  //     if (!img.classList.value.includes("zoom_active")) {
  // //			bodyEl.classList.remove("noscroll")
        
  //       if (img.nextElementSibling) {
          
  //       } else {
          
  //       }
        
  //     } else {
        
        
  //     }
  //   })
  // })

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
            <Poster 
              useIntersectionObserver={useIntersectionObserver}
              setAllInsightCards={setAllInsightCards}
              allInsightCards={allInsightCards}
            /> }
          />
          <Route exact path="/chewybrew" element={
            <ChewyBrew 
              useIntersectionObserver={useIntersectionObserver}
              setAllInsightCards={setAllInsightCards}
              allInsightCards={allInsightCards}
            /> }
          />
          <Route exact path="/flying-nickel" element={
            <FlyingNickel 
              useIntersectionObserver={useIntersectionObserver}
              setAllInsightCards={setAllInsightCards}
              allInsightCards={allInsightCards}
            /> }
          />
          <Route exact path="/daily-checklist" element={
            <DailyChecklist 
              useIntersectionObserver={useIntersectionObserver}
              setAllInsightCards={setAllInsightCards}
              allInsightCards={allInsightCards}
            /> }
          />
          <Route exact path="/this-website" element={
            <ThisWebsite 
              useIntersectionObserver={useIntersectionObserver}
              setAllInsightCards={setAllInsightCards}
              allInsightCards={allInsightCards}
            /> }
          />
          <Route exact path="/chores-app" element={
            <ChoresApp 
              useIntersectionObserver={useIntersectionObserver}
              setAllInsightCards={setAllInsightCards}
              allInsightCards={allInsightCards}
            /> }
          />
          <Route exact path="/more-work" element={
            <MoreWork 
              
            /> }
          />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;

