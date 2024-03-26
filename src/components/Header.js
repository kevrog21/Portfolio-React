import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SideNav from './SideNav'

// const mobileNavItems = document.querySelectorAll(".m_nav_item")
// const hamburger = document.querySelector(".hamburger_div")
// const mobileNav = document.querySelector(".mobile_nav")

// hamburger.addEventListener("click", rotate)
// function rotate() {
// 	hamburger.classList.toggle("rotate")
// 	mobileNav.classList.toggle("slide")
// 	document.body.classList.toggle("noscroll")
// }

// mobileNavItems.forEach(item => {
// 	item.addEventListener("click", rotate)
// })

export default function Header(props) {

    const { scrollToSection } = props

    const [navMenuOpen, setNavMenuOpen] = useState(false)
    const [activeNavItem, setActiveNavItem] = useState(0)


    function showAndDisableSideNav() {
        const container = document.querySelector('.mobile_nav_container')
        const navMenu = document.querySelector('.mobile_nav')
        const mainEl = document.querySelector('main')

        if (container) {
            if (navMenuOpen) {
                container.classList.add('show')
                navMenu.classList.add('slide')
                mainEl.classList.add('disable-pointer-events')
                // document.documentElement.style.overflow = 'hidden'
                document.body.style.overflow = 'hidden'
                
            } else {
                container.classList.remove('show')
                navMenu.classList.remove('slide')
                mainEl.classList.remove('disable-pointer-events')
                // document.documentElement.style.overflow = ''
                document.body.style.overflow = 'auto'
            }
        }
    }

    useEffect(() => {
        showAndDisableSideNav()
    }, [navMenuOpen])

    const handleMenuToggle = () => {
        setNavMenuOpen((prevIsNavMenuOpen) => !prevIsNavMenuOpen)
    }

    const handleNavItemClick = () => {
        setNavMenuOpen(false)
    }

    return (
        <div>
            <header className="bkgd_tertiary">
                <div className="content_wrapper flex nav">
                    <Link to='/'>
                        <svg className="nav_logo">
                            <use href="#kevrog_logo"></use>
                        </svg>
                    </Link>
                    <h2 className="nav_name">KEVIN ROGERS</h2>
                    <nav id="intro_nav">
                        <ul id="nav_links">
                            <li>
                                <a 
                                    className={`nav_item ${activeNavItem === 0 ? 'active' : ''}`}
                                    onClick={() => {
                                        scrollToSection('above_fold')
                                        setActiveNavItem(0)
                                    }}>home</a>
                            </li>
                            <li>
                                <a 
                                    className={`nav_item ${activeNavItem === 1 ? 'active' : ''}`} 
                                    onClick={() => {
                                        scrollToSection('project_section')
                                        setActiveNavItem(1)
                                    }}>projects</a>
                            </li>
                            <li>
                                <a 
                                    className={`nav_item ${activeNavItem === 2 ? 'active' : ''}`}
                                    onClick={() => {
                                        scrollToSection('about_section')
                                        setActiveNavItem(2)
                                    }}>about me</a>
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
            />
        </div>
    )
}