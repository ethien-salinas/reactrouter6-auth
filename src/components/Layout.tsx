import {
    Outlet
} from "react-router-dom";
import { AuthStatus } from "./AuthStatus";
import { Navbar } from "./Navbar";

export const Layout = () => {
    return (
        <div>
            <AuthStatus />
            <Navbar />
            <Outlet />
        </div>
    );
}