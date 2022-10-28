import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "../../../../components/MDBox";
import MDTypography from "../../../../components/MDTypography";
import MDAvatar from "../../../../components/MDAvatar";
import MDButton from "../../../../components/MDButton";
import Grid from "@mui/material/Grid";
import PhoneIcon from "@mui/icons-material/Call";
import { useEffect, useState } from "react";


function CardClients({ data }) {

  // const [backendData, setBackendData] = useState([{}]);
  
  //   useEffect(() => {
  //     fetch("https://calm-wildwood-29871.herokuapp.com/getusertimesvisited" + data._id).then(
  //       response => response.json()
  //     ).then(
  //       data => {
  //         setBackendData(data);
  //         console.log(data);
  //       }
  //     )
  //   }, [])
  

  

  return (
    <Card style={{ height: 200 }}>
      <MDBox pt={3} px={3}>
        <Grid container spacing={1}>
          <Grid xs>
            <MDAvatar src={data.profilePicture} alt="Avatar" variant="circular" size="lg" />
          </Grid>

          <Grid xs={8} container direction="column" spacing={1}>
            <MDTypography variant="h6" fontWeight="medium">
              {data.firstName} {data.lastName}
            </MDTypography>
            <Grid item xs container direction="row" justifyContent="space-between">
              <PhoneIcon/>
              <MDTypography variant="button" fontWeight="regular">
                {data.phoneNumber}
              </MDTypography>
            </Grid>

            {data.email && (
              <MDTypography variant="caption" fontWeight="regular">
                {data.email}
              </MDTypography>
            )}
          </Grid>
        </Grid>
        <MDBox mt={2} mb={2}>
          {data.state === 1 && (
            <>
              <Grid item xs container direction="row" justifyContent="space-between">
                <MDTypography variant="caption" color="#fff" fontWeight="regular" >
                  Nro. de veces que ingresó:
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                  10
                </MDTypography>
              </Grid>
              <Grid item xs container direction="row" justifyContent="space-between">
                <MDTypography variant="caption" color="#fff" fontWeight="regular">
                  Último ingreso:
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                  18/10/2022
                </MDTypography>
              </Grid>

              <Grid item xs container direction="row" justifyContent="space-between">
                <MDTypography variant="caption" color="#fff" fontWeight="regular">
                  Link de fb:
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                  {data.linkFacebook}
                </MDTypography>
              </Grid>
              <MDButton
                style={{ position: "absolute", bottom: 15, maxWidth: "80%" }}
                variant="gradient"
                color="info"
                fullWidth
                size="small"
              >
                Contactar
              </MDButton>
            </>
          )}

          {data.state === 2 && (
            <>
              <Grid item xs container direction="row" justifyContent="space-between">
                <MDTypography variant="caption" color="#fff" fontWeight="regular">
                  Fecha Contactado: 
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                   18/10/2022
                </MDTypography>
              </Grid>
              <Grid item xs container direction="row" justifyContent="space-between">
                <MDTypography variant="caption" color="#fff" fontWeight="regular">
                  Nro. de veces contactado: 
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                  2
                </MDTypography>
              </Grid>
              <MDButton
                style={{ position: "absolute", bottom: 15, maxWidth: "80%" }}
                variant="gradient"
                color="info"
                fullWidth
                size="small"
              >
                Ver Mas
              </MDButton>
            </>
          )}

          {data.state === 3 && (
            <>
              <Grid item xs container direction="row" justifyContent="space-between">
                <MDTypography variant="caption" color="#fff" fontWeight="regular">
                  Fecha Último Pedido: 
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                  18/10/2022
                </MDTypography>
              </Grid>
              <Grid item xs container direction="row" justifyContent="space-between">
                <MDTypography variant="caption" color="#fff" fontWeight="regular">
                  Productos Pedidos:
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                  7
                </MDTypography>
              </Grid>
              <MDButton
                style={{ position: "absolute", bottom: 15, maxWidth: "80%" }}
                variant="gradient"
                color="info"
                fullWidth
                size="small"
              >
                Ver Mas
              </MDButton>
            </>
          )}

          {data.state === 4 && (
            <>
              <Grid item xs container direction="row" justifyContent="space-between">
                <MDTypography variant="caption" color="#fff" fontWeight="regular">
                  Fecha Último Pedido:
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                 22/10/2022
                </MDTypography>
              </Grid>
              <Grid item xs container direction="row" justifyContent="space-between">
                <MDTypography variant="caption" color="#fff" fontWeight="regular">
                  Frecuencia de Pedidos: 
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                  10 dias
                </MDTypography>
              </Grid>
              <Grid item xs container direction="row" justifyContent="space-between">
                <MDTypography variant="caption" color="#fff" fontWeight="regular">
                  Promedio de Compras:
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                  100bs
                </MDTypography>
              </Grid>
              <MDButton
                style={{ position: "absolute", bottom: 15, maxWidth: "80%" }}
                variant="gradient"
                color="info"
                fullWidth
                size="small"
              >
                Ver Mas
              </MDButton>
            </>
          )}
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default CardClients;
