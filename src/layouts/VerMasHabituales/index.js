import MDBox from "../../components/MDBox";
import MDButton from "../../components/MDButton";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Promocion from "./components/Promocion";
function VerMasHabituales() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDButton>Crear Notificacion</MDButton>
      </MDBox>{" "}
      <MDBox py={3}>
        <Promocion/>
      </MDBox>
    </DashboardLayout>
  );
}
export default VerMasHabituales;
