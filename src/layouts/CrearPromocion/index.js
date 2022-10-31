import { Breadcrumbs } from "@mui/material";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import PromotionForm from "./components/PromotionForm";
// Material Dashboard 2 React components
import MDBox from "../../components/MDBox";
// Material Dashboard 2 React example components


function CrearPromocion(){
    return(
        <DashboardLayout>
           <DashboardNavbar />
           <MDBox py={3}>
                <PromotionForm/>
           </MDBox>
        </DashboardLayout>
    );

} export default CrearPromocion;