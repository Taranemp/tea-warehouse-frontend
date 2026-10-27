import { useEffect, useState } from "react";
import { apiRequest } from "../services/apiClient";

export default function UserProfilePage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [profileInfo, setProfileInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const result = await apiRequest("GET", "profile");
                setProfileInfo(result);
                setError(null);
            } catch (err) {
                setError(err.message || "An error occurred");
                setProfileInfo([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="container py-5">
                <div className="d-flex justify-content-center align-items-center py-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container py-5">
                <div className="alert alert-danger">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid px-4 py-4">

            {profileInfo && (
                <div className="row justify-content-center">

                    <div className="col-12 col-xl-9">

                        {/* Page Header */}
                        <div className="mb-4">
                            <h2 className="fw-bold mb-1">My Profile</h2>
                            <p className="text-muted mb-0">
                                Manage your personal information and account settings.
                            </p>
                        </div>

                        {/* Profile Card */}
                        <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

                            {/* Profile Header */}
                            <div className="position-relative bg-primary p-4 p-md-5">

                                <div className="d-flex flex-column flex-md-row align-items-center gap-4">

                                    {/* Avatar */}
                                    <div
                                        className="rounded-circle bg-white text-primary d-flex justify-content-center align-items-center flex-shrink-0 shadow"
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            fontSize: "30px",
                                            fontWeight: "700",
                                        }}
                                    >
                                        {profileInfo.first_name?.charAt(0)}
                                        {profileInfo.last_name?.charAt(0)}
                                    </div>

                                    {/* Name */}
                                    <div className="text-white text-center text-md-start">
                                        <h3 className="fw-bold mb-1">
                                            {profileInfo.first_name}{" "}
                                            {profileInfo.last_name}
                                        </h3>

                                        <p className="mb-0 opacity-75">
                                            <i className="bi bi-person-circle me-2"></i>
                                            User Profile
                                        </p>
                                    </div>

                                </div>
                            </div>

                            {/* Profile Body */}
                            <div className="card-body p-4 p-md-5">

                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <div>
                                        <h5 className="fw-bold mb-1">
                                            Personal Information
                                        </h5>

                                        <p className="text-muted small mb-0">
                                            Your account information
                                        </p>
                                    </div>

                                    <button className="btn btn-outline-primary btn-sm px-3">
                                        <i className="bi bi-pencil me-2"></i>
                                        Edit Profile
                                    </button>
                                </div>

                                <div className="row g-3">

                                    {/* First Name */}
                                    <div className="col-md-6">
                                        <div className="border rounded-3 p-3 h-100">
                                            <div className="d-flex align-items-center gap-3">

                                                <div className="text-primary fs-5">
                                                    <i className="bi bi-person"></i>
                                                </div>

                                                <div>
                                                    <div className="text-muted small mb-1">
                                                        First Name
                                                    </div>

                                                    <div className="fw-semibold">
                                                        {profileInfo.first_name || "-"}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    {/* Last Name */}
                                    <div className="col-md-6">
                                        <div className="border rounded-3 p-3 h-100">
                                            <div className="d-flex align-items-center gap-3">

                                                <div className="text-primary fs-5">
                                                    <i className="bi bi-person"></i>
                                                </div>

                                                <div>
                                                    <div className="text-muted small mb-1">
                                                        Last Name
                                                    </div>

                                                    <div className="fw-semibold">
                                                        {profileInfo.last_name || "-"}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="col-md-6">
                                        <div className="border rounded-3 p-3 h-100">
                                            <div className="d-flex align-items-center gap-3">

                                                <div className="text-primary fs-5">
                                                    <i className="bi bi-envelope"></i>
                                                </div>

                                                <div className="overflow-hidden">
                                                    <div className="text-muted small mb-1">
                                                        Email Address
                                                    </div>

                                                    <div className="fw-semibold text-truncate">
                                                        {profileInfo.email || "-"}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="col-md-6">
                                        <div className="border rounded-3 p-3 h-100">
                                            <div className="d-flex align-items-center gap-3">

                                                <div className="text-primary fs-5">
                                                    <i className="bi bi-telephone"></i>
                                                </div>

                                                <div>
                                                    <div className="text-muted small mb-1">
                                                        Phone Number
                                                    </div>

                                                    <div className="fw-semibold">
                                                        {profileInfo.phone || "-"}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Account Section */}
                                <hr className="my-4" />

                                <div className="d-flex justify-content-between align-items-center">

                                    <div>
                                        <h6 className="fw-bold mb-1">
                                            Account Security
                                        </h6>

                                        <p className="text-muted small mb-0">
                                            Manage your password and security settings.
                                        </p>
                                    </div>

                                    <button className="btn btn-light border">
                                        <i className="bi bi-shield-lock me-2"></i>
                                        Change Password
                                    </button>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
}