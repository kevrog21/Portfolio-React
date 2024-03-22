

export default function Header() {
    return (
        <header className="bkgd_tertiary">
			<div className="content_wrapper flex nav">
				<svg className="nav_logo">
						<use href="#kevrog_logo"></use>
					</svg>
				<h2 className="nav_name">KEVIN ROGERS</h2>
				<nav id="intro_nav">
					<ul id="nav_links">
						<li><a className="nav_item" href="#top">home</a></li>
						<li><a className="nav_item" href="#project_section">projects</a></li>
						<li><a className="nav_item" href="#about_section">about me</a></li>
					</ul>
				</nav>
				<div className="hamburger_div">
					<div className="hamburger_lines"></div>
				</div>
			</div>
		</header>
    )
}