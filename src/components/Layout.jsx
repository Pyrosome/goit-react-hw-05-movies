import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";


const Layout = () => {

    return (
        <div>

            <ul style={{ display: ' flex' }}>
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