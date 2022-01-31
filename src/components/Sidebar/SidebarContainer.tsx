import React from "react";

import {SidebarType} from "../../redux/sidebar-reducer";
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import { AllSidebar } from "./Sidebar";


type MapStateToPropsType = {
    sidebar: SidebarType
}
const MapStateToProps = (state: AppStateType): MapStateToPropsType  => {
    return {
        sidebar: state.sidebar
    }
}


export const SidebarContainer = connect<MapStateToPropsType, {}, {}, AppStateType>(MapStateToProps)(AllSidebar)