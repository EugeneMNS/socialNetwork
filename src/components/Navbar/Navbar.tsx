import React from 'react'
import { NavLink } from 'react-router-dom'
import { SidebarType} from '../../redux/state'
import  {SidebarUser} from "../Sidebar/Sidebar"
import s from './Navbar.module.css'

type NavbarPropsType = {
    state: SidebarType
}
export const Navbar: React.FC<NavbarPropsType> =React.memo( ({state}) => {

    const sidebarItems = state.friends.map(i => <SidebarUser key={i.id} name={i.name} src={i.src}/>)

    return (
        <div className={s.navbar}>
            <div className={s.blockNavlink}>
                <NavLink to='/profile' className={s.item} activeClassName={s.active} >PROFILE</NavLink>
                <NavLink to='/dialogs' className={s.item} activeClassName={s.active} >DIALOGS</NavLink>
                <NavLink to='/music' className={s.item} activeClassName={s.active} >MUSIC</NavLink>
                <NavLink to='/news' className={s.item} activeClassName={s.active} >NEWS</NavLink>

            </div>
            <div className={s.sidebar}>
                {sidebarItems}
            </div>
        </div>
    )
})
