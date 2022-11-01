import Dashboard from "./layouts/dashboard";
import Cerrar from "./layouts/authentication/sign-in";
// @mui icons

import DashboardIcon from '@mui/icons-material/Dashboard';
import Contact from "./layouts/Contact";
import VerMasContactados from "./layouts/VerMasContactados";
import VerMasClientesActivos from "./layouts/VerMasClientesActivos";
import VerMasHabituales from "./layouts/VerMasHabituales";
import CrearPromocion from "./layouts/CrearPromocion";
import CrearNotificacion from "./layouts/CrearNotificacion";
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
    key: "contact",
    route: "/contact",
    component: <Contact />,
  },
  {
    type: "collapse",
    name: "ver mas de contactados",
    key: "contactedDetails",
    route: "/contactedDetails",
    component: <VerMasContactados />,
  },
  {
    type: "collapse",
    name: "ver mas de Clientes activos",
    key: "activeClientDetail",
    route: "/activeClientDetail",
    component: <VerMasClientesActivos />,
  },
  {
    type: "collapse",
    name: "ver mas de Clientes Habituales",
    key: "usualClientDetail",
    route: "/usualClientDetail",
    component: <VerMasHabituales/>
  },
  {
    type: "collapse",
    name: "Crear promocion",
    key: "createPromotion",
    route: "/createPromotion",
    component: <CrearPromocion/>
  },
  {
    type: "collapse",
    name: "Crear notificacion",
    key: "createNotification",
    route: "/createNotification",
    component: <CrearNotificacion/>
  },
  
  {
    name: "Cerrar",
    key: "cerrar",
    route: "/sign-in",
    component: <Cerrar />,
  },
];

export default routes;
