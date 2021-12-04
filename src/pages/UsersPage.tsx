import { NavLink } from "react-router-dom"

export const UsersPage = () => {
    const userId = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <>
            <strong>Users</strong>
            {
                userId.map((item, key) => {
                    return (
                        <li key={key}>
                            <NavLink to={`/user/${item}`}>
                                User {item}
                            </NavLink>
                        </li>
                    )
                })
            }
        </>
    )
}