import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import backArrow from '../media/back_arrow.svg'
import downArrows from '../media/arrows_down_orange.svg'
import flyingNickelHero from '../media/Flying_Nickel_hero.jpg'
import flyingNickelCircuitLogo from '../media/FN_circuit_logo.jpg'
import fnBreakdown from '../media/FN_logo_breakdown.jpg'
import fnWatch from '../media/FN_watch.jpg'
import fnSocial from '../media/FN_social.jpg'
import fnCar from '../media/FN_car.jpg'
import fnPhone from '../media/FN_phone_mockup.jpg'

export default function FlyingNickel(props) {

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
								<p>Flying <br/>Nickel</p>
							</div>
							<div className="project_content">
								<div className="feature_overview_container">
									<div  className="project_img feature_img">
										<img src={flyingNickelHero} alt="hero image for my flying nickel logo design project; It shows a white logo that resembles the letter F in front of a blue purple background."/>
									</div>
									<div className="project_overview">
										<div className="overview_title">
										Overview
										</div>
										<p>Flying Nickel is a fictitious company created for a design competition that I participated in. The fake company’s product was an app that tracks appointments using blockchain technology. My task was to create a logo that would be used on everything from smart watches to the side of vehicles. The brief requested the use of pink and purple in the design and stated that they wanted to “convey a sense of wonder, while being modern”.  This project turned out to be great practice in logo design and creating mockups as if it were a real client.</p>
									</div>
								</div>
								<div className="project_img insight_img img_left">
									<img src={flyingNickelCircuitLogo} alt="This image shows the logo in gray on a white background and gray circuit connections surrounding the logo."/>
								</div>

								<div className="project_insight insight_right">
									<div className="insight_title">
									1
									</div>
									<p>The final design combined the outline of the letter F with a calendar icon. The brief emphasized the use of technology and blockchain, so I was sure to include those themes in the logo presentation.</p>
								</div>

								<div className="project_img insight_img img_right">
									<img src={fnBreakdown} alt="an image showing how the logo resembles different things like the letter F, a calendar and more by highlighting in bright green those shapes in the logo."/>
								</div>

								<div className="project_insight">
									<div className="insight_title">
									2
									</div>
									<p>I created the icon shape to be reminiscent of several themes mentioned in the brief. Here is a breakdown of the logo features.</p>
								</div>

								<div className="project_img insight_img img_left">
									<img src={fnWatch} alt="an upclose image of a smart watch with the logo on it."/>
								</div>

								<div className="project_insight insight_right">
									<div className="insight_title testing3">
									3
									</div>
									<p>Here is a demonstration of how the logo would look on small screens.</p>
								</div>

								<div className="project_img insight_img img_right">
									<img src={fnSocial} alt="An image of a phone with the instagram interface on it and the flying nickel logo for a profile picture."/>
								</div>

								<div className="project_insight">
									<div className="insight_title">
									4
									</div>
									<p>This demonstrates that the logo would also work as a profile picture on social accounts.</p>
								</div>

								<div className="project_img insight_img img_left">
									<img src={fnCar} alt="A white mazda with the gray logo on the driver side door and pink circuit connections."/>
								</div>

								<div className="project_insight insight_right">
									<div className="insight_title">
									5
									</div>
									<p>The logo also needed to work on the side of vehicles. I definitely leaned in to the request for a modern feel that was mentioned in the brief.</p>
								</div>

								<div className="project_img insight_img img_right">
									<img src={fnPhone} alt="the grey logo on a mobile device."/>
								</div>

								<div className="project_insight">
									<div className="insight_title">
									6
									</div>
									<p>Here's the logo as a loading screen. I wanted to show that the logo could also be used to resemble wings.</p>
								</div>

								<div className="more_work">
									<div className="more_work_title">
									More Work
									</div>
									<div className="project_select">
                                        <Link to='/chewybrew' className="more_work_left">
											<img src={backArrow} alt="back arrow"/>
											<p>Chewy <br/>Brew Co.</p>
										</Link>
										<Link to='/daily-checklist' className="more_work_right">
											<img src={backArrow} alt="next arrow"/>
											<p>Daily <br/>Checklist</p>
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