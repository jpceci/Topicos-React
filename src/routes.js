import Dashboard from "./layouts/dashboard";
import Cerrar from "./layouts/authentication/sign-in";
// @mui icons

import DashboardIcon from '@mui/icons-material/Dashboard';
import Contact from "./layouts/Contact";
import VerMasContactados from "./layouts/VerMasContactados";
import VerMasClientesActivos from "./layouts/VerMasClientesActivos";
import BasicTable from "./layouts/VerMasClientesActivos/components/Table";
import VerMasHabituales from "./layouts/VerMasHabituales";
const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <DashboardIcon />,
    route: "/dashboard",
    component: <Dashboard />,
  }, {
    type: "collapse",
    name: "Contactar",
    key: "tables",
    route: "/contact",
    component: <Contact />,
  },
  {
    type: "collapse",
    name: "ver mas de contactados",
    key: "tables",
    route: "/contactedDetails",
    component: <VerMasContactados />,
  },
  {
    type: "collapse",
    name: "ver mas de Clientes activos",
    key: "tables",
    route: "/activeClientDetail",
    component: <VerMasClientesActivos />,
  },
  {
    type: "collapse",
    name: "ver mas de Clientes Habituales",
    key: "tables",
    route: "/usualClientDetail",
    component: <VerMasHabituales/>
  },
  {
    name: "Cerrar",
    key: "cerrar",
    route: "/sign-in",
    component: <Cerrar />,
  },
];

export default routes;
