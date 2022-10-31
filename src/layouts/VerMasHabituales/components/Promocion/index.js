import { Card } from "@mui/material";
import MDBox from "../../../../components/MDBox";
import Grid from "@mui/material/Grid";
import MDTypography from "../../../../components/MDTypography";
import MDAvatar from "../../../../components/MDAvatar";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
function Promocion({data}){
    return(
        <Card style={{ height: 500, width: 700 }}>
        <MDBox pt={4} px={4}>
          <Grid container spacing={2}>
            <Grid xs={2}>
              <MDAvatar
                src={data.profilePicture}
                alt="Avatar"
                variant="circular"
                size="lg"
              />
            </Grid>
  
            <Grid xs={8} spacing={1} container direction="column">
              <MDTypography variant="h6" fontWeight="medium">
                {data.firstName}{data.lastName}
              </MDTypography>
              <MDTypography variant="caption" fontWeight="light">
                {data.date}
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
              {data.content}
            </MDTypography>
            <img src={data.promotionPicture} width="250"></img>
          </Grid>
        </MDBox>
      </Card>
    );
}
export default Promocion;