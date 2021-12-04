import { Navigate, useLocation } from "react-router";
import { useAuth } from "../auth/useAuth";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    let auth = useAuth();
    let location = useLocation();

    if (!auth.user) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;
}