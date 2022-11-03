import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import PromotionForm from "./components/PromotionForm";
// Material Dashboard 2 React components
import MDBox from "../../components/MDBox";
// Material Dashboard 2 React example components
import { useEffect, useState } from "react";


function CrearPromocion() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://calm-wildwood-29871.herokuapp.com/getproducts").then(
            async response => {
                if (response.ok) {
                    const res = await response.json()
                    setProducts(res);
                }
            }
        )
    }, [])
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox py={3}>
                <PromotionForm products={products}/>
            </MDBox>
        </DashboardLayout>
    );

} export default CrearPromocion;