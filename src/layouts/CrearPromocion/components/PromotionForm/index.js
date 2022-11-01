import MDBox from "../../../../components/MDBox";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MDTypography from "../../../../components/MDTypography";
import TextField from "@mui/material/TextField";
import MultipleSelectCheckmarks from "../MultipleSelectCheckMarks";
import MDButton from "../../../../components/MDButton";
import * as React from "react";

let products = ["producto1", "prod2", "prod3"];
function PromotionForm() {
  return (
    <Card style={{ height: 500, width: 700 }}>
      <MDBox pt={3} px={3}>
        <hr />

        <Grid item xs container direction="row" sx={{ marginTop: 1 }}>
          <MDTypography variant="subtitle2" color="#fff" fontWeight="medium">
            Producto(s):
          </MDTypography>
          <Box sx={{ minWidth: 120 }}>
            <MultipleSelectCheckmarks products={products} />
          </Box>
          {/* <TextField id="outlined-basic"  variant="outlined" /> */}
        </Grid>
        <Grid item xs container direction="row">
          <MDTypography variant="subtitle2" color="#fff" fontWeight="medium">
            Descuento:
          </MDTypography>
          <Box sx={{ minWidth: 120 }}>
              <TextField /> %
          </Box>
        
        </Grid>
      </MDBox>

      <MDBox pt={3} px={3}>
        <Grid item xs container direction="row">
          <MDTypography variant="subtitle2" color="#fff" fontWeight="medium">
            Descripcion:
          </MDTypography>
        </Grid>
        <Grid item xs container direction="row">
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            fullWidth
          />
        </Grid>
        <Grid item xs container direction="row">
          <MDTypography variant="subtitle2" color="#fff" fontWeight="medium">
            Foto (link):
          </MDTypography>
          <TextField fullWidth />
        </Grid>
        <MDButton
          style={{ position: "absolute", bottom: 15, maxWidth: "80%" }}
          variant="gradient"
          color="info"
          size="small"
          href="http://localhost:3000/dashboard"
        >
          Guardar
        </MDButton>
      </MDBox>
    </Card>
  );
}
export default PromotionForm;
