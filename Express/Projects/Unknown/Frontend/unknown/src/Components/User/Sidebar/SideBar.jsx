/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './sidebar.css'
import Dashboard from '../Dashboard/Dashboard';
import { IoPersonSharp, IoSearch } from "react-icons/io5";
import { logoutUser } from '../../../Redux/UserRedux';
import { useDispatch } from 'react-redux';
import Notification from '../Notification/Notification';
import Profile from '../Profile/Profile';
import Chat from '../../Chat/Chat';
import Users from '../Allusers/Users';


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
        profile: <Profile />,
        notification: <Notification />,
        users:<Users/>,
        chats:<Chat/>

    };

    return (
        <div>
            <section>
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
                                    <a href="#dashboard">
                                        <i className='bx bx-home-alt icon' ></i>
                                        <span className="text nav-text">Dashboard</span>
                                    </a>
                                </li>

                                <li className={`nav-link ${activePage === 'notification' ? 'active' : ''}`} onClick={() => { setActivePage('notification'); closeSidebar(); }}>
                                    <a href="#notification">
                                        <i className='bx bx-bell icon'></i>
                                        <span className="text nav-text">Notifications</span>
                                    </a>
                                </li>

                                <li className={`nav-link ${activePage === 'users' ? 'active' : ''}`} onClick={() => { setActivePage('users'); closeSidebar(); }}>
                                    <a href="#users">
                                        <i className='bx bx-group icon' ></i>
                                        <span className="text nav-text">Users</span>
                                    </a>
                                </li>

                                <li className={`nav-link ${activePage === 'chats' ? 'active' : ''}`} onClick={() => { setActivePage('chats'); closeSidebar(); }}>
                                    <a href="#chats">
                                        <i className='bx bx-chat icon' ></i>
                                        <span className="text nav-text">Chats</span>
                                    </a>
                                </li>

                                <li className="nav-link" onClick={closeSidebar}>
                                    <a href="#revenue">
                                        <i className='bx bx-bar-chart-alt-2 icon' ></i>
                                        <span className="text nav-text">Revenue</span>
                                    </a>
                                </li>

                                <li className="nav-link" onClick={closeSidebar}>
                                    <a href="#analytics">
                                        <i className='bx bx-pie-chart-alt icon' ></i>
                                        <span className="text nav-text">Analytics</span>
                                    </a>
                                </li>

                                <li className="nav-link" onClick={closeSidebar}>
                                    <a href="#likes">
                                        <i className='bx bx-heart icon' ></i>
                                        <span className="text nav-text">Likes</span>
                                    </a>
                                </li>

                                <li className="nav-link" onClick={closeSidebar}>
                                    <a href="#wallet">
                                        <i className='bx bx-wallet icon' ></i>
                                        <span className="text nav-text">Wallets</span>
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className="bottom-content">
                            <li className="" onClick={handleLogout}>
                                <a href="#logout">
                                    <i className='bx bx-log-out icon' ></i>
                                    <span className="text nav-text">Logout</span>
                                </a>
                            </li>
                        </div>
                    </div>
                </nav>

                <section className="home" >
                    <>
                        <div className='navbar-container'>
                            <div className='navbar-header'>
                                <h1>Unknown</h1>
                            </div>
                            {/* <div className='navbar-search'>
                                <input type="text" />
                                <IoSearch />
                            </div> */}
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
            </section>
        </div>
    );
};

export default SideBar;
