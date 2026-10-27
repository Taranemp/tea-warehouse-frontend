import { Outlet } from "react-router-dom";
import Topbar from "./inc/Topbar.jsx";

export default function PublicLayout() {
    return (
        <div style={{height: '100vh'}}>
            <div className='row p-0 m-0 py-2 position-fixed top-0 start-0 end-0'>
                <Topbar />
            </div>
            <div style={{height:'50px'}}></div>
            <div className='container-fluid px-1 h-100'>
                <div className='row h-100'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

