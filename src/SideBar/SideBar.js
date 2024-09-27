import React, { useState } from "react";
import './AsideNavbar.css';
const Sidebar = () => {
    const [isHidden, setIsHidden] = useState(false);

    const toggleSidebar = () => {
        setIsHidden(!isHidden);
    };

    return (
        <div>
            {/* Toggle button to show/hide the sidebar */}
            <button onClick={toggleSidebar} className="toggle-btn">
                {isHidden ? "Open Sidebar" : "Close Sidebar"}
            </button>

            {/* Sidebar itself */}
            <div className={`sidebar ${isHidden ? "hidden" : ""}`}>
                <div className="sidebar-menu">
                    <ul>
                        <li><a href="#home"><span className="icon">🏠</span> Home</a></li>
                        <li><a href="#about"><span className="icon">ℹ️</span> About</a></li>
                        <li><a href="#services"><span className="icon">💼</span> Services</a></li>
                        <li><a href="#contact"><span className="icon">📞</span> Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
