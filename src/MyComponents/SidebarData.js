import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IiIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: './Home',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },

    {
        title: 'Products',
        path: './Products',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'
    },

    {
        title: 'Reports',
        path: './Reports',
        icon: <IiIcons.IoIosPaper/>,
        cName: 'nav-text'
    }
];