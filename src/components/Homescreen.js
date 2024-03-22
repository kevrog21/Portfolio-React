import mountainsSvg from '../media/homepage_mountains.svg'
import cactiDude from '../media/cacti_character_1.gif'
import orangeArrows from '../media/arrows_down_orange.svg'

export default function Homescreen() {
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
                                <a className="vert_proj" href="#project_section"><p  className="vertical_text">PROJECTS</p></a>
                                <img className="downward_arrows" src={orangeArrows} alt="a group of arrows pointing dowm"/>
                                <img className="downward_arrows2" src={orangeArrows} alt="a group of arrows pointing dowm"/>
                            </div>
                    </div>
                </div>
            </section>
        </main>
    )
}