import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import { Card } from "@mui/material";
import MDBox from "../../components/MDBox";
import Grid from "@mui/material/Grid";
import MDAvatar from "../../components/MDAvatar";
import MDTypography from "../../components/MDTypography";
import BasicExample from "./components/Table";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

function VerMasClientesActivos() {

  const [activeClients, setActiveClients] = useState([{}]);
  useEffect(() => {
    fetch("https://calm-wildwood-29871.herokuapp.com/getactiveclientdata",
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(location.state)
      }).then(
        async response => {
          if (response.ok) {
            const res = await response.json();
            setActiveClients(res);
          }
        }
      )
  }, [])
  console.log(activeClients);
  const location = useLocation()
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
        <MDBox pt={4} px={4}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <MDAvatar
                src={location.state.profilePicture}
                alt="Avatar"
                variant="circular"
                size="lg"
              />
            </Grid>

            <Grid item xs={8} spacing={1} container direction="column">
              <MDTypography pt={3} variant="h6" fontWeight="medium">
                {location.state.firstName + " " + location.state.lastName}
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>{" "}
        <hr />
        <MDBox pt={4} px={4}>
          <BasicExample tuplas={activeClients} />
        </MDBox>
      </Card>
    </DashboardLayout>
  );
}
export default VerMasClientesActivos;
