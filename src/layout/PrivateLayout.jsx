import { Outlet } from "react-router-dom";
import Topbar from "./inc/Topbar.jsx";
import Sidebar from "./inc/Sidebar.jsx";
import MobileMenu from "./inc/MobileMenu.jsx";

export default function PrivateLayout() {
    return (
        <div style={{height: '100vh'}}>
            <div className='row p-0 m-0 py-2 position-fixed top-0 start-0 end-0'>
                <Topbar />
            </div>
            <div className='container-fluid px-1 pt-60 h-100 pb-20'>
                <div className='row h-100 mx-auto'>
                    <div className='d-none d-md-block col-3 mx-auto px-1'>
                        <div className='border rounded-3 p-3 h-100'>
                            <Sidebar />
                        </div>
                    </div>
                    <div className='col-12 col-md-9 mx-auto px-1'>
                        <div className='border rounded-3 p-3 h-100'>
                            <Outlet />
                        </div>
                    </div>
                    <div class="row d-block d-md-none">
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </div>
    );
}

