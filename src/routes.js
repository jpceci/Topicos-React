import Dashboard from "./layouts/dashboard";
import Cerrar from "./layouts/authentication/sign-in";
// @mui icons

import DashboardIcon from '@mui/icons-material/Dashboard';
import Contact from "./layouts/Contact";
import VerMasContactados from "./layouts/VerMasContactados";

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
    name: "Cerrar",
    key: "cerrar",
    route: "/sign-in",
    component: <Cerrar />,
  },
];

export default routes;
