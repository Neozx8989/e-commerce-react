import React from 'react'
import SubMenu from './SubMenu'
import menus from '../data/menus'


export default function MainMenu(){

    

    const subMenus = menus.map(subMenu => {
        return(
            <div className='nav-menus'>
                <SubMenu title={subMenu.title} position={subMenu.position} children={subMenu.children} />
            </div>
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

