import { Card } from "@mui/material";
import MDBox from "../../../../components/MDBox";
import Grid from "@mui/material/Grid";
import MDTypography from "../../../../components/MDTypography";
import MDAvatar from "../../../../components/MDAvatar";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
function TalkDetails() {
  const data = [
    {
      firstName: "Graciela",
      lastName: "Guzmán",
      profilePicture:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/143335283/original/2274a39adc5a8492e073b610dbcdeb1a2f900105/draw-anime-profile-picture-for-you-bd1d.jpg",
    },
  ];
  return (
    <Card style={{ height: 300, width: 700 }}>
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
            <MDTypography variant="caption" fontWeight="light">
              Messenger
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
            Hola le hablamos de la tiendita de pony, hemos visto que esta
            interesado en comprar poleras de Harry styles le hablo para
            coordinar los detalles de la compra
          </MDTypography>
        </Grid>
      </MDBox>
    </Card>
  );
}
export default TalkDetails;
