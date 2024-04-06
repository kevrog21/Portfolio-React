import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import SideNav from './SideNav'

export default function Header(props) {

    const { scrollToSection, selectedSection, setSelectedSection, activeNavItem, setActiveNavItem, setActiveFullScreenImg } = props

    const [navMenuOpen, setNavMenuOpen] = useState(false)
    
    const location = useLocation()

    function showAndDisableSideNav() {
        const container = document.querySelector('.mobile_nav_container')
        const navMenu = document.querySelector('.mobile_nav')
        const mainEl = document.querySelector('main')

        if (container) {
            if (navMenuOpen) {
                container.classList.add('show')
                navMenu.classList.add('slide')
                mainEl.classList.add('disable-pointer-events')
                document.body.style.overflow = 'hidden'
                
            } else {
                container.classList.remove('show')
                navMenu.classList.remove('slide')
                mainEl.classList.remove('disable-pointer-events')
                document.body.style.overflow = 'auto'
            }
        }
    }

    const NavLinkToHome = ({ to, sectionId, title, navIndex, children }) => {
        return (
            location.pathname !== '/' ?
                <NavLink 
                    to={to}
                    className={`nav_item ${activeNavItem === navIndex ? 'active' : ''}`}
                    onClick={() => {
                        setActiveNavItem(navIndex)
                        setSelectedSection(sectionId)
                    }}
                >
                    {title}
                </NavLink>
                :
                <a 
                    className={`nav_item ${activeNavItem === navIndex ? 'active' : ''}`}
                    onClick={() => {
                        handleNavItemClick(sectionId)
                        setActiveNavItem(navIndex)
                        setSelectedSection(sectionId)
                    }}>{title}</a>
        )
    }

    const handleNavItemClick = (sectionId) => {
        if (location.pathname !== '/') {
            window.location.href = '/'
            scrollToSection(sectionId)
        }
        scrollToSection(sectionId)
        setNavMenuOpen(false)
    }

    const handleNavLogoClick = () => {
        setActiveNavItem(0)
        setSelectedSection('above_fold')
        setActiveFullScreenImg(false)
    }

    useEffect(() => {
        showAndDisableSideNav()
    }, [navMenuOpen])

    const handleMenuToggle = () => {
        setNavMenuOpen((prevIsNavMenuOpen) => !prevIsNavMenuOpen)
    }

    return (
        <div>
            <header className="bkgd_tertiary">
                <div className="content_wrapper flex nav">
                    <Link to='/' onClick={handleNavLogoClick}>
                        <svg className="nav_logo">
                            <use href="#kevrog_logo"></use>
                        </svg>
                    </Link>
                    <h2 className="nav_name">KEVIN ROGERS</h2>
                    <nav id="intro_nav">
                        <ul id="nav_links">
                            <li>
                                <NavLinkToHome
                                    to='/'
                                    sectionId={'above_fold'}
                                    activeNavItem={activeNavItem}
                                    setActiveNavItem={setActiveNavItem}
                                    navIndex={0}
                                    title={'home'}
                                ></NavLinkToHome>
                            </li>
                            <li>
                                <NavLinkToHome
                                    to='/'
                                    sectionId={'project_section'}
                                    activeNavItem={activeNavItem}
                                    setActiveNavItem={setActiveNavItem}
                                    navIndex={1}
                                    title={'projects'}
                                ></NavLinkToHome>
                            </li>
                            <li>
                                <NavLinkToHome
                                        to='/'
                                        sectionId={'about_section'}
                                        activeNavItem={activeNavItem}
                                        setActiveNavItem={setActiveNavItem}
                                        navIndex={2}
                                        title={'about me'}
                                    ></NavLinkToHome>
                            </li>
                        </ul>
                    </nav>
                    <div className={`hamburger_div ${navMenuOpen && 'rotate'}`} onClick={handleMenuToggle}>
                        <div className={`hamburger_lines`}></div>
                    </div>
                </div>
            </header>
            <SideNav 
                navMenuOpen={navMenuOpen}
                setNavMenuOpen={setNavMenuOpen}
                showAndDisableSideNav={showAndDisableSideNav}
                handleNavItemClick={handleNavItemClick}
                scrollToSection={scrollToSection}
                activeNavItem={activeNavItem}
                setActiveNavItem={setActiveNavItem}
                NavLinkToHome={NavLinkToHome}
                setSelectedSection={setSelectedSection}
                setActiveFullScreenImg={setActiveFullScreenImg}
            />
        </div>
    )
}