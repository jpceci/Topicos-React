import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "../../../../components/MDBox";
import MDTypography from "../../../../components/MDTypography";
import MDAvatar from "../../../../components/MDAvatar";
import MDButton from "../../../../components/MDButton";
import Grid from "@mui/material/Grid";
import PhoneIcon from "@mui/icons-material/Call";


function CardClients({ data }) {

  return (
    <Card style={{ height: 200 }}>
      <MDBox pt={3} px={3}>
        <Grid container spacing={1}>
          <Grid item xs>
            <MDAvatar src={data.profilePicture} alt="Avatar" variant="circular" size="lg" />
          </Grid>

          <Grid item xs={8} container direction="column" spacing={1}>
            <MDTypography variant="h6" fontWeight="medium">
              {data.firstName} {data.lastName}
            </MDTypography>
            <Grid item xs container direction="row" justifyContent="space-between">
              <PhoneIcon />
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
                  {data.timesVisited}
                </MDTypography>
              </Grid>
              <Grid item xs container direction="row" justifyContent="space-between">
                <MDTypography variant="caption" color="#fff" fontWeight="regular">
                  Último ingreso:
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                  {(data.lastUserVisit).slice(0,10)}
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
                href="http://localhost:3000/contact"
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
                  {(data.lastUserContact).slice(0,10)}
                </MDTypography>
              </Grid>
              <Grid item xs container direction="row" justifyContent="space-between">
                <MDTypography variant="caption" color="#fff" fontWeight="regular">
                  Nro. de veces contactado:
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                  {data.timesContacted}
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
                  {(data.lastUserOrder).slice(0,10)}
                </MDTypography>
              </Grid>
              <Grid item xs container direction="row" justifyContent="space-between">
                <MDTypography variant="caption" color="#fff" fontWeight="regular">
                  Productos Pedidos:
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                  {data.timesOrdered}
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
                  {(data.lastOrder).slice(0,10)}
                </MDTypography>
              </Grid>
              <Grid item xs container direction="row" justifyContent="space-between">
                <MDTypography variant="caption" color="#fff" fontWeight="regular">
                  Frecuencia de Pedidos:
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                  {(data.frequencyOrder/1000/60/60/24).toFixed(0)} días
                </MDTypography>
              </Grid>
              <Grid item xs container direction="row" justifyContent="space-between">
                <MDTypography variant="caption" color="#fff" fontWeight="regular">
                  Promedio de Compras:
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                  {(data.avgTotalPrice.$numberDecimal*1).toFixed(2)}bs
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
