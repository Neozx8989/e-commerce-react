import React from 'react'
import SubMenu from './SubMenu'
import Navbar from 'react-bootstrap/Navbar'
import menus from '../data/menus'
import BrowseCategories from './BrowseCategories'

export default function MainMenu(){

    const subMenus = menus.map(subMenu => {
        return(
            <SubMenu title={subMenu.title} position={subMenu.position} children={subMenu.children} />
        )
    })

    return(
        <div>
            <Navbar className="navbar-body">
                <BrowseCategories />
                    {subMenus} 
                <div className='free'>30 Days Free Return</div>
            </Navbar>
        </div>
    )
}

