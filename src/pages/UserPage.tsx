import { useNavigate, useParams } from "react-router";

export const UserPage = () => {
    const navigate = useNavigate()
    let { userId } = useParams();
    return (
        <>
            <strong>
                User {userId}
            </strong>
            <br />
            <button onClick={() => navigate(-1)}>Go back</button>
        </>
    )
}