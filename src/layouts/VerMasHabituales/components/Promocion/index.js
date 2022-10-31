import { Card } from "@mui/material";
import MDBox from "../../../../components/MDBox";
import Grid from "@mui/material/Grid";
import MDTypography from "../../../../components/MDTypography";
import MDAvatar from "../../../../components/MDAvatar";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
function Promocion(){
    return(
        <Card style={{ height: 500, width: 700 }}>
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
              <MDTypography variant="h6" fontWeight="medium">
                Graciela Guzman
              </MDTypography>
              <MDTypography variant="caption" fontWeight="light">
                15-10-2022
              </MDTypography>
            </Grid>
            <Grid
              xs={2}
              spacing={1}
              container
              direction="row"
              pt={1}
              justifyContent="flex-end"
            >
              <DeleteIcon />
              <EditIcon />
            </Grid>
          </Grid>
          <hr />
        </MDBox>
        <MDBox pt={3} px={3}>
          <Grid item xs container direction="row">
            <MDTypography variant="caption" color="#fff" fontWeight="medium">
              Graciela, ¡Tenemos una sorpresa para ti!
              este mes contamos con la promocion de 50% de descuento en productos de harry Styles
            </MDTypography>
            <img src="https://raw.githubusercontent.com/marceyuli/fotosTP/main/promHarry.png" width="250"></img>
          </Grid>
        </MDBox>
      </Card>
    );
}
export default Promocion;