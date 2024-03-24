import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import backArrow from '../media/back_arrow.svg'
import chewyBrewPurple from '../media/tatooed_can_mockup_purp.jpg'
import chewyBrewLogo from '../media/cbc_logo.svg'
import chewyBrewBlondeAle from '../media/cbc_blonde_ale_label.jpg'
import chewyBrewAllCans from '../media/CBC_all_cans_blue.jpg'
import downArrows from '../media/arrows_down_orange.svg'


export default function ChewyBrew(props) {

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
                            <p>Chewy<br/> Brew<br/> Co.</p>
                        </div>
                        <div className="project_content">
                            <div className="feature_overview_container">
                                <div  className="project_img feature_img">
                                    <img src={chewyBrewPurple} alt="A tatooed arm holding a purple beer can in front of a pink background."/>
                                </div>
                                <div className="project_overview">
                                    <div className="overview_title">
                                    Overview
                                    </div>
                                    <p>Chewy Brew Co. is an emerging brewing company in Boulder Colorado. My role on this project was to create a logo and branding that was in line with their company values and to design the labels for their lineup of beers.</p>
                                    <p>As a member of the LGBTQ+ community, the owner wanted the rainbow to be a theme in their branding, but he didn't want it to be “overwhelmingly rainbow”. The challenge was finding the right balance. He also wanted the logo text to be graffiti-like.</p>
                                </div>
                            </div>
                            <div className="project_img insight_img img_no_border zoom_background_light img_left">
                                <img src={chewyBrewLogo} alt="Image of the logo - it is graffiti style letters with colorful outlines in front of a black and white illustration of the Flatiron Mountains with colorful stars above."/>
                            </div>

                            <div className="project_insight insight_right">
                                <div className="insight_title">
                                1
                                </div>
                                <p>The result is this logo - graffiti style letters with colorful outlines in front of the Flatiron Mountains (the mountains of Boulder, CO).</p>
                            </div>

                            <div className="project_img insight_img img_right">
                                <img src={chewyBrewBlondeAle} alt="An image of the label for the blonde beer called platinum blonde - the label has wavy lines of yellow and sits in front of an orange background."/>
                            </div>

                            <div className="project_insight">
                                <div className="insight_title">
                                2
                                </div>
                                <p>The owner requested that the packaging be simple and recognizable from afar. It needed to compliment the logo and be colorful, but still simple. The result is this label. The wavy background compliments the outlines seen in the logo and the bright color makes the can jump off the shelf.</p>
                            </div>

                            <div className="project_img insight_img img_left">
                                <img src={chewyBrewAllCans} alt="An image of all four beer cans lined up in front of a bright blue background. From left to right the cans are red head (with a red label) platinum blonde (with a yellow label) It's Pretty Awesome (with a green label) and Tall dark and handsome (with a purple label)"/>
                            </div>

                            <div className="project_insight insight_right">
                                <div className="insight_title testing3">
                                3
                                </div>
                                <p>Here's the full lineup of beers.</p>
                            </div>

                            <div className="more_work">
                                <div className="more_work_title">
                                More Work
                                </div>
                                <div className="project_select">
                                    <Link to='/poster' className="more_work_left">
                                        <img src={backArrow} alt="back arrow"/>
                                        <p>Concert <br/>Poster</p>
                                    </Link>
                                    <Link to='/flying-nickel' className="more_work_right">
                                        <img src={backArrow} alt="next arrow"/>
                                        <p>Flying <br/>Nickel</p>
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