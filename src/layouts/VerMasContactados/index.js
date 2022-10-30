import MDBox from "../../components/MDBox";
import MDButton from "../../components/MDButton";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import { Grid } from "@mui/material";
import TalkDetails from "./components/TalkDetails";

function VerMasContactados(){
    return(
        <DashboardLayout>
            <DashboardNavbar/>
            <MDBox py={3}>
                <MDButton
                href="http://localhost:3000/contact">
                    Crear informacion de contacto
                </MDButton>
               
            </MDBox>
            <MDBox py={3}>
                 <TalkDetails/>
            </MDBox>
        </DashboardLayout>
    );
}
export default VerMasContactados;