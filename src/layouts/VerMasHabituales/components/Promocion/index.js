import { Card } from "@mui/material";
import MDBox from "../../../../components/MDBox";
import Grid from "@mui/material/Grid";
import MDTypography from "../../../../components/MDTypography";
import MDAvatar from "../../../../components/MDAvatar";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
function Promocion({ data, userData }) {

  return (
    <>
      <Card style={{ height: 500, width: 700 }}>
        <MDBox pt={4} px={4}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <MDAvatar
                src={userData.profilePicture}
                alt="Avatar"
                variant="circular"
                size="lg"
              />
            </Grid>

            <Grid item xs={8} spacing={1} container direction="column">
              <MDTypography variant="h6" fontWeight="medium">
                {userData.firstName + " " + userData.lastName}
              </MDTypography>
              <MDTypography variant="caption" fontWeight="light">
                {(data.createdAt).slice(0, 10)}
              </MDTypography>
            </Grid>
            <Grid
              item
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
          <Grid item xs container direction="column">
            <MDTypography variant="h6" color="dark" fontWeight="regular">
              {data.text + "\n"}
            </MDTypography>
            <div style={{ height: 20 }} />
            <Grid item xs>
              <img src={data.picture} width="250"></img>
            </Grid>
          </Grid>
        </MDBox>
      </Card>
      <div style={{ height: 10 }} />
    </>
  );
}
export default Promocion;