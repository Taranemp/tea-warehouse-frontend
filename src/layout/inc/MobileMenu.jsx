import { NavLink } from 'react-router-dom';
import { getNavigationItems } from "../../routes/privateRoutes.js";

export default function MobileMenu() {
    const menuItems = getNavigationItems();

    const getNavLinkClass = ({ isActive }) => {
        return `btn hover-btn text-start w-100 my-1 ${isActive ? 'text-primary' : ''}`;
    };

    return (
        <div className='position-fixed bottom-0'>
            <div className="d-flex flex-row">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        className={getNavLinkClass}
                        to={item.path}
                        end={item.end}
                    >
                        <div className='d-flex flex-column justify-content-center text-center'>
                            <i className={`bi ${item.icon} h2 fw-bold`}></i>
                            {item.label}
                        </div>
                    </NavLink>
                ))}
            </div>

        </div>
    );
}
