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
        <div className='navigation-menus'>
           <div className='categories'>
            
                <select>
                    <option> Browse categories </option>
                    <option>apple</option>
                    <option>samsung</option>
                    <option>huawei</option>
                    <option>canon</option>
                </select>
            </div>
           <div className='menu-items'>{subMenus}</div>    
           <p className='free'>30 Days Free Return</p>
        </div>
    )
}

