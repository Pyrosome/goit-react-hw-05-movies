import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <>

            <ul style={{ display: ' flex' }}>
                <li>
                    <NavLink to='/'> Home </NavLink>
                </li>
                <li>
                    <NavLink to='/movies'> Movies </NavLink>
                </li>
            </ul>

            <Outlet />
            
        </>
    )
}

export default Layout;