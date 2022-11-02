import Table from "react-bootstrap/Table";
import MDTypography from "../../../../components/MDTypography";
import "bootstrap/dist/css/bootstrap.min.css";

function BasicExample({ tuplas }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>
            <MDTypography variant="h4" color="dark" fontWeight="bold">
              Producto
            </MDTypography>
          </th>
          <th>
            <MDTypography variant="h4" color="dark" fontWeight="bold">
              Cantidad
            </MDTypography>
          </th>
        </tr>
      </thead>
      <tbody>
        {tuplas[0]._id && tuplas.map((tupla, index) => {
          return (
            <tr key={[tupla._id.productId, tupla._id.size]}>
              <td>
                <MDTypography variant="h5" color="dark" fontWeight="regular">
                  {tupla._id.name + " (" + tupla._id.type + ") Talla " + tupla._id.size}
                </MDTypography>
              </td>
              <td>
                <MDTypography variant="h5" color="dark" fontWeight="regular">
                  {tupla.quantity}
                </MDTypography>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default BasicExample;
