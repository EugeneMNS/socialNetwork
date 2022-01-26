import React from "react";
import s from "../Sidebar/Sidebar.module.css"

type SidebarPropsType={
    name: string,
    src: string
}
export const SidebarUser: React.FC<SidebarPropsType>=React.memo(({name, src})=>{
return <div className={s.friend}>
    <img src={src}/>
    <div>{name}</div>
</div>
})