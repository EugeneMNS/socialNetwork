import React from "react";
import s from "./Sidebar.module.css";
import {SidebarType} from "../../redux/sidebar-reducer";

type AllSidebarPropsType = {
    sidebar: SidebarType
}

export const AllSidebar: React.FC<AllSidebarPropsType> = React.memo((props) => {
    const sidebarItems = props.sidebar.friends.map(i => <Sidebar key={i.id} name={i.name} src={i.src}/>)
    return <div>{sidebarItems}</div>


})

type SidebarPropsType = {
    src: string
    name: string
}

const Sidebar: React.FC<SidebarPropsType> = React.memo(({src, name}) => {
    return <div className={s.friend}>

        <img src={src}/>
        <div>{name}</div>
    </div>
})