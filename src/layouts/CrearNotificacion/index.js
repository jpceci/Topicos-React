import MDBox from "../../components/MDBox";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import NotificationForm from "./NotificationForm";
import { useLocation } from 'react-router-dom';


function CrearNotificacion() {
    const location = useLocation()

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox py={3}>
                <NotificationForm userData={location.state}/>
            </MDBox>
        </DashboardLayout>
    );
} export default CrearNotificacion;