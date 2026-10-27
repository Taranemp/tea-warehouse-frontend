import {useTheme} from "../ThemeProvider.jsx";
import Dropdown from 'react-bootstrap/Dropdown';
import {NavLink} from "react-router-dom";
import { useState, useEffect } from "react";
import LogoutModal from "../../components/LogoutModal.jsx";
import { useAuth } from "../../auth/AuthContextProvider.jsx";
import { apiRequest } from "../../services/apiClient.js";
import { Spinner } from 'react-bootstrap'

export default function Topbar() {
    const {theme, setTheme} = useTheme();
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const { isAuthenticated } = useAuth();


    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [profileData, setProfileData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const result = await apiRequest("GET", "profile")
                setProfileData(result)

                console.log(result);
                
                setError(null)
            } catch (err) {
                setError(err.message || "An error occurred")
                setProfileData(null)
            } finally {
                setLoading(false)
            }
        }
        
        fetchData()
    }, [])

    return (
        <div className='d-flex flex-row justify-content-between align-items-center w-100 mx-auto px-3' style={{height:'60px'}}>
            <NavLink to='/' className='d-flex flex-row justify-content-start align-items-center text-decoration-none'>
                <img src="/favicon.svg" className='topbar-logo-img img-fluid me-2' alt="teatracer-logo"/>
                <p className='text-primary h4 p-0 m-0'>
                    TeaTracer
                </p>
            </NavLink>
            <div className='d-flex flex-row justify-content-end align-items-top'>
                {isAuthenticated && (
                    <Dropdown>
                        <Dropdown.Toggle size="sm" variant="primary" id="dropdown-profile">
                        
                            {loading && 
                                <>
                                    <Spinner animation="grow" size="sm" />
                                    <Spinner animation="grow" size="sm" />
                                    <Spinner animation="grow" size="sm" />
                                </>
                            }

                            {profileData &&
                                <>
                                    <i className="bi bi-person-circle"></i>
                                    <span className="ps-2">
                                        {profileData.first_name}
                                    </span>
                                    <span className="p-1">
                                        {profileData.last_name}
                                    </span>
                                </>
                            }
                            












                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
                            <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                            <Dropdown.Item href="/core-data">Core Data</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item onClick={() => setShowLogoutModal(true)}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                )}
                <span className='p-1 px-3' onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? (
                    <i className='bi bi-sun-fill p-0 m-0'></i>
                ) : (
                    <i className='bi bi-moon-fill text-primary p-0 m-0'></i>
                )}
            </span>
            </div>
            <LogoutModal show={showLogoutModal} onHide={() => setShowLogoutModal(false)} />
        </div>
    )
}