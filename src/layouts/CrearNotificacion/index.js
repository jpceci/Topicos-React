import MDBox from "../../components/MDBox";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import NotificationForm from "./NotificationForm";

function CrearNotificacion(){
    return(
        <DashboardLayout>
            <DashboardNavbar/>
            <MDBox py={3}>
                <NotificationForm name={"Renato Alvarez"}/>
            </MDBox>
        </DashboardLayout>
    );
} export default CrearNotificacion;