import MobileNavLink from './MobileNavLink'

export default function SideNav(props) {

    const { navMenuOpen, setNavMenuOpen, showAndDisableSideNav, handleNavItemClick, scrollToSection, activeNavItem, setActiveNavItem, setSelectedSection, setActiveFullScreenImg } = props

    function closeNavMenu() {
        setNavMenuOpen(false)
    }

    return (
        <div className="mobile_nav_container" onClick={closeNavMenu}>
            <div className="mobile_nav">
                <ul>
                    <MobileNavLink
                        to='/'
                        sectionId={'above_fold'}
                        activeNavItem={activeNavItem}
                        setActiveNavItem={setActiveNavItem}
                        setSelectedSection={setSelectedSection}
                        handleNavItemClick={handleNavItemClick}
                        setActiveFullScreenImg={setActiveFullScreenImg}
                        navIndex={0}
                    >
                        <li className={`${activeNavItem === 0 ? 'active' : ''}`}>
                            <p>home</p>
                            <i className="nav_arrow right"></i>
                        </li>
                    </MobileNavLink>
                    <MobileNavLink
                        to='/'
                        sectionId={'project_section'}
                        activeNavItem={activeNavItem}
                        setActiveNavItem={setActiveNavItem}
                        setSelectedSection={setSelectedSection}
                        handleNavItemClick={handleNavItemClick}
                        setActiveFullScreenImg={setActiveFullScreenImg}
                        navIndex={1}
                    >
                        <li className={`${activeNavItem === 1 ? 'active' : ''}`}>
                            <p>projects</p>
                            <i className="nav_arrow right"></i>
                        </li>
                    </MobileNavLink>
                    <MobileNavLink
                        to='/'
                        sectionId={'about_section'}
                        activeNavItem={activeNavItem}
                        setActiveNavItem={setActiveNavItem}
                        setSelectedSection={setSelectedSection}
                        handleNavItemClick={handleNavItemClick}
                        setActiveFullScreenImg={setActiveFullScreenImg}
                        navIndex={2}
                    >
                        <li className={`${activeNavItem === 2 ? 'active' : ''}`}>
                            <p>about me</p>
                            <i className="nav_arrow right"></i>
                        </li>
                    </MobileNavLink>
                    <a className="m_nav_item" href="https://www.linkedin.com/in/hirekevinrogers/" target="_blank"><li><p>LinkedIn</p><i className="nav_arrow right"></i></li></a>
                    <a className="m_nav_item" href="https://github.com/kevrog21" target="_blank"><li><p>github</p><i className="nav_arrow right"></i></li></a>
                    <a className="m_nav_item" href="https://dribbble.com/Kevrog" target="_blank"><li><p>dribbble</p><i className="nav_arrow right"></i></li></a>
                    <a className="m_nav_item email_el" href="#"><li><p>contact</p><i className="nav_arrow right"></i></li></a>
                </ul>
            </div>
        </div>
    )
}