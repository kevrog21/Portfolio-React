import { Link } from 'react-router-dom'
import backArrow from '../media/back_arrow.svg'
import posterMockup from '../media/jazz_poster_mockup_red.jpg'
import isolatedPoster from '../media/concert_poster_isolated.svg'
import displayType from '../media/poster_display_type_black.svg'
import heroInstruments from '../media/poster_hero_instruments.png'
import conertProgram from '../media/Jazz_Concert_Program_white.jpg'
import posterThreeColors from '../media/concert_poster_3colors.jpg'
import alternatePoster from '../media/alternate_poster_design.svg'
import downArrows from '../media/arrows_down_orange.svg'

export default function Poster() {
    return (
        <main>
			<div class="above_fold_wrapper">
                <div class="project_wrapper flex">
                    <div class="overview_content" id="project_grid">

                        <div class="project_body">
                            <div class="back_button">
                                <a href="javascript:history.back()"><img src={backArrow} alt="back arrow"/></a>
                            </div>
                            <div class="project_heading">
                                <p>Concert Poster</p>
                            </div>
                            <div class="project_content">
                                <div class="feature_overview_container">
                                    <div  class="project_img feature_img">
                                        <img src={posterMockup} alt="Hero image for my concert poster project; It shows a jazz orchestra concert promo poster placed on a wall. The poster shows two instruments standing like superheros atop a building with a red sky and moon behind them overlayed with black text that says A Night at The Movies. The main hero is a cello with a piano-key cape."/>
                                    </div>
                                    <div class="project_overview">
                                        <div class="overview_title">
                                        Overview
                                        </div>
                                        <p>I created this poster for my college's Jazz Orchestra to promote their Spring 2020 concert. My objective was to create a monochromatic design that portrayed the theme of the concert which was "A Night at the Movies".</p>
                                        <p>I was inspired to include the superhero theme in my design because the band was performing songs from movies like <i>The Incredibles</i>, <i>James Bond</i>, <i>Spiderman</i>, and other blockbuster films. Since the poster was promoting such a fun event, it was a great opportunity to create a playful design. The result is the design you see here of two jazz orchestra instruments posing like superheroes atop a building – ready to save the day with their awesome tunes.</p>
                                    </div>
                                </div>
                                <div class="project_img insight_img medium_img img_left">
                                    <img src={isolatedPoster} alt="an isolated vector image of the poster"/>
                                </div>

                                <div class="project_insight insight_right tall_img">
                                    <div class="insight_title">
                                    1
                                    </div>
                                    <p>This project required careful consideration of typography because there was a lot of text to include so I had to be careful not to overwhelm the viewer.</p>
                                </div>

                                <div class="project_img insight_img img_no_border zoom_background_light img_right">
                                    <img src={displayType} alt="an isolated image of the font I used for the poster. It is a bold funky looking font called Gill Sans Ultra Bold."/>
                                </div>

                                <div class="project_insight">
                                    <div class="insight_title">
                                    2
                                    </div>
                                    <p>I used the typeface Gill Sans Ultra Bold for the display type because it's fun &amp; funky like the music of the performance. I paired it with Phosphate Solid for the text type because it's light and condensed so it's not too visually heavy when used for the big chunk of text.</p>
                                </div>

                                <div class="project_img insight_img img_no_border zoom_background_light img_left">
                                    <img src={heroInstruments} alt="an isolated vector image of the two hero instruments, a cello and a saxaphone."/>
                                </div>

                                <div class="project_insight insight_right">
                                    <div class="insight_title testing3">
                                    3
                                    </div>
                                    <p>It was a challenge to create characters that were simultaneously instruments and superheroes, and to create them using an art style that was new to me. In the end I accomplished my goal using adobe illustrator to tweak and compare my character designs as they progressed.</p>
                                </div>

                                <div class="project_img insight_img img_right">
                                    <img src={conertProgram} alt="an image of the program that would be handed out at the concert."/>
                                </div>

                                <div class="project_insight">
                                    <div class="insight_title">
                                    4
                                    </div>
                                    <p>Unfortunately, the concert was canceled because of COVID, but if it were to happen, this would have been the program to compliment the poster. The spotlight shows the music departments logo.</p>
                                </div>

                                <div class="project_img insight_img img_left">
                                    <img src={posterThreeColors} alt="an image of the poster in three different colors - yellow red and blue."/>
                                </div>

                                <div class="project_insight insight_right">
                                    <div class="insight_title">
                                    5
                                    </div>
                                    <p>Experimenting with different colors. I liked the dramatic feel of the red. It almost feels like it's saying the town is in peril and needs saving.</p>
                                </div>

                                <div class="project_img insight_img medium_img zoom_background_light img_right">
                                    <img src={alternatePoster} alt="an image of an alternate poster design; a black poster with 5 pink spotlights and instrument silhouettes in each spotlight."/>
                                </div>

                                <div class="project_insight tall_img">
                                    <div class="insight_title">
                                    6
                                    </div>
                                    <p>I also made an alternative design for the client, but the superhero design was unanimously chosen as the favorite.</p>
                                </div>

                                <div class="more_work">
                                    <div class="more_work_title">
                                    More Work
                                    </div>
                                    <div class="project_select">
                                        <Link to='/chores-app' class="more_work_left">
                                            <img src={backArrow} alt="back arrow"/>
                                            <p>Chores <br/>App</p>
                                        </Link>
                                        <Link to='/chewybrew' class="more_work_right">
                                            <img src={backArrow} alt="next arrow"/>
                                            <p>Chewy <br/>Brew <br/>Co.</p>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="project_column_left">
                            <div class="top_vertical_line"></div>

                            <img class="downward_arrows" src={downArrows} alt="a group of arrows pointing dowm"/>
                            <img class="downward_arrows2" src={downArrows} alt="a group of arrows pointing dowm"/>

                            <div class="btm_vertical_line"></div>
                        </div>

                        <div class="column_right">

                        </div>
                    </div>
                </div>
            </div>
		</main>
    )
}