// Material Dashboard 2 React components
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
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


function ContactForm({ userData }) {
  const [medio, setMedio] = useState("");
  const [value, setValue] = React.useState(null);
  const [content, setContent] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setMedio(event.target.value);
  };
  const contChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    let dataToSend = {
      socialMedia: medio,
      dateContacted: value,
      content: content,
      username: localStorage.username
    }

    fetch("https://calm-wildwood-29871.herokuapp.com/savetalkdetail",
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([userData, dataToSend])
      }).then(
        async response => {
          if (response.ok) {
            navigate('/dashboard');
          }
        }
      )
  };


  return (
    <Card style={{ height: 400, width: 700 }}>
      <form onSubmit={handleSubmit}>
        <MDBox pt={3} px={3}>
          <Grid item xs container direction="row">
            <MDTypography variant="subtitle2" color="dark" fontWeight="medium">
              Usuario:
            </MDTypography>
            <MDTypography variant="subtitle2" color="text" fontWeight="regular">
              {userData.firstName + " " + userData.lastName}
            </MDTypography>
          </Grid>
          <Grid item xs container direction="row" sx={{ marginTop: 1 }}>
            <MDTypography variant="subtitle2" color="dark" fontWeight="medium">
              Fecha:
            </MDTypography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            {/* <TextField id="outlined-basic"  variant="outlined" /> */}
          </Grid>
          <Grid item xs container direction="row" sx={{ marginTop: 1 }}>
            <MDTypography variant="subtitle2" color="dark" fontWeight="medium">
              Medio:
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
                  <MenuItem value={"facebook"}>Facebook</MenuItem>
                  <MenuItem value={"email"}>Email</MenuItem>
                  <MenuItem value={"telefono"}>Telefono</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <hr />
        </MDBox>

        <MDBox pt={3} px={3}>
          <Grid item xs container direction="row">
            <MDTypography variant="subtitle2" color="dark" fontWeight="medium">
              Contenido:
            </MDTypography>
          </Grid>
          <Grid item xs container direction="row">
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              type="text"
              onChange={contChange}
              fullWidth
            />
          </Grid>
          <MDButton
            style={{ position: "absolute", bottom: 15, maxWidth: "80%" }}
            variant="gradient"
            color="info"
            size="small"
            type="submit"
          >
            Guardar
          </MDButton>
        </MDBox>
      </form>
    </Card>
  );
}


export default ContactForm;
