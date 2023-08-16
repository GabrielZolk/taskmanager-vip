import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function LogoutButton() {
    const auth = getAuth();
    const navigate = useNavigate();

    function logout() {
        auth.signOut().then(() => {
            navigate("/login", { replace: true });
        });
    }

    return (
        <Button variant="contained" color="warning" onClick={logout} style={{marginBottom: '10px'}}>
            Logout
        </Button>
    );
}
