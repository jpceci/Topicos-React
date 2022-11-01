import Card from "@mui/material/Card";
import { Link, useNavigate } from 'react-router-dom';

// Material Dashboard 2 React components
import MDBox from "../../../../components/MDBox";
import MDTypography from "../../../../components/MDTypography";
import MDAvatar from "../../../../components/MDAvatar";
import MDButton from "../../../../components/MDButton";
import Grid from "@mui/material/Grid";
import PhoneIcon from "@mui/icons-material/Call";


function CardClients({ data }) {
  const navigate = useNavigate();
  
  const toContact = () => {
    navigate('/contact', {state:data});
  }
  const toContactedDetails = () => {
    navigate('/contactedDetails', {state:data});
  }
  const toActiveClientDetail = () => {
    navigate('/activeClientDetail', {state:data});
  }
  const toUsualClientDetail = () => {
    navigate('/usualClientDetail', {state:data});
  }
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
                <MDTypography variant="caption" color="dark" fontWeight="regular" >
                  Nro. de veces que ingresó:
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                  {data.timesVisited}
                </MDTypography>
              </Grid>
              <Grid item xs container direction="row" justifyContent="space-between">
                <MDTypography variant="caption" color="dark" fontWeight="regular">
                  Último ingreso:
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                  {(data.lastUserVisit).slice(0, 10)}
                </MDTypography>
              </Grid>

              <Grid item xs container direction="row" justifyContent="space-between">
                <MDTypography variant="caption" color="dark" fontWeight="regular">
                  Link de fb:
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                  {data.linkFacebook}
                </MDTypography>
              </Grid>
              <MDButton
                onClick={() => { toContact() }}
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
                <MDTypography variant="caption" color="dark" fontWeight="regular">
                  Fecha Contactado:
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                  {(data.lastUserContact).slice(0, 10)}
                </MDTypography>
              </Grid>
              <Grid item xs container direction="row" justifyContent="space-between">
                <MDTypography variant="caption" color="dark" fontWeight="regular">
                  Nro. de veces contactado:
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                  {data.timesContacted}
                </MDTypography>
              </Grid>
              <MDButton
                onClick={() => { toContactedDetails() }}
                style={{ position: "absolute", bottom: 15, maxWidth: "80%" }}
                variant="gradient"
                color="info"
                fullWidth
                size="small"
                href="http://localhost:3000/contactedDetails"

              >
                Ver Mas
              </MDButton>
            </>
          )}

          {data.state === 3 && (
            <>
              <Grid item xs container direction="row" justifyContent="space-between">
                <MDTypography variant="caption" color="dark" fontWeight="regular">
                  Fecha Último Pedido:
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                  {(data.lastUserOrder).slice(0, 10)}
                </MDTypography>
              </Grid>
              <Grid item xs container direction="row" justifyContent="space-between">
                <MDTypography variant="caption" color="dark" fontWeight="regular">
                  Productos Pedidos:
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                  {data.timesOrdered}
                </MDTypography>
              </Grid>
              <MDButton
                onClick={() => { toActiveClientDetail() }}
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
                <MDTypography variant="caption" color="dark" fontWeight="regular">
                  Fecha Último Pedido:
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                  {(data.lastOrder).slice(0, 10)}
                </MDTypography>
              </Grid>
              <Grid item xs container direction="row" justifyContent="space-between">
                <MDTypography variant="caption" color="dark" fontWeight="regular">
                  Frecuencia de Pedidos:
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                  {(data.frequencyOrder / 1000 / 60 / 60 / 24).toFixed(0)} días
                </MDTypography>
              </Grid>
              <Grid item xs container direction="row" justifyContent="space-between">
                <MDTypography variant="caption" color="dark" fontWeight="regular">
                  Promedio de Compras:
                </MDTypography>
                <MDTypography variant="caption" color="text" fontWeight="regular">
                  {(data.avgTotalPrice)}bs
                </MDTypography>
              </Grid>
              <MDButton
                onClick={() => { toUsualClientDetail() }}
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
