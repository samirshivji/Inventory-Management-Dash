import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext.jsx"

const Root = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(user){
           if(user.role === "Admin"){
            navigate("/admin/dahboard");
           } else if (user.role === "employee"){
            navigate("/customer/dashboard");
           } else {
            navigate("/login");
           }
        } else { 
            navigate("/login");
        }
    }, [user, navigate]);

    return null;

}

export default Root;