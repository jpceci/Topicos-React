import { useState } from "react";
import { useNavigate } from 'react-router-dom';
// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "../../../components/MDBox";
import MDTypography from "../../../components/MDTypography";
import MDButton from "../../../components/MDButton";
// Authentication layout components
import BasicLayout from "../components/BasicLayout";

// Images
import bgImage from "../../../assets/images/bg-sign-in-basic.jpeg";
import { TextField } from "@mui/material";

function Basic() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const usernameChange = (event) => {
    setUsername(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    localStorage.username = username;
    let dataToSend = {
      username: username,
      password: password,
    }

    fetch("https://calm-wildwood-29871.herokuapp.com/login",
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify(dataToSend)
      }).then(
        async response => {
          const res = await response.json();
          console.log(res);
          if (res == "ok") {
            navigate('/dashboard');
          }
        }
      )
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <form onSubmit={handleSubmit}>
            <MDBox>
              <MDBox mb={2}>
                <TextField
                  type="username"
                  label="Username"
                  onChange={usernameChange}
                  fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <TextField
                  type="password"
                  label="Password"
                  onChange={passwordChange}
                  fullWidth />
              </MDBox>
              <MDBox mt={4} mb={1}>
                <MDButton
                  variant="gradient"
                  color="info"
                  type="submit"
                  fullWidth>
                  sign in
                </MDButton>
              </MDBox>
            </MDBox>
          </form>
        </MDBox>

      </Card>
    </BasicLayout>
  );
}

export default Basic;
