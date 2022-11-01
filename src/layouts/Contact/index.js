import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import ContactForm from "./components/ContactForm";
// Material Dashboard 2 React components
import MDBox from "../../components/MDBox";
// Material Dashboard 2 React example components

import {useLocation} from 'react-router-dom';


function Contact(){
    const location = useLocation()
    return(
        <DashboardLayout>
           <DashboardNavbar />
           <MDBox py={3}>
                <ContactForm userData={location.state}/>
           </MDBox>
         </DashboardLayout>
    );

} export default Contact;