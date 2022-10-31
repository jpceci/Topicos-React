import MDBox from "../../../../components/MDBox";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MDTypography from "../../../../components/MDTypography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import MDButton from "../../../../components/MDButton";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import * as React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function PromotionForm({ name }) {
  const [medio, setMedio] = useState("");
  const [value, setValue] = React.useState(null);

  const handleChange = (event) => {
    setMedio(event.target.value);
  };
  return (
    <Card style={{ height: 500, width: 700 }}>
      <MDBox pt={3} px={3}>
        <hr />

        <Grid item xs container direction="row" sx={{ marginTop: 1 }}>
          <MDTypography variant="subtitle2" color="#fff" fontWeight="medium">
            Producto(s):
          </MDTypography>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth sx={{ margin: 2 }}>
              <InputLabel id="outlined-basic"></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Medio"
                value={medio}
                onChange={handleChange}
                autoWidth
              >
                <MenuItem value={"producto1"}>Producto1</MenuItem>
                <MenuItem value={"producto1"}>Producto1</MenuItem>
                <MenuItem value={"producto1"}>Producto1</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {/* <TextField id="outlined-basic"  variant="outlined" /> */}
        </Grid>
        <Grid item xs container direction="row">
          <MDTypography variant="subtitle2" color="#fff" fontWeight="medium">
            Descuento:
          </MDTypography>
          <TextField /> %
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
          <TextField fullWidth/>
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
