import { Route, Routes } from "react-router"
import { Layout } from "../components/Layout"
import { RequireAuth } from "../components/RequireAuth"
import { LoginPage } from "../pages/LoginPage"
import { DashboardPage } from "../pages/DashboardPage"
import { HomePage } from "../pages/HomePage"
import { UsersPage } from "../pages/UsersPage"
import { UserPage } from "../pages/UserPage"

export const RoutesConfig = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <DashboardPage />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/users"
                    element={
                        <RequireAuth>
                            <UsersPage />
                        </RequireAuth>
                    }
                />
                <Route path='/user/:userId' element={
                    <RequireAuth>
                        <UserPage />
                    </RequireAuth>
                } />
            </Route>
        </Routes>
    )
}