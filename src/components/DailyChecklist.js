import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BackButton from './BackButton'

import backArrow from '../media/back_arrow.svg'
import downArrows from '../media/arrows_down_orange.svg'
import checklistHero from '../media/daily_checklist_hero5.svg'
import checklistForm from '../media/form_validation3.jpg'
import checklistResponsiveness from '../media/responsive_demo.gif'
import checklistSky from '../media/Daily_checklist_sky.gif'
import sheepLove from '../media/love_sheep.svg'
import checklistIcons from '../media/checklist_icon_set.svg'
import { ReactComponent as SheepSvg } from './SheepSvg.svg'

export default function DailyChecklist(props) {

    const { useIntersectionObserver, allInsightCards, setAllInsightCards, setActiveNavItem, handleImgClick } = props

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
                            <BackButton />
                            <div className="project_heading">
                                <p>Daily Checklist Website</p>
                            </div>
                            <div className="project_content">
                                <div className="feature_overview_container">
                                    <div  className="project_img feature_img">
                                        <img src={checklistHero} onClick={handleImgClick} alt="Hero image for my checklist website project; It shows the desktop version of the website's interface which is a little farm illustration with a white form overlayed on top."/>
                                    </div>
                                    <div className="project_overview">
                                        <div className="overview_title">
                                        Overview
                                        </div>
                                            <p>My daily checklist website is a dynamic site that I built from scratch using php, html, css, and javascript. It tracks personal metrics that I think are important like how often I floss, exercise, sleep and others, and provides stats on the data. The appearance of the website changes based on user input and the time of day that the site is visited. It's also completely responsive and has some fun little easter eggs that I put in the UI. This project was great practice for database interactions, responsive design, and dynamic site building.</p>
                                        </div>

                                        {/* Check out a demo version of the site <a href="#">here</a>. */}

                                </div>
                                <div className="project_img insight_img img_left">
                                    <img src={checklistForm} onClick={handleImgClick} alt="a closeup image of the form showing an incorrect entry into a form field and the form automatically asking the user to enter a valid value instead."/>
                                </div>

                                <div className="project_insight insight_right">
                                    <div className="insight_title">
                                    1
                                    </div>
                                    <p>Creating a functional form was a crucial part of this project, but connecting to a real database requires proper security measures. To cover my basic security needs I included a honeypot input field, a password field, and semantic input types for form validation. This image shows the form utilizing HTML5's input validation functionality.</p>
                                </div>

                                <div className="project_img insight_img img_right">
                                    <img src={checklistResponsiveness} onClick={handleImgClick} alt="a gif showing the responsiveness of the site on various screen sizes."/>
                                </div>

                                <div className="project_insight">
                                    <div className="insight_title">
                                    2
                                    </div>
                                    <p>Here's a gif demonstrating the responsiveness of the site. Making sure the data table displayed correctly on all screen sizes was a bit of a challenge. In order to make everything fit, I created custom icons for each column instead of having lengthy words that interfered with resizing.</p>
                                </div>

                                <div className="project_img insight_img img_left">
                                    <img src={checklistSky} onClick={handleImgClick} alt="a gif demonstrating that the sun moves and the sky changes colors as the day progresses."/>
                                </div>

                                <div className="project_insight insight_right">
                                    <div className="insight_title testing3">
                                    3
                                    </div>
                                    <p>Since I fill out the form every morning, I wanted to be greeted by a design that I found welcoming and maybe gave me a little chuckle. So I went with a light-hearted farm theme and created a dynamic background with a sky that changes based on the users local time. I think that makes it feel like it's its own little world within the website and I enjoy checking on my little sheeps every day.</p>
                                </div>

                                <div className="project_img insight_img img_right zoom_background_light">
                                    <SheepSvg />
                                </div>

                                <div className="project_insight">
                                    <div className="insight_title">
                                    4
                                    </div>
                                    <p>The scene is brought to life using a combination of inline SVG's and custom CSS animations. For example, within the SVG code I added class names to different parts of the sheep and then used @keyframes to animate them in CSS. I went this route because of the small file size compared to other options and I wanted total control over the size without the animation getting pixelated. However, in retrospect this method was a little too tedious and in the future I would probably use something like Anime.JS to animate my SVGs.</p>
                                </div>

                                <div className="project_img insight_img img_left">
                                    <img src={sheepLove} onClick={handleImgClick} alt="an image of two of the sheep on the farm with a heart in between them."/>
                                </div>

                                <div className="project_insight insight_right">
                                    <div className="insight_title">
                                    5
                                    </div>
                                    <p>I had some fun with the UI and added some easter eggs to the scene like a little heart that pops up between two of the sheep after the form is successfully submitted.</p>
                                </div>

                                <div className="project_img insight_img img_right">
                                    <img src={checklistIcons} onClick={handleImgClick} alt="an image of the icons used in the checklist site - a calendar floss dumbbell water glass wine glass bed shower head and phone."/>
                                </div>

                                <div className="project_insight">
                                    <div className="insight_title">
                                    6
                                    </div>
                                    <p>Here's the custom icon set I created for the data table. The icons allowed the table to be much more responsive.</p>
                                </div>

                                <div className="more_work">
                                    <div className="more_work_title">
                                    More Work
                                    </div>
                                    <div className="project_select">
                                        <Link to='/flying-nickel' className="more_work_left">
                                            <img src={backArrow} alt="back arrow"/>
                                            <p>Flying <br/>Nickel</p>
                                        </Link>
                                        <Link to='/this-website' className="more_work_right">
                                            <img src={backArrow} alt="next arrow"/>
                                            <p>This <br/>Website</p>
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