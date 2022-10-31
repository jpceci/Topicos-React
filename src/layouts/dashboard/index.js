// @mui material components
import Grid from "@mui/material/Grid";

import MDBox from "../../components/MDBox";
import DefaultInfoCard from "../../examples/Cards/InfoCards/DefaultInfoCard";

import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import { useEffect, useState } from "react";
import CardClients from "./components/CardClients";

function Dashboard() {
  const [prospectClients, setProspectClients] = useState([{}]);
  const [contactedClients, setContactedClients] = useState([{}]);
  const [activeClients, setActiveClients] = useState([{}]);
  const [habitualClients, setHabitualClients] = useState([{}]);
  useEffect(() => {
    fetch("https://calm-wildwood-29871.herokuapp.com/getusersdata").then(
      async response => {
        if (response.ok) {
          const res = await response.json()
          console.log(res);
          setProspectClients(res[0]);
          setContactedClients(res[1]);
          setActiveClients(res[2]);
          setHabitualClients(res[3]);
        }
      }
    )
  }, [])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1}>
              <DefaultInfoCard
                title="Prospectos de Cliente"
                description="Solicitudes: 3"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1}>
              <DefaultInfoCard
                title="Clientes Contactados"
                description=""
                color="info"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1}>
              <DefaultInfoCard
                title="Clientes Activos"
                description=""
                color="success"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1}>
              <DefaultInfoCard
                title="Clientes Habituales"
                description=""
                color="warning"
              />
            </MDBox>
          </Grid>
          <Grid item xs={3}>
            <ul className="prospectClients">
              {prospectClients.map((item) => {
                return (
                  <div>
                    <CardClients data={item} />
                    <div style={{ height: 10 }} />
                  </div>
                )
              })}
            </ul>
          </Grid>
          <Grid item xs={3}>
            <ul className="prospectClients">
              {contactedClients.map((item) => {
                return (
                  <div>
                    <CardClients data={item} />
                    <div style={{ height: 10 }} />
                  </div>
                )
              })}
            </ul>
          </Grid>
          <Grid item xs={3}>
            <ul className="prospectClients">
              {activeClients.map((item) => {
                return (
                  <div>
                    <CardClients data={item} />
                    <div style={{ height: 10 }} />
                  </div>
                )
              })}
            </ul>
          </Grid>
          <Grid item xs={3}>
            <ul className="prospectClients">
              {habitualClients.map((item) => {
                return (
                  <div>
                    <CardClients data={item} />
                    <div style={{ height: 10 }} />
                  </div>
                )
              })}
            </ul>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
