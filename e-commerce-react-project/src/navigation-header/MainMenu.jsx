import React from 'react'
import {Link} from 'react-router-dom'

export default function MainMenu() {

    return (
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
                <div className='sub-menu'>
                    <Link to={'home'}>Home</Link>
                    <Link to={''}>
                        <select>
                            <option>Catalog</option>
                        </select>
                    </Link>
                    <Link to={''}>Blog</Link>
                    <Link to={''}>
                        <select>
                            <option>Pages</option>
                        </select>
                    </Link>
                    <Link to={''}>About us</Link>
                </div>
            <p className='free'>30 Days Free Return</p>
        </div>
    )
}

