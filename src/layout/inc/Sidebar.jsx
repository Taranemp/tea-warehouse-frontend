import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useState } from "react";
import { getNavigationItems } from "../../routes/privateRoutes.js";
import LogoutModal from "../../components/LogoutModal.jsx";

export default function Sidebar() {
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const menuItems = getNavigationItems();

    const getNavLinkClass = ({ isActive }) => {
        return `btn hover-btn text-start w-100 my-1 ${isActive ? 'hover-btn-active' : ''}`;
    };

    return (
        <div className='d-flex flex-column justify-content-between align-items-start h-100'>
            <div className="mr-auto d-flex flex-column w-100">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        className={getNavLinkClass}
                        to={item.path}
                        end={item.end}
                    >
                        <i className={`bi ${item.icon} me-2 h6`}></i>
                        {item.label}
                    </NavLink>
                ))}
            </div>
            <Button variant='warning' size='sm' className='w-100' onClick={() => setShowLogoutModal(true)}>
                Logout
            </Button>
            <LogoutModal show={showLogoutModal} onHide={() => setShowLogoutModal(false)} />
        </div>
    );
}