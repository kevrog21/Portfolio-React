import { NavLink, useLocation } from 'react-router-dom'

export default function MobileNavLink({ to, sectionId, navIndex, setActiveNavItem, setSelectedSection, handleNavItemClick, setActiveFullScreenImg, children }) {

    const location = useLocation()

    return (
        location.pathname !== '/' ?
                <NavLink 
                    to={to}
                    className="m_nav_item"
                    onClick={() => {
                        setActiveNavItem(navIndex)
                        setSelectedSection(sectionId)
                        setActiveFullScreenImg(false)
                    }}
                >{children}</NavLink>
                :
                <a 
                    className="m_nav_item"
                    onClick={() => {
                        handleNavItemClick(sectionId)
                        setActiveNavItem(navIndex)
                        setSelectedSection(sectionId)
                }}>{children}</a>
    )
}