import { Navigate, Outlet } from "react-router-dom";
const RouteLinks = ({auth}) => {
    
    return (auth === true ? <Outlet /> : <Navigate to="/" replace/>)
}
export default RouteLinks;