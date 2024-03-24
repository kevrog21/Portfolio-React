import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import backArrow from '../media/back_arrow.svg'
import downArrows from '../media/arrows_down_orange.svg'
import thisWebsiteHero from '../media/portfolio_website_mockup.svg'
import imageZoomDemo from '../media/image_zoom_demo.mp4'
import intersectionObserverDemo from '../media/intersection_observer_vid.mp4'
import speedTest from '../media/speed_test.jpg'
import iconSet from '../media/kevrog_icons_orange.svg'
import oldPortfolioDesign1 from '../media/old_portfolio_design.jpg'
import oldPortfolioDesign2 from '../media/old_portfolio_design_v2.jpg'

export default function ThisWebsite(props) {

    const { useIntersectionObserver, allInsightCards, setAllInsightCards } = props

    useEffect(() => {
        const insightCards = document.querySelectorAll(".project_insight")
        if (insightCards.length > 0) {
            setAllInsightCards(insightCards)
        }
    }, [])

    useIntersectionObserver(allInsightCards)

    return (
        <main>
			<div className="above_fold_wrapper">
				<div className="project_wrapper flex">
					<div className="overview_content" id="project_grid">

						<div className="project_body">
							<div className="back_button">
								<a href=""><img src={backArrow} alt="back arrow"/></a>
							</div>
							<div className="project_heading">
								<p>This<br/>Website</p>
							</div>
							<div className="project_content">
								<div className="feature_overview_container">
									<div  className="project_img feature_img">
										<img src={thisWebsiteHero} alt="Hero image for this website; It shows a smaller version of the website's interface on a laptop and phone."/>
									</div>
									<div className="project_overview">
										<div className="overview_title">
										Overview
										</div>
											<p>I coded this portfolio website as I was working my way through my frontend development certificate program. I used vanilla HTML, CSS, and Javascript to build it. The website turned out to be a great learning experience for me by putting the coding concepts I was learning to practical use in a real website. When I first started this project I had my graphic design work to display and now I’m adding more web development projects as I complete them.</p>
										</div>

										 {/* Check out a demo version of the site <a href="#">here</a>. */}

								</div>

								{/* <div className="project_img insight_img img_left">
									<img src="../media/form_validation3.jpg" alt="an isolated vector image of the poster"/>
								</div>

								<div className="project_insight insight_right">
									<div className="insight_title">
									1
									</div>
									<p>The landing page animation serves several purposes. First, I wanted something that was unique and welcoming. I also wanted something that would instantly say, “This website was built from scratch” without having to actually print those words onto the screen. I thought that having separate elements of the page interact with each other would show an understanding of development concepts and is something that would be very hard to achieve on a web builder site. And lastly, I thought it would be challenging to successfully pull it off, and that I would learn more about CSS positioning and responsive design in the process.</p>
								</div> */}


						

								<div className="project_img insight_img img_left">
									<video autoPlay muted loop defaultMuted playsinline width="550px"> 
										<source src={imageZoomDemo} type="video/mp4"/>
									</video>
								</div>

								<div className="project_insight insight_right">
									<div className="insight_title testing3">
									1
									</div>
									<p>Pretty much everything on this site, including the image zoom functionality, was created from scratch. I did it that way because I thought that doing it the long way to start out would help me in the future when I’m using frameworks to get the job done, as it would be good to know what’s going on under the hood.</p>
								</div>
								
								<div className="project_img insight_img img_right">
									<video autoPlay muted loop defaultMuted playsinline width="550px"> 
										<source src={intersectionObserverDemo} type="video/mp4"/>
									</video>
								</div>

								<div className="project_insight">
									<div className="insight_title">
									2
									</div>
									<p>Many animations on this site are triggered by intersection observers such as the section headers on the homepage and the sliding text on this page. Before learning about intersection observers, I tried achieving this feature by using scroll event listeners that would check the page coordinates and then trigger the animations. It was horribly inefficient and a pain to implement. After learning about intersection observers, the site became much more functional and performant.</p>
								</div>

								<div className="project_img insight_img img_right">
									<img src={speedTest} alt="a screenshot of a website testing website's interface showing a score of 93 for my portfolio."/>
								</div>

								<div className="project_insight">
									<div className="insight_title">
									3
									</div>
									<p>I tested the site out in a website grader tool to make sure it's up to current standards.  It was given a score of 93/100 based on several factors like load time, responsiveness, security etc. I’ve since made some updates to further optimize the site such as minifying the code and making images more responsive.</p>
								</div>

								<div className="project_img insight_img img_left">
									<img src={iconSet} alt="a list of the icons used in this site. The dribbble logo, an email icon, the git hub logo, generic website logo, a location icon, a phone icon, certificate icon, graduation cap icons, resume icon, and the linkedIn logo."/>
								</div>

								<div className="project_insight insight_right">
									<div className="insight_title">
									4
									</div>
									<p>Here is the icon set I made for this website. They are SVGs that are inserted as an SVG sprite so I can then use them throughout the site with the &lt;use&gt; tag.</p>
								</div>

								<div className="project_img insight_img img_right">
									<img src={oldPortfolioDesign1} alt="The first interface for this website - a dark blue background with a large gummy candy in the shape of the letter C in the middle of the page."/>
								</div>

								<div className="project_insight">
									<div className="insight_title">
									5
									</div>
									<p>This was the first version of the site that I built after first learning HTML and CSS. Apparently I didn't know much about accessibility at that time.</p>
								</div>
								
								<div className="project_img insight_img img_left">
									<img src={oldPortfolioDesign2} alt="The second interface design for this site - a cream colored background with dark blue and red text with a large Light blue logo in the middle of the page."/>
								</div>

								<div className="project_insight insight_right">
									<div className="insight_title">
									6
									</div>
									<p>This was the landing page for the second design of the site.</p>
								</div>
								

								<div className="more_work">
									<div className="more_work_title">
									More Work
									</div>
									<div className="project_select">
                                        <Link to='/daily-checklist' className="more_work_left">
											<img src={backArrow} alt="back arrow"/>
											<p>Daily <br/>Checklist</p>
										</Link>
										<Link to='/chores-app' className="more_work_right">
											<img src={backArrow} alt="next arrow"/>
											<p>Chores <br/>App</p>
										</Link>
									</div>
								</div>
							</div>
						</div>

						<div className="project_column_left">
							<div className="top_vertical_line"></div>

							<img className="downward_arrows" src={downArrows} alt="a group of arrows pointing dowm"/>
							<img className="downward_arrows2" src={downArrows} alt="a group of arrows pointing dowm"/>

							<div className="btm_vertical_line"></div>
						</div>

						<div className="column_right">

						</div>
					</div>
				</div>
			</div>
		</main>
    )
}