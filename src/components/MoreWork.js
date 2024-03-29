import BackButton from './BackButton'
import backArrow from '../media/back_arrow.svg'
import downArrows from '../media/arrows_down_orange.svg'
import bathroomLavendarArt from '../media/more_work/bathroom_lavender_art.jpg'
import bathroomArtCloseUp from '../media/more_work/bathroom_art_close_up.jpg'

import cactiMockup from '../media/more_work/cacti_mockup.jpg'

import cakePopMockupBlue from '../media/more_work/cake_pop_mockup_blue.jpg'

import watercolorBathArt from '../media/more_work/watercolor_bath4.jpg'

import eurostileMockup from '../media/more_work/Eurostile_cover.jpg'

import drumsetSvg from '../media/more_work/technical_rendering_color.gif'

import fantasyFootball from '../media/more_work/fantasy_footbal_mockup.jpg'

import mandalaShirt from '../media/more_work/01_Front.jpg'

import beeArt from '../media/more_work/lizzie_bee2.png'

import cabinArt from '../media/more_work/perspective_project.jpg'
import { useEffect } from 'react'

export default function MoreWork(props) {

	const { setActiveNavItem, handleImgClick } = props

	useEffect(() => {
		setActiveNavItem(1)
	}, [])

    return (
        <main>
			<div className="above_fold_wrapper">
				<div className="project_wrapper flex">
					<div className="overview_content" id="project_grid">

						<div className="project_body">
							<BackButton />
								<p className="mw_title">More Work</p>
								<p className="mw_intro_text">Here's some work that's a little less relevant to my current projects, but were important to my design journey.</p>
								
							<div className="mw_image_grid">
								<div className="mw_image_wrapper">
									<img src={bathroomLavendarArt} onClick={handleImgClick} alt="" className="mw_column_image"/>
								</div>
								<div className="mw_insight_wrapper">
									<div className="close_btn">
									</div>
									<div className="mw_hero_card">
										<div className="mw_hero_img_wrapper">
											<img className="mw_hero_img " src={bathroomArtCloseUp} alt=""/>
										</div>
										<p>I was commissioned to create this artwork for a recently rennovated bathroom. It's a composite of several different images that I combined into one cohesive piece using adobe illustrator and photoshop.</p>
									</div>
									<div className="mw_insight_img_wrapper">
										<img data-src="" src="../media/more_work/lavender1.jpg" className="mw_insight_img" alt=""/>
									</div>
									<div className="mw_insight_img_wrapper">
										<img data-src="" src="../media/more_work/lavender2.jpg" className="mw_insight_img" alt=""/>
									</div>
									<div className="mw_insight_img_wrapper">
										<img data-src="" src="../media/more_work/lavender3.jpg" className="mw_insight_img" alt=""/>
									</div>
								</div>
								<div className="mw_image_wrapper">
									<img src={cactiMockup} onClick={handleImgClick} alt="" className="mw_column_image"/>
								</div>
								<div className="mw_insight_wrapper">
									<div className="close_btn">
									</div>
									<div className="mw_hero_card">
										<div className="mw_hero_img_wrapper">
											<img className="mw_hero_img " src="../media/more_work/cacti_mockup.jpg" alt=""/>
										</div>
										<p>This was piece that I created for fun after moving into my new apartment in Phoenix. I wanted something colorful with an Arizona spin.</p>
									</div>
									<div className="mw_insight_img_wrapper">
										<img data-src="" src="../media/more_work/cacti_mockup_blue.jpg" className="mw_insight_img" alt=""/>
									</div>
								</div>
								<div className="mw_image_wrapper">
									<img src={cakePopMockupBlue} onClick={handleImgClick} alt="" className="mw_column_image"/>
								</div>
								<div className="mw_insight_wrapper">
									<div className="close_btn">
									</div>
									<div className="mw_hero_card">
										<div className="mw_hero_img_wrapper">
											<img className="mw_hero_img " src="../media/more_work/cake_pop_mockup_blue.jpg" alt=""/>
										</div>
										<p>This is my “Cake Pop Planet” project from my indesign class. The assignment was to create a fictional business and to design a multi-fold, print-ready pamphlet for that business.</p>
									</div>
									<div className="mw_insight_img_wrapper">
										<img data-src="" src="../media/more_work/cake_pop_planet.jpg" className="mw_insight_img" alt=""/>
									</div>
								</div>
								<div className="mw_image_wrapper">
									<img src={watercolorBathArt} onClick={handleImgClick} alt="" className="mw_column_image"/>
								</div>
								<div className="mw_insight_wrapper">
									<div className="close_btn">
									</div>
									<div className="mw_hero_card">
										<div className="mw_hero_img_wrapper">
											<img className="mw_hero_img " src="../media/more_work/watercolor_bath4.jpg" alt=""/>
										</div>
										<p>This was a commissioned piece that I made for a family member. This piece was created in photoshop with custom brushes that I made to mimic the look of water color. I also used blend modes to make it look like it's textured paper.</p>
									</div>
									<div className="mw_insight_img_wrapper">
										<img data-src="" src="../media/more_work/bathtub_art.jpg" className="mw_insight_img" alt=""/>
									</div>
									<div className="mw_insight_img_wrapper">
										<img data-src="" src="../media/more_work/shower_art2.jpg" className="mw_insight_img" alt=""/>
									</div>
									<div className="mw_insight_img_wrapper">
										<img data-src="" src="../media/more_work/Sink_art.jpg" className="mw_insight_img" alt=""/>
									</div>
								</div>
								<div className="mw_image_wrapper">
									<img src={eurostileMockup} onClick={handleImgClick} alt="" className="mw_column_image"/>
								</div>
								<div className="mw_insight_wrapper">
									<div className="close_btn">
									</div>
									<div className="mw_hero_card">
										<div className="mw_hero_img_wrapper">
											<img className="mw_hero_img " src="../media/more_work/Eurostile_cover.jpg" alt=""/>
										</div>
										<p>This is my Eurostile typeface project for my typography class. We were assigned a typeface and had to create a 20 page booklet in InDesign to educate our classmates about the font.</p>
									</div>
									<div className="mw_insight_img_wrapper">
										
									</div>
								</div>
								<div className="mw_image_wrapper">
									<img src={drumsetSvg} onClick={handleImgClick} alt="" className="mw_column_image"/>
								</div>
								<div className="mw_insight_wrapper">
									<div className="close_btn">
									</div>
									<div className="mw_hero_card">
										<div className="mw_hero_img_wrapper">
											<img className="mw_hero_img drum_background" src="../media/more_work/drum_vector_drawing_color.svg" alt=""/>
										</div>
										<p>This is a vector drawing I made for my illustrator class (since it's a vector graphic, you can zoom in as much as you want and it won't get pixelated). I created it in adobe illustrator and it took forever, but it was great practice in gradients and getting familiar with the illustrator interface.</p>
									</div>
									<div className="mw_insight_img_wrapper">
										<img src="../media/more_work/drumset_vector_drawing_outline.svg" alt="" className="drum_background"/>
									</div>
								</div>
								<div className="mw_image_wrapper">
									<img src={fantasyFootball} onClick={handleImgClick} alt="" className="mw_column_image"/>
								</div>
								<div className="mw_insight_wrapper">
									<div className="close_btn">
									</div>
									<div className="mw_hero_card">
										<div className="mw_hero_img_wrapper">
											<img className="mw_hero_img " src="../media/more_work/fantasy_footbal_mockup.jpg" alt=""/>
										</div>
										<p>This is a project from my InDesign class. We were instructed to pick a topic of interest and create an informational handbook on that topic.</p>
									</div>
									<div className="mw_insight_img_wrapper">
										<img data-src="" src="../media/more_work/fantasy_football_booklet.jpg" className="mw_insight_img" alt=""/>
									</div>
									<div className="mw_insight_img_wrapper">
										<img data-src="" src="../media/more_work/fantasy_football_booklet1.jpg" className="mw_insight_img" alt=""/>
									</div>
									<div className="mw_insight_img_wrapper">
										<img data-src="" src="../media/more_work/fantasy_football_booklet2.jpg" className="mw_insight_img" alt=""/>
									</div>
								</div>
								<div className="mw_image_wrapper">
									<img src={mandalaShirt} onClick={handleImgClick} alt="" className="mw_column_image"/>
								</div>
								<div className="mw_insight_wrapper">
									<div className="close_btn">
									</div>
									<div className="mw_hero_card">
										<div className="mw_hero_img_wrapper">
											<img className="mw_hero_img " src="../media/more_work/01_Front.jpg" alt=""/>
										</div>
										<p>This is a project from my illustrator class. It was one of the first projects from back when we were learning the basics like how to use the rotate tool. We were assigned to make a mandala design and I liked it so much that I mocked it up on a t-shirt!</p>
									</div>
									<div className="mw_insight_img_wrapper">
										<img data-src="" src="../media/more_work/01_Back.jpg" className="mw_insight_img" alt=""/>
									</div>
								</div>
								<div className="mw_image_wrapper">
									<img src={beeArt} onClick={handleImgClick} alt="" className="mw_column_image"/>
								</div>
								<div className="mw_insight_wrapper">
									<div className="close_btn">
									</div>
									<div className="mw_hero_card">
										<div className="mw_hero_img_wrapper">
											<img className="mw_hero_img " src="../media/more_work/lizzie_bee2.png" alt=""/>
										</div>
										<p>This was a project from my indesign class. We were studying how to properly use frames and place images in our documents. My project features a bunch of bees chowing down on some pollen. The bees generally get bigger moving left to right and end up getting so chubby that that last bee can't fit in its frame!</p>
									</div>
									<div className="mw_insight_img_wrapper">
										
									</div>
								</div>
								<div className="mw_image_wrapper">
									<img src={cabinArt} onClick={handleImgClick} alt="" className="mw_column_image"/>
								</div>
								<div className="mw_insight_wrapper">
									<div className="close_btn">
									</div>
									<div className="mw_hero_card">
										<div className="mw_hero_img_wrapper">
											<img className="mw_hero_img " src="../media/more_work/perspective_project.jpg" alt=""/>
										</div>
										<p>I drew this illustration for my illustrator class to practice using the perspective tool.</p>
									</div>
									<div className="mw_insight_img_wrapper">
										
									</div>
								</div>
								
							{<img src="../media/more_work/Negative_Space_Cauldron.png" alt="" className="mw_image" />}
								
							
								
								
								
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