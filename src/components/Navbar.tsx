import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home Page</NavLink></li>
                <li><NavLink to="/dashboard">Dashboard Page</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
            </ul>
        </nav>
    )
}