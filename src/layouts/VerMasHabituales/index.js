import MDBox from "../../components/MDBox";
import MDButton from "../../components/MDButton";
import Grid from "@mui/material/Grid";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Promocion from "./components/Promocion";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

// let detallesDePromociones = [
//   {
//     profilePicture:
//       "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/143335283/original/2274a39adc5a8492e073b610dbcdeb1a2f900105/draw-anime-profile-picture-for-you-bd1d.jpg",
//     firstName: "Graciela ",
//     lastName: "Guzman",
//     date: "31-10-2022",
//     content: "Graciela, ¡Tenemos una sorpresa para ti! este mes contamos con la promocion de 50% de descuento en productos de harry Styles",
//     promotionPicture: "https://raw.githubusercontent.com/marceyuli/fotosTP/main/promHarry.png"
//   },
//   {
//     profilePicture:
//       "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/143335283/original/2274a39adc5a8492e073b610dbcdeb1a2f900105/draw-anime-profile-picture-for-you-bd1d.jpg",
//     firstName: "Graciela ",
//     lastName: "Guzman",
//     date: "31-10-2022",
//     content: "Graciela, ¡Tenemos una sorpresa para ti! este mes contamos con la promocion de 50% de descuento en productos de harry Styles",
//     promotionPicture: "https://raw.githubusercontent.com/marceyuli/fotosTP/main/promHarry.png"
//   },
// ];
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
          {habitualClients.map((item, index) => {
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
