import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";

export default function Productos(){
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
                 {products && products.map((product) => (
                      product.name
                  ))}
            </MDBox>
        </DashboardLayout>
    );
}