import { NavLink, useLocation } from 'react-router-dom'

export default function MobileNavLink({ to, sectionId, navIndex, setActiveNavItem, setSelectedSection, handleNavItemClick, children }) {

    const location = useLocation()

    return (
        location.pathname !== '/' ?
                <NavLink 
                    to={to}
                    className="m_nav_item"
                    onClick={() => {
                        console.log(sectionId, 'was clicked')
                        setActiveNavItem(navIndex)
                        setSelectedSection(sectionId)
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