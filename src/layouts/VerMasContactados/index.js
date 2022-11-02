import MDBox from "../../components/MDBox";
import MDButton from "../../components/MDButton";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import { Grid } from "@mui/material";
import TalkDetails from "./components/TalkDetails";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function VerMasContactados() {
  const location = useLocation()
  const navigate = useNavigate();

  const toContact = () => {
    navigate('/contact', { state: location.state });
  }
  const [contactedClients, setContactedClients] = useState([]);
  useEffect(() => {
    fetch("https://calm-wildwood-29871.herokuapp.com/gettalkdetails",
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(location.state)
      }).then(
        async response => {
          if (response.ok) {
            const res = await response.json();
            setContactedClients(res);
          }
        }
      )
  }, [])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDButton onClick={() => { toContact() }}>
          Crear informacion de contacto
        </MDButton>
      </MDBox>
      <MDBox py={3}>
        <Grid item xs={3}>
          {contactedClients[0] && contactedClients.map((item, index) => {
            return (
              <div key={item._id}>
                <TalkDetails data={item} userData={location.state} />
              </div>
            );
          })}
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}
export default VerMasContactados;
