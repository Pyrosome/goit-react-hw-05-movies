import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";


const Layout = () => {

    const location = useLocation();

    return (
        <div>

            <ul style={{ display: ' flex', paddingLeft: '20px', boxShadow: '0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.08), 0 4px 8px rgba(0,0,0,0.11)', paddingBottom: '15px', paddingTop: '15px' }}>
                <li>
                    <NavLink to='/'> Home </NavLink>
                </li>
                <li>
                    <NavLink to='/movies'> Movies </NavLink>
                </li>
            </ul>

            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
            
        </div>
    )
}

export default Layout;