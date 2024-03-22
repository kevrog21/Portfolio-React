import { ReactComponent as Sprite } from './SvgSprite.svg'

export default function Footer() {
    return (
        <footer className="bkgd_tertiary">
			<div className="footer_content content_wrapper">
				<div className="footer_socials flex">
                    <Sprite />
					<a href="https://www.linkedin.com/in/hirekevinrogers/" target="_blank">
                        <svg className="svg_icon_footer">
					        <use xlinkHref="#dribbble_icon" />
					    </svg>
                    </a>
					<a href="https://www.linkedin.com/in/hirekevinrogers/" target="_blank"><svg className="svg_icon_footer">
						<use href="#linkedin_icon"></use>
					</svg></a>
					<a href="https://github.com/kevrog21" target="_blank"><svg className="svg_icon_footer">
						<use href="#github_icon"></use>
					</svg></a>
					<a href="https://dribbble.com/Kevrog" target="_blank"><svg className="svg_icon_footer">
						<use href="#dribbble_icon"></use>
					</svg></a>
					<a href="#" className="email_el"><svg className="svg_icon_footer">
						<use href="#email_icon"></use>
					</svg></a>

				</div>
				<div className="logo">
					<a href="#top" ><svg className="logo_footer">
						<use href="#kevrog_logo"></use>
					</svg></a>
				</div>
				<div className="copyright">
					<div>
						<p>&copy; <span className="current_year"></span> Kevin Rogers</p>
					</div>
					<div>
						<a href="#" className="email_el"><p>contact me</p></a>
					</div>
				</div>
			</div> 
		</footer>
    )
}