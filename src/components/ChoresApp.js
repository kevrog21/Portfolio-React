import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BackButton from './BackButton'

import backArrow from '../media/back_arrow.svg'
import downArrows from '../media/arrows_down_orange.svg'
import choresHero from '../media/to-do_mockup_purple_new.jpg'

export default function ChoresApp(props) {

    const { useIntersectionObserver, allInsightCards, setAllInsightCards, setActiveNavItem, handleImgClick } = props

    useEffect(() => {
        const insightCards = document.querySelectorAll(".project_insight")
        if (insightCards.length > 0) {
            setAllInsightCards(insightCards)
        }
		setActiveNavItem(1)
    }, [])

    useIntersectionObserver(allInsightCards)

    return (
        <main>
			<div className="above_fold_wrapper">
				<div className="project_wrapper flex">
					<div className="overview_content" id="project_grid">

						<div className="project_body">
							<BackButton />
							<div className="project_heading">
								<p>Chores<br/>App</p>
							</div>
							<div className="project_content">
								<div className="feature_overview_container">
									<div  className="project_img feature_img">
										<img src={choresHero} onClick={handleImgClick} alt="Hero image for my chore website interface; It shows a smaller version of the website's interface on a phone. The interface looks like a piece of binder paper with a blue typeface for the text that resemble a ball poiint pen writing."/>
									</div>
									<div className="project_overview">
										<div className="overview_title">
										Overview
										</div>
											<p>(IN PROGRESS) I'm currently working on an app that assigns weekly chores based on when they were last completed and how frequently they should be completed. It will also to be flexible  to account for varying numbers of roommates. My hope is to prevent waiting until I notice that furniture is dusty or that there are splatters in the microwave to prompt me to clean them. I want it to be more than just a simple rotation, but a dynamic list that is adjusted based on how many chores are currently assigned, number of roommates, and breaking bigger chores into smaller bite size chores.</p>
										</div>
								</div>

								<div className="more_work">
									<div className="more_work_title">
									More Work
									</div>
									<div className="project_select">
                                        <Link to='/this-website' className="more_work_left">
											<img src={backArrow} alt="back arrow"/>
											<p>This <br/>Website</p>
										</Link>
										<Link to='/poster'className="more_work_right">
											<img src={backArrow} alt="next arrow"/>
											<p>Concert <br/>Poster</p>
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