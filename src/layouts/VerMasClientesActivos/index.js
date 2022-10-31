import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import { Card } from "@mui/material";
import MDBox from "../../components/MDBox";
import Grid from "@mui/material/Grid";
import MDAvatar from "../../components/MDAvatar";
import MDTypography from "../../components/MDTypography";
import BasicExample from "./components/Table";
function VerMasClientesActivos() {
  let ordenes = [
    {
      fecha: "18-10-2022",
      producto: "Adore You (Polera)",
      cantidad: 2,
    },
    {
      fecha: "18-10-2022",
      producto: "Adore You (Polera)",
      cantidad: 2,
    },
    {
      fecha: "18-10-2022",
      producto: "Adore You (Polera)",
      cantidad: 2,
    },
    {
      fecha: "18-10-2022",
      producto: "Adore You (Polera)",
      cantidad: 2,
    },
  ];
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
        <MDBox pt={4} px={4}>
          <Grid container spacing={2}>
            <Grid xs={2}>
              <MDAvatar
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/143335283/original/2274a39adc5a8492e073b610dbcdeb1a2f900105/draw-anime-profile-picture-for-you-bd1d.jpg"
                alt="Avatar"
                variant="circular"
                size="lg"
              />
            </Grid>

            <Grid xs={8} spacing={1} container direction="column">
              <MDTypography pt={3} variant="h6" fontWeight="medium">
                Graciela Guzman
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>{" "}
        <hr />
        <MDBox pt={4} px={4}>
          <BasicExample tuplas={ordenes}/>
        </MDBox>
      </Card>
    </DashboardLayout>
  );
}
export default VerMasClientesActivos;
