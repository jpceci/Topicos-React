import { Breadcrumbs } from "@mui/material";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import ContactForm from "./components/ContactForm";
// Material Dashboard 2 React components
import MDBox from "../../components/MDBox";
// Material Dashboard 2 React example components


function Contact(){
    return(
        <DashboardLayout>
           <DashboardNavbar />
           <MDBox py={3}>
                <ContactForm/>
           </MDBox>
        </DashboardLayout>
    );

} export default Contact;