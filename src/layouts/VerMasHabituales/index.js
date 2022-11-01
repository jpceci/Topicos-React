import MDBox from "../../components/MDBox";
import MDButton from "../../components/MDButton";
import Grid from "@mui/material/Grid";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Promocion from "./components/Promocion";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

function VerMasHabituales() {
  const location = useLocation()

  const [habitualClients, setHabitualClients] = useState([{}]);
  useEffect(() => {
    fetch("https://calm-wildwood-29871.herokuapp.com/getmessages",
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(location.state)
      }).then(
        async response => {
          if (response.ok) {
            const res = await response.json();
            setHabitualClients(res);
          }
        }
      )
  }, [])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDButton>Crear Notificacion</MDButton>
      </MDBox>{" "}
      <MDBox py={3}>
        <Grid item xs={3}>
          {habitualClients[0]._id && habitualClients.map((item, index) => {
            return (
              <div
              >
                <Promocion key={item._id} data={item} userData={location.state} />
                <div style={{ height: 10 }} />

              </div>
            );
          })}
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}
export default VerMasHabituales;
