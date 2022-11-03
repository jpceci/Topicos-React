import MDBox from "../../../../components/MDBox";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MDTypography from "../../../../components/MDTypography";
import TextField from "@mui/material/TextField";
import MDButton from "../../../../components/MDButton";
import { useState } from "react";
import * as React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

let products = ["producto1", "prod2", "prod3"];
//para el select
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function PromotionForm() {
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [discount, setDiscount] = React.useState("");
  const [productsSelected, setProductsSelected] = useState([]);

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  const linkChange = (event) => {
    setLink(event.target.value);
  };

  const discChange = (event) => {
    setDiscount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(discount);
    console.log(description);
    console.log(link);
    console.log(productsSelected);
  };
  //para el select
  

  const handleSelectChange = (event) => {
    const {
      target: { value },
    } = event;
    setProductsSelected(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <Card style={{ height: 500, width: 700 }}>
      <form onSubmit={handleSubmit}>
        <MDBox pt={3} px={3}>
          <hr />

          <Grid item xs container direction="row" sx={{ marginTop: 1 }}>
            <MDTypography variant="subtitle2" color="dark" fontWeight="medium">
              Producto(s):
            </MDTypography>
            <Box sx={{ minWidth: 120 }}>
              <div>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={productsSelected}
                    onChange={handleSelectChange}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {products.map((product) => (
                      <MenuItem key={product} value={product}>
                        <Checkbox
                          checked={productsSelected.indexOf(product) > -1}
                        />
                        <ListItemText primary={product} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </Box>
            {/* <TextField id="outlined-basic"  variant="outlined" /> */}
          </Grid>
          <Grid item xs container direction="row">
            <MDTypography variant="subtitle2" color="dark" fontWeight="medium">
              Descuento:
            </MDTypography>
            <Box sx={{ minWidth: 120 }}>
              <TextField
                variant="outlined"
                size="small"
                type="text"
                onChange={discChange}
              />{" "}
              %
            </Box>
          </Grid>
        </MDBox>

        <MDBox pt={3} px={3}>
          <Grid item xs container direction="row">
            <MDTypography variant="subtitle2" color="dark" fontWeight="medium">
              Descripcion:
            </MDTypography>
          </Grid>
          <Grid item xs container direction="row">
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              type="text"
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs container direction="row">
            <MDTypography variant="subtitle2" color="dark" fontWeight="medium">
              Foto (link):
            </MDTypography>
            <TextField type="text" onChange={linkChange} fullWidth />
          </Grid>
          <MDButton
            style={{ position: "absolute", bottom: 15, maxWidth: "80%" }}
            variant="gradient"
            color="info"
            size="small"
            type="submit"
            // href="http://localhost:3000/dashboard"
          >
            Guardar
          </MDButton>
        </MDBox>
      </form>
    </Card>
  );
}
export default PromotionForm;
