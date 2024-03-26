

export default function SideNav(props) {

    const { navMenuOpen, setNavMenuOpen, showAndDisableSideNav, handleNavItemClick, scrollToSection } = props

    function closeNavMenu() {
        setNavMenuOpen(false)
    }

    return (
        <div className="mobile_nav_container" onClick={closeNavMenu}>
            <div className="mobile_nav">
                <ul>
                    <a className="border_top m_nav_item" onClick={() => scrollToSection('above_fold')}><li><p>home</p><i className="nav_arrow right"></i></li></a>
                    <a className="m_nav_item" onClick={() => scrollToSection('project_section')}><li><p>projects</p><i className="nav_arrow right"></i></li></a>
                    <a className="m_nav_item" onClick={() => scrollToSection('about_section')}><li><p>about me</p><i className="nav_arrow right"></i></li></a>
                    <a className="m_nav_item" href="https://www.linkedin.com/in/hirekevinrogers/" target="_blank"><li><p>LinkedIn</p><i className="nav_arrow right"></i></li></a>
                    <a className="m_nav_item" href="https://github.com/kevrog21" target="_blank"><li><p>github</p><i className="nav_arrow right"></i></li></a>
                    <a className="m_nav_item" href="https://dribbble.com/Kevrog" target="_blank"><li><p>dribbble</p><i className="nav_arrow right"></i></li></a>
                    <a className="m_nav_item email_el" href="#"><li><p>contact</p><i className="nav_arrow right"></i></li></a>
                </ul>
            </div>
        </div>
    )
}