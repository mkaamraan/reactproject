import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import './Navbar.css';
import { IconContext } from 'react-icons'
import logo from "../Images/logo.png"


function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (

        < >
            <IconContext.Provider value={{ color: 'white' }} >

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{ backgroundColor: 'white' }}>

                    <div style={{ position: 'absolute', left: 0, height: '100%', width: '10%', backgroundColor: '#677ff3' }}>

                        <div style={{ backgroundColor: 'black', height: '90px' }}>
                            <img src={logo} alt="logo image not loading" height={90} width={95} />
                        </div>

                        <div style={{ backgroundColor: '#677ff3' }}>
                            <p style={{ position: 'center', color: 'white', top: 0 }}> <b>MENU</b> </p>
                            <Link to="#" className='menu-bars' style={{ position: 'center' }}>
                                <FaIcons.FaBars onClick={showSidebar} />
                            </Link>
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName} >
                                        <Link to={item.path}>
                                            {item.icon}
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </div>

                        {/* <div className="navbar-toggle" >
                            <Link to="#" className='menu-bars' >
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </div> */}


                    </div>


                </nav>

            </IconContext.Provider>
        </>

    )
}

export default Navbar