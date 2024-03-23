import { Link } from 'react-router-dom'

import mountainsSvg from '../media/homepage_mountains.svg'
import cactiDude from '../media/cacti_character_1.gif'
import orangeArrows from '../media/arrows_down_orange.svg'

import jazzPosterMockup from '../media/jazz_poster_mockup_red.jpg'
import tatooCanMockup from '../media/tatooed_can_mockup_purp.jpg'
import flyingNickelMockup from '../media/Flying_Nickel_hero.jpg'
import dailyChecklistMockup from '../media/daily_checklist_hero5.svg'
import thisWebsiteMockup from '../media/portfolio_website_mockup.svg'
import choreWebsiteMockup from '../media/to-do_mockup_purple_new.jpg'


import certificateIcon from '../media/web_dev_cert_icon.svg'
import graphicDesignIcon from '../media/AA_icon.svg'
import marketingIcon from '../media/BS_icon.svg'

export default function Homescreen(props) {

    const { scrollToSection } = props

    return (
        <main>
            <section id="above_fold">
                <div className="content_wrapper flex">
                    <div className="intro_content" id="intro_grid">
                            <div className="intro_text">
                                <h1>Graphic Designer <div className="amp_wrap"><div className="amp">&amp;<div className="amp2">&amp;</div></div></div> &nbsp;<br/> Web Developer</h1>
                                <p>based in Phoenix, AZ</p>
                            </div>
                            <div className="logo_animation">
                                <img id="mountains" src={mountainsSvg} alt=""/>
                                <img id="cacti_animation" src={cactiDude} alt=""/>
                            </div>
                            <div className="icon_container">
                                <div className="icon_list_right">
                                    <a href="https://www.linkedin.com/in/hirekevinrogers/" target="_blank">
                                        <svg className="svg_icon_main">
                                            <use href="#linkedin_icon"></use>
                                        </svg>
                                        <div className="label_wrap"><p className="icon_label">LinkedIn</p></div></a>
                                    <a href="https://github.com/kevrog21" target="_blank">
                                        <svg className="svg_icon_main">
                                            <use href="#github_icon"></use>
                                        </svg><div className="label_wrap"><p className="icon_label">github</p></div></a>
                                    <a href="https://dribbble.com/Kevrog" target="_blank">
                                        <svg className="svg_icon_main">
                                            <use href="#dribbble_icon"></use>
                                        </svg><div className="label_wrap"><p className="icon_label">dribbble</p></div></a>
                                    <a href="#" target="_blank" className="email_el">
                                        <svg className="svg_icon_main">
                                            <use href="#email_icon"></use>
                                        </svg><div className="label_wrap"><p className="icon_label">email</p></div></a>
                                </div>
                            </div>
                            <div className="column_left">
                                <div className="vertical_line"></div>
                                <div className="icon_list_left">
                                    <a href="https://www.linkedin.com/in/hirekevinrogers/" target="_blank">
                                        <svg className="svg_icon_main">
                                            <use href="#linkedin_icon"></use>
                                        </svg>
                                    </a>
                                    <a href="https://github.com/kevrog21" target="_blank">
                                        <svg className="svg_icon_main">
                                            <use href="#github_icon"></use>
                                        </svg>
                                    </a>
                                    <a href="https://dribbble.com/Kevrog" target="_blank">
                                        <svg className="svg_icon_main">
                                            <use href="#dribbble_icon"></use>
                                        </svg></a>
                                    <a href="#" target="_blank" className="email_el">
                                        <svg className="svg_icon_main">
                                            <use href="#email_icon"></use>
                                        </svg></a>
                                </div>
                                <a className="vert_proj" onClick={() => scrollToSection('project_section')}><p  className="vertical_text">PROJECTS</p></a>
                                <img className="downward_arrows" src={orangeArrows} alt="a group of arrows pointing dowm"/>
                                <img className="downward_arrows2" src={orangeArrows} alt="a group of arrows pointing dowm"/>
                            </div>
                    </div>
                </div>
            </section>

            <section id="project_section"  className="bkgd_secondary" >
                <div className="section_header bkgd_secondary content_wrapper">
                    <div className="header_margin">
                        <p className="section_title">PROJECTS</p>
                    </div>
                </div>
                <div className="projects_wrapper content_wrapper bkgd_secondary flex">
                    <div className="project_col_wrapper">
                        <div className="proj_col_one">
                            <p className="proj_type">Graphic Design</p>
                            <div className="project_card_wrapper">
                                <div className="card">
                                    <Link to='/poster'><a>
                                        <div className="img_container">
                                            <img className="proj_img" src={jazzPosterMockup} alt="thumbnail image for my concert poster project; It shows a red poster on a gray brick wall" loading="lazy" />
                                        </div>
                                    </a></Link>
                                    <div className="proj_title">
                                        <Link to='/poster'><a className="proj_title"><p>Concert Poster</p></a></Link>
                                    </div>
                                </div>
                                <div className="card">
                                    <a href="pages/chewybrew.html">
                                        <div className="img_container">
                                            <img className="proj_img" src={tatooCanMockup} alt="thumbnail image for my chewy brew Co project; It shows a purple beer can in front of a pink wall" loading="lazy" />
                                        </div>
                                    </a>
                                    <div className="proj_title">
                                        <a className="proj_title" href="pages/chewybrew.html"><p>Chewy Brew Co.</p></a>
                                    </div>
                                </div>
                                <div className="card">
                                    <a href="pages/flying_nickel.html">
                                        <div className="img_container">
                                            <img className="proj_img" src={flyingNickelMockup} alt="thumbnail image for my flying nickel logo design project; It shows a white logo that resembles the letter F in front of a blue purple background." loading="lazy" />
                                        </div>
                                    </a>
                                    <div className="proj_title">
                                        <a className="proj_title" href="pages/flying_nickel.html"><p>Flying Nickel</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="proj_col_two">
                            <p className="proj_type">Web Development</p>
                            <div className="project_card_wrapper">
                                <div className="card">
                                    <a href="pages/daily_checklist.html">
                                        <div className="img_container">
                                            <img className="proj_img" src={dailyChecklistMockup} alt="thumbnail image for my checklist website project; It shows a desktop version of the website's interface which is a little farm illustration with a white form overlayed on top." loading="lazy" />
                                        </div>
                                    </a>
                                    <div className="proj_title">
                                        <a className="proj_title" href="pages/daily_checklist.html"><p>Daily Checklist</p></a>
                                    </div>
                                </div>
                                <div className="card">
                                    <a href="pages/this_website.html">
                                        <div className="img_container">
                                            <img className="proj_img" src={thisWebsiteMockup} alt="thumbnail image for this website; It shows a smaller version of the website's interface on a laptop and phone" loading="lazy" />
                                        </div>
                                    </a>
                                    <div className="proj_title">
                                        <a className="proj_title" href="pages/this_website.html"><p>This Website</p></a>
                                    </div>
                                </div>
                                <div className="card">
                                    <a href="pages/chores_placeholder.html">
                                        <div className="img_container">
                                            <img className="proj_img" src={choreWebsiteMockup} alt="thumbnail image for my chore website interface; It shows a smaller version of the website's interface on a phone." loading="lazy" />
                                        </div>
                                    </a>
                                    <div className="proj_title">
                                        <a className="proj_title" href="pages/chores_placeholder.html"><p>Chores App</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="no_decoration" href="pages/more_work.html"><p id="more_work">see more work</p></a>
            </section>
            
            <section id="about_section">
                <div className="section_header bkgd_primary content_wrapper">
                    <div className="header_margin">
                        <p className="section_title">ABOUT ME</p>
                    </div>
                </div>
                <div className="about_wrapper content_wrapper">
                    <div className="about_text_image_wrapper">
                        <div className="about_img_container">

                        </div>
                        <div className="about_text_wrapper flex">
                            <div className="about_text">
                                <h3>Who is Kevin?</h3>
                                <h4>the man behind the mustache</h4>
                                <p>I am a designer and web developer, but more importantly, I'm someone who loves creating unique websites and designs that showcase the personality of a brand. Each project is a new puzzle and an opportunity to make a lasting impression. Whether it’s with a cute little cactus dude, or just a clean interface, there’s always something new to explore. That's what keeps me excited to take on the next project.</p>
                                <p>When Im not designing or working on websites, I enjoy spending my time playing baseball, running, golfing, playing fantasy football, knitting, board gaming, and exploring new places around Phoenix.</p>
                            </div>
                        </div>
                    </div>
                    <div className="achievement_box">
                        <p className="ach_title">Achievements</p>
                        <div className="achievements_wrapper">
                            <div className="achievement">
                                <div className="img_box">
                                    <img className="ach_img cert" src={certificateIcon} alt="black vector image of a certificate that says web dev"/>
                                </div>
                                <p>Frontend web developer certificate</p>
                            </div>
                            <div className="achievement">
                                <div className="img_box">
                                    <img className="ach_img" src={graphicDesignIcon} alt="black vector image of a graduation cap sitting on top of the letters A A"/>
                                </div>
                                <p>Associate degree in graphic design</p>
                            </div>
                            <div className="achievement">
                                <div className="img_box">
                                    <img className="ach_img" src={marketingIcon} alt="black vector image of a graduation cap sitting on top of the letters B and S"/>
                                </div>
                                <p>Bachelor’s degree in marketing</p>
                            </div> 
                        </div>
                    </div>
                </div>  

            </section>
        </main>
    )
}