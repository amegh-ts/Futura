import React, { useState } from 'react';
import './sidebar.css'
import Dashboard from '../Dashboard/Dashboard';
import { IoPersonSharp, IoSearch } from "react-icons/io5";
import { logoutUser } from '../../Redux/UserRedux';
import { useDispatch } from 'react-redux';
import Profile from '../Profile/Profile';


const SideBar = () => {
    const [isSidebarClosed, setSidebarClosed] = useState(true);
    const [activePage, setActivePage] = useState('dashboard');
    const dispatch = useDispatch()

    const toggleSidebar = () => {
        setSidebarClosed(!isSidebarClosed);
    };

    const closeSidebar = () => {
        setSidebarClosed(true);
    };

    const handleLogout = () => {
        dispatch(logoutUser())
    };

    const pageComponents = {
        dashboard: <Dashboard />,
        profile: <Profile />
    };

    return (
        <div>
            <body>
                <nav className={`sidebar ${isSidebarClosed ? 'close' : ''}`}>
                    <header>
                        <div className="image-text">
                            <span className="image">
                                <img src="logo.png" alt="" onClick={toggleSidebar} />
                            </span>

                            <div className="text logo-text">
                                <span className="name">Unknown</span>
                                <span className="profession">WebSite</span>
                            </div>
                        </div>

                    </header>

                    <div className="menu-bar">
                        <div className="menu">

                            {/* <li className="search-box">
                                    <i className='bx bx-search icon'></i>
                                    <input type="text" placeholder="Search..." />
                                </li> */}

                            <ul className="menu-links">
                                <li className={`nav-link ${activePage === 'dashboard' ? 'active' : ''}`} onClick={() => { setActivePage('dashboard'); closeSidebar(); }}>
                                    <a href="#">
                                        <i className='bx bx-home-alt icon' ></i>
                                        <span className="text nav-text">Dashboard</span>
                                    </a>
                                </li>

                                <li className="nav-link" onClick={closeSidebar}>
                                    <a href="#">
                                        <i className='bx bx-bar-chart-alt-2 icon' ></i>
                                        <span className="text nav-text">Revenue</span>
                                    </a>
                                </li>

                                <li className="nav-link" onClick={closeSidebar}>
                                    <a href="#">
                                        <i className='bx bx-bell icon'></i>
                                        <span className="text nav-text">Notifications</span>
                                    </a>
                                </li>

                                <li className="nav-link" onClick={closeSidebar}>
                                    <a href="#">
                                        <i className='bx bx-pie-chart-alt icon' ></i>
                                        <span className="text nav-text">Analytics</span>
                                    </a>
                                </li>

                                <li className="nav-link" onClick={closeSidebar}>
                                    <a href="#">
                                        <i className='bx bx-heart icon' ></i>
                                        <span className="text nav-text">Likes</span>
                                    </a>
                                </li>

                                <li className="nav-link" onClick={closeSidebar}>
                                    <a href="#">
                                        <i className='bx bx-wallet icon' ></i>
                                        <span className="text nav-text">Wallets</span>
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className="bottom-content">
                            <li className="" onClick={handleLogout}>
                                <a href="#">
                                    <i className='bx bx-log-out icon' ></i>
                                    <span className="text nav-text">Logout</span>
                                </a>
                            </li>
                        </div>
                    </div>
                </nav>

                <section className="home" >
                    <>
                        <div className='navbar-containe'>
                            <div className='navbar-header'>
                                <h1>Unknown</h1>
                            </div>
                            <div className='navbar-search'>
                                <input type="text" />
                                <IoSearch />
                            </div>
                            <div className={`navbar-icon ${activePage === 'profile' ? 'active' : ''}`} onClick={() => { setActivePage('profile'); closeSidebar(); }}>
                                <span>
                                    <IoPersonSharp />
                                </span>
                            </div>
                        </div>
                    </>
                    <div className={'main-body'} onClick={closeSidebar}>
                        {/* <Dashboard /> */}
                        {pageComponents[activePage]}
                    </div>
                </section>
            </body>
        </div>
    );
};

export default SideBar;
