import MDBox from "../../../components/MDBox";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDTypography from "../../../components/MDTypography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import MDButton from "../../../components/MDButton";
import * as React from "react";

function NotificationForm({ name }) {
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const handleChange = (event) => {
    setLink(event.target.value);
  };

  const descriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(description);
    console.log(link);
  };
  return (
    <Card style={{ height: 400, width: 700 }}>
      <form onSubmit={handleSubmit}>
        <MDBox pt={3} px={3}>
          <hr />
          <Grid item xs container direction="row">
            <MDTypography variant="subtitle2" color="#fff" fontWeight="medium">
              Usuario:
            </MDTypography>
            <MDTypography variant="subtitle2" fontWeight="medium">
              {name}
            </MDTypography>
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
              type="text"
              onChange={descriptionChange}
              fullWidth
            />
          </Grid>
          <Grid item xs container direction="row">
            <MDTypography variant="subtitle2" color="#fff" fontWeight="medium">
              Foto (link):
            </MDTypography>
            <TextField
              type="text"
              onChange={handleChange}
              fullWidth />
          </Grid>
          <MDButton
            style={{ position: "absolute", bottom: 15, maxWidth: "80%" }}
            variant="gradient"
            color="info"
            size="small"
            type="submit"
          >
            Enviar
          </MDButton>
        </MDBox>
      </form>
    </Card>
  );
}
export default NotificationForm;