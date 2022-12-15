import Dashboard from "./layouts/dashboard";
import Cerrar from "./layouts/authentication/sign-in";
// @mui icons

import DashboardIcon from '@mui/icons-material/Dashboard';
import DiscountIcon from '@mui/icons-material/Discount';
import CrearPromocion from "./layouts/CrearPromocion";
import Productos from "./layouts/Productos";
const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <DashboardIcon />,
    route: "/dashboard",
    component: <Dashboard />,
  }, 
  {
    type: "collapse",
    name: "Crear promocion",
    key: "createPromotion",
    route: "/createPromotion",
    icon: <DiscountIcon/>,

    component: <CrearPromocion/>
  },
  {
    type: "collapse",
    name: "Productos",
    key: "products",
    route: "/products",
    icon: <DiscountIcon/>,

    component: <Productos/>
  },
  {
    name: "Cerrar",
    key: "cerrar",
    route: "/sign-in",
    component: <Cerrar />,
  },
];

export default routes;
